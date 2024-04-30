import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 5000; 

const app = express();


app.use('/api/users',userRoutes)



app.get('/',(req,res)=>{
    res.send('Server is ready')
})


app.listen(PORT, ()=>{
    console.log(`SERVER STARTED ON PORT ${PORT}`)
})