const express = require('express')
const connectDB = require('./config/connectDB');
const Task = require('./model/taskmodel');
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express();
const cors = require('cors')
const taskRoute = require('./routes/taskRoute')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use("/api/tasks",taskRoute) 


app.get('/',(req,res)=>{
    res.send("hello world")
})





const startServer =async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`app is running at port ${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();