import mongoose from "mongoose";

// add requestedBy & date
const taskSchema = mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        maxLength: 50,
        required: true
    },
    description: {
        type: String,
        maxLength: 500,
        default: ''
    },
    finished: {
        type: Boolean,
        default: false,
    }
})

const Task = mongoose.model('Task', taskSchema)
export default Task