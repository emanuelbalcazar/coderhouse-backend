'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')

Route.get('/', ( ) => '¡Hola mamá, estoy programando!')
Route.get('/portafolio', 'PortfolioController.index')
// ¿Tienes un controlador con todo un sistema para administrar un recurso (CRUD etc)?
Route.resource('users', 'UserController')

// Agregar middleware de autenticación
Route
    .get('/botonRojo', 'PresidentController.Apocalipsis')
    .middleware('auth')

const Cupcake = use('App/Models/Cupcake')
Route
    .get('cupcakes', async ({view}) => {
		const cupcakes = (await Cupcake.all()).toJSON()

		return view.render('ListaCupcakes', {cupcakes})
	})
