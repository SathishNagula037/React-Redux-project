import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/UserRouter.js';
import productRouter from './Routes/ProductRouter.js';
import http from 'http';
import cors from 'cors'


const app = express()
const port = 5000;
app.use(cors());




app.use('/api', userRouter)
app.use('/api', productRouter)



mongoose.connect('mongodb://0.0.0.0:27017/sathishRedux', {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connectted...')
})

app.listen(port, () => {
    console.log( `server runing at http://localhost:${port}`)
})
