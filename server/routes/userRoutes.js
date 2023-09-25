import express from 'express'
import adminProtectRoute from '../middlewares/adminProtectRoute.js'
import staffProtectRoute from '../middlewares/staffProtectRoute.js'
import { getUser, getAllUsers, createUser, deleteUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/:id', staffProtectRoute, getUser)
router.get('/all', staffProtectRoute, getAllUsers)
router.post('/', adminProtectRoute, createUser)
router.delete('/', adminProtectRoute, deleteUser)

// router.post('/login', staffProtectRoute, loginUser)
// router.put('/update/:id', staffProtectRoute, updateUser)
// router.post('/logout', logoutUser)

export default router