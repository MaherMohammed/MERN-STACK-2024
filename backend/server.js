import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errormiddleware.js'; 
import connectDB from './config/db.js'


dotenv.config()
const PORT = process.env.PORT || 5000; 

connectDB()

const app = express();


app.use('/api/users',userRoutes)



app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.use(notFound)
app.use(errorHandler)



app.listen(PORT, ()=>{
    console.log(`SERVER STARTED ON PORT ${PORT}`)
})