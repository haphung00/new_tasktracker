import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js'

const adminProtectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) return res.status(401).json({ error: 'Unauthorized' })

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.userId).select('-password')

        if (!user.roles.includes('Admin')) {
            return res.status(401).json({ error: 'Unauthorized' })
        }

        req.user = user
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in adminProtectRoute, ', error.message)
    }
}

export default adminProtectRoute