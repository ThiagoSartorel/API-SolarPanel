/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Solar from 'App/Models/Solar'


Route.get('/all', async () => {
  const solarInfo = await Solar.all()
  return solarInfo
})

Route.get('/last', async () => {
  const solarInfo = await Solar.query().orderBy('created_at', 'desc').first()
  return solarInfo
})
