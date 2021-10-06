# REST API with Deno and Oak

This repository is an example of a REST API using [Deno](https://deno.land) and [Oak](https://oakserver.github.io/oak/). The example covers the typical Users CRUD REST API with methods for find users, delete users, update users and remove users with mocked database queries.

## Instalation

You need Deno to run this project. You can install it with curl for \*Unix like operating systems or directly with cargo if you have Rust installed.

```
$ curl -fsSL https://deno.land/x/install/install.sh | sh


$ cargo install deno
```

## Launching the server

You can easily launch the server running the following command in the root directory. Don't forget to pass the "allow" flags since the server require access to network and env variables, stored in the .env file.

```
deno run --allow-net --allow-read --allow-env src/server.ts"
```

The example uses also [Denon](https://deno.land/x/denon@2.4.5) a Nodemon like dev environment with hotrelead. Once you have Denon installed you can execute it with:

```
denon start
```

## Project content

The main idea is to have an architecture that could scale and grow spliting the logic into small pieces:

- `.env` Configuration file.

- `server.ts` Deno main server.

- `routes/` Route definitions.

- `handlers/` Route handlers.

- `db/` Database query executors.

- `middleware/` Custom middleware forlder.

- `type/` Custom types definition.

- `scripts.config.ts` Denon configuration file.

## License

MIT
