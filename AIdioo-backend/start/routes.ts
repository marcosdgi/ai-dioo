/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import router from '@adonisjs/core/services/router'
import user from './routes/auth/user.js'
import ia from './routes/ia/ia.js'

router.group(() => {
  user
  ia
}).prefix('/api/v1')
