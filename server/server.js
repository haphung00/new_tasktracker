import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import taskRoutes from './routes/taskRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './database/connectDB.js';

dotenv.config()
connectDB()
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/users', userRoutes)
app.use('/api/tasks', taskRoutes)

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))