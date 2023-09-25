import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    roles: {
        type: [String],
        default: ['Staff']
    }
},
    { timeStams: true }
)

const User = mongoose.model('User', userSchema)

export default User