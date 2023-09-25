import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../helpers/generateTokenandSetCookie.js'
import User from '../models/UserModel.js'


// @desc Get a single user
// @route GET /:id
// @access Private to Staff
const getUser = async (req, res) => {
    const { username } = req.params
    try {
        const user = await User.findOne({ username }).select('-password').select('-updatedAt')
        if (!user) {
            return res.status(400).json({ error: 'User does not exist.' })
        }
        res.status(200).json({ error: error.message })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in getUser', error.message)
        return
    }
}

// @desc Get all users
// @route GET /all
// @access Private to Staff
const getAllUsers = async (req, res) => {
    const users = await User.find().select('-password').lean()

    if (!users?.length) {
        return res.status(400).json({ error: 'No users found.' })
    }

    return res.status(200).json(users)
}

// @desc Create new user
// @route POST /
// @access Private to Admin
const createUser = async (req, res) => {
    try {
        const { email, password, roles } = req.body
        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ error: 'User already exists.' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(password, salt)

        const newUser = new User({
            email,
            password: hashedPwd,
            roles,
        })
        await newUser.save()

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)

            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                roles: newUser.roles,
            })
        } else {
            return res.status(500).json({ error: 'Invalid User Data' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log('Error in createUser, ', error.message)
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.body

    if (!id) {
        return res.status(400).json({ message: 'User Id required.' }
        )
    }

}

export {
    getUser,
    getAllUsers,
    createUser,
    deleteUser
}