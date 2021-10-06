# Create a RESTful API with Deno using MongoDB

> In this article we are going to create a RESTful API with CRUD functionalities. We're going to talk about Deno in detail and build a server using Oak, which is a minimalistic middleware framework (similar to Express).

#### Prerequisites

At least some basic knowledge of these technologies / concepts is required.

- ES6 Features
- TypeScript
- RESTful APIs
- MongoDB

#### What is Deno? 🦕

> Similar to Node.js, Deno is a JavaScript / TypeScript runtime based on the V8 JavaScript Engine. It was created by Ryan Dahl (also the creator of Node.js).

#### Why should we use Deno?

- Built-in support for TypeScript
- Runs in a sandbox and is secure by default
- De-centralized packages
- ES Modules
- Top Level Await

#### Installation ⚙️

Using Shell (macOS and Linux):
`curl -fsSL https://deno.land/x/install/install.sh | sh`

Using PowerShell (Windows):
`iwr https://deno.land/x/install/install.ps1 -useb | iex`

For more installation options checkout the [documentation](https://deno.land/manual/getting_started/installation)

To test your installation, run `deno --version`. If this prints the Deno version to the console the installation was successful.

#### Let's start building

We are going to create a quotes API which will provide us endpoints to perform CRUD operations on these quotes.

Create a `server.ts` and bring in Application from Oak. Now create a new Application

```typescript
import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
```

Now start the server with

```typescript
const PORT = 4000;
await app.listen({ port: PORT });
console.log(`Server running on PORT: ${PORT}`);
```

We will keep our code clean and separated in modules. Let's make a `routes.ts` file to define our routes. We will come back to the `server.ts` file soon. In the `routes.ts` file - Bring in Router from Oak

```typescript
import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router(); // Create Router

router
  .get("/api/quote", getQuotes) // Get all quotes
  .get("/api/quote/:id", getQuote) // Get one quote of quoteID: id
  .post("/api/quote", addQuote) // Add a quote
  .put("/api/quote/:id", updateQuote) // Update a quote
  .delete("/api/quote/:id", deleteQuote); // Delete a quote

export default router;
```

At this point, these functions passed in the routes will be undefined, we'll come back to that later. First, let's import our router in the `server.ts` file.

```typescript
import router from "./routes.ts"; // Bringing in router

app.use(router.routes()); // Pass our router as a middleware
app.use(router.allowedMethods()); // Allow HTTP methods on router
```

Our `server.ts` should look like this

```typescript
import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
const PORT = 4000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
console.log(`Server listening on ${PORT}`);
```

Now, let's build our controllers. Create a `controllers` directory in the root of your project. Then create `controllers.js` -

First, create an interface for a quote

```typescript
interface Quote {
  _id: { $oid: string };
  quote: string;
  quoteID: string;
  author: string;
}
```

Next, we'll bring in `MongoClient` from Deno's Mongo Library in our `controllers.ts` and try to connect with it. Make sure you have a MongoDB Local instance running. You can also use MongoDB Atlas, just replace your URI with the one here.

```typescript
import { MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";
const URI = "mongodb://127.0.0.1:27017";

// Mongo Connection Init
const client = new MongoClient();
try {
  await client.connect(URI);
  console.log("Database successfully connected");
} catch (err) {
  console.log(err);
}

const db = client.database("quotesApp");
const quotes = db.collection<Quote>("quotes");
```

Let's get to the fun part now, we'll create our first controller - `addQuote` to add a quote to the database.

```typescript
// DESC: ADD single quote
// METHOD: POST /api/quote
const addQuote = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  try {
    // If the request has no Body, it will return a 404
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      // Otherwise, it will try to insert
      // a quote in the DB and respond with 201
      const body = await request.body();
      const quote = await body.value;
      await quotes.insertOne(quote);
      response.status = 201;
      response.body = {
        success: true,
        data: quote,
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};
```

Next, we move on to the `getQuote` function which returns a quote from the database.

```typescript
// DESC: GET single quote
// METHOD: GET /api/quote/:id
const getQuote = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  // Searches for a particular quote in the DB
  const quote = await quotes.findOne({ quoteID: params.id });
  // If found, respond with the quote. If not, respond with a 404
  if (quote) {
    response.status = 200;
    response.body = {
      success: true,
      data: quote,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No quote found",
    };
  }
};
```

To get all the quotes stored in the database, we create the `getQuotes` function.

```typescript
// DESC: GET all Quotes
// METHOD GET /api/quote
const getQuotes = async ({ response }: { response: any }) => {
  try {
    // Find all quotes and convert them into an Array
    const allQuotes = await quotes.find({}).toArray();
    console.log(allQuotes);
    if (allQuotes) {
      response.status = 200;
      response.body = {
        success: true,
        data: allQuotes,
      };
    } else {
      response.status = 500;
      response.body = {
        success: false,
        msg: "Internal Server Error",
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};
```

For updating a particular quote, let's build the `updateQuote` function.

```typescript
// DESC: UPDATE single quote
// METHOD: PUT /api/quote/:id
const updateQuote = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  try {
    // Search a quote in the DB and update with given values if found
    const body = await request.body();
    const inputQuote = await body.value;
    await quotes.updateOne(
      { quoteID: params.id },
      { $set: { quote: inputQuote.quote, author: inputQuote.author } }
    );
    // Respond with the Updated Quote
    const updatedQuote = await quotes.findOne({ quoteID: params.id });
    response.status = 200;
    response.body = {
      success: true,
      data: updatedQuote,
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};
```

Now, creating the `deleteQuote` function.

```typescript
// DESC: DELETE single quote
// METHOD: DELETE /api/quote/:id
const deleteQuote = async ({
  params,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  try {
    // Search for the given quote and drop it from the DB
    await quotes.deleteOne({ quoteID: params.id });
    response.status = 201;
    response.body = {
      success: true,
      msg: "Product deleted",
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};
```

Let's export all these functions so we can use them in `routes.ts`

```typescript
export { getQuotes, getQuote, addQuote, updateQuote, deleteQuote };
```

🚩 We're almost done. Next, we'll bring in the `controller.ts` file in our router. Just add this line under the import statements in the `routes.ts` file.

```typescript
import {
  addQuote,
  getQuotes,
  getQuote,
  updateQuote,
  deleteQuote,
} from "./controllers/products.ts";
```

To run the server, go to your project directory and execute this command
`deno run --allow-all server.ts`

_Thats it!_ Your API should be running. Test it with Postman or RestClient

You can view the entire code [here](https://github.com/NakshatraCodes/deno-rest)
Drop a ⭐ on the repo if you like it. Feel free to open any issue or drop a comment if you face any problems or find a mistake somewhere.

If you like my content, please drop a follow or connect with me on my socials
Github - [@NakshatraCodes](https://github.com/NakshatraCodes)
LinkedIn - [Nakshatra Saxena](https://www.linkedin.com/in/nakshatra-saxena)
