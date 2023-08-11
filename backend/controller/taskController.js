const Task = require("../model/taskmodel");

//create a task
const createTask= async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json("error")
    }
}

// get all tasks
const getTask= async (req,res)=>{
    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)
    }catch(error){
        console.log(error)
    }
}
//get single task
const getSingleTask=async (req,res)=>{
    try {
        const {id} = req.params;
        const task = await Task.findById(id)
        if(!task){
            return res.status(404).json("not found")
        }
        res.status(200).json(task);
    } catch (error) {
        res.json({msg:error.message});
    }
}
//delete a task
const deleteTask=async (req,res)=>{
    try {
        const {id} = req.params
        const task =await Task.findByIdAndDelete(id)
        if(!task){
            return res.status(404).json("not found")
        }

        res.status(200).send("task deleted")
    } catch (error) {
        console.log(error);
    }
}
//update a task 
const updateTask = async (req,res)=>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).json("not found")
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}


module.exports ={
    createTask:createTask,
    getTask:getTask,
    getSingleTask:getSingleTask,
    deleteTask:deleteTask,
    updateTask:updateTask
}