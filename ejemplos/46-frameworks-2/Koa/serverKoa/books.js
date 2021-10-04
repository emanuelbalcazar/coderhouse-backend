// books.js
const Router = require('koa-router');

// Prefix all routes with /books
const router = new Router({
	prefix: '/books'
});

let books = [
	{ id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
	{ id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
	{ id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
	{ id: 104, name: 'Into The Willd', author: 'Jon Krakauer' }
];


/* ---------------------- Routes ----------------------- */
/* API REST Get All */
router.get('/', (ctx, next) => {
	ctx.body = {
		status: 'success',
		message: books
	};
	next();
});

/* API REST Get x ID */
router.get('/:id', (ctx, next) => {
	let getCurrentBook = books.filter(function(book) {
		if (book.id == ctx.params.id) {
			return true;
		}
	});

	if (getCurrentBook.length) {
		ctx.body = getCurrentBook[0];
	} else {
		ctx.response.status = 404;
		ctx.body = {
			status: 'error!',
			message: 'Book Not Found with that id!'
		};
	}
	next();
});

/* API REST Post */
router.post('/new', (ctx, next) => {
	// Check if any of the data field not empty
	if (
		!ctx.request.body.id ||
		!ctx.request.body.name ||
		!ctx.request.body.author
	) {
		ctx.response.status = 400;
		ctx.body = {
			status: 'error',
			message: 'Please enter the data'
        }
	} else {
		let newBook = books.push({
			id: ctx.request.body.id,
			name: ctx.request.body.name,
			author: ctx.request.body.author
		});
		ctx.response.status = 201;
		ctx.body = {
			status: 'success',
			message: `New book added with id: ${ctx.request.body.id} & name: ${
				ctx.request.body.name
			}`
		};
	}
	next();
});

/* API REST Put */
router.put('/update/:id', (ctx, next) => {
	// Check if any of the data field not empty
	if (
		!ctx.request.body.id ||
		!ctx.request.body.name ||
		!ctx.request.body.author
	) {
		ctx.response.status = 400;
		ctx.body = {
			status: 'error',
			message: 'Please enter the data'
        }
	} else {
        let id = ctx.params.id
        let index = books.findIndex(book => book.id == id)
		books.splice(index,1,ctx.request.body)
		ctx.response.status = 201;
		ctx.body = {
			status: 'success',
			message: `New book updated with id: ${ctx.request.body.id} & name: ${
				ctx.request.body.name
			}`
		};
	}
	next();
});

/* API REST Delete */
router.delete('/delete/:id', (ctx, next) => {
    let id = ctx.params.id
	let index = books.findIndex(book => book.id == id)
    books.splice(index,1)
    ctx.response.status = 200;
    ctx.body = {
        status: 'success',
        message: `Book deleted with id: ${id}`
    };
	next();
});


module.exports = router;