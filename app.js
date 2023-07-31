const express = require('express')
const connectDB = require('./config/connectDB')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/api/tasks',async (req,res)=>{
    console.log(req.body);
    res.send("ok");
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