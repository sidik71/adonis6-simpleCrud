/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AccountingsController from '#controllers/accountings_controller'

router.on('/').render('pages/home')

router.get('/accountings', [AccountingsController, 'index'])
router.get('/accountings/create', [AccountingsController, 'create'])
router.post('/accountings', [AccountingsController, 'store'])
router.get('/accountings/:id/edit', [AccountingsController, 'edit'])
router.post('/accountings/:id', [AccountingsController, 'update'])
router.post('/accountings/:id/delete', [AccountingsController, 'destroy'])