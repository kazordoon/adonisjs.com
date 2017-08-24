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
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('sink').render('sink')
Route.on('/').render('home')
Route.on('404').render('errors.404')
Route.get('docs/:version?/:permalink?', 'GuideController.render').as('guides')
