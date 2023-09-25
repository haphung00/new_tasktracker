import express from 'express'
import adminProtectRoute from '../middlewares/adminProtectRoute.js'
import staffProtectRoute from '../middlewares/staffProtectRoute.js'

const router = express.Router()

// router.get('/', staffProtectRoute, getAllTasks)
// router.get('/:id', staffProtectRoute, getTask)
// router.post('/create', staffProtectRoute, createTask)
// router.post('/check/:id', staffProtectRoute, checkUncheckPost)

export default router