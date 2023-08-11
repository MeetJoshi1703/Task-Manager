const express = require('express')
const Task = require('../model/taskmodel')
const { createTask, getTask, getSingleTask, deleteTask, updateTask } = require('../controller/taskController')
const router = express.Router()



//create task
router.post('/',createTask)//async (req,res)=>{});

//get tasks
router.get("/",getTask);

//get single task
router.get("/:id",getSingleTask);

//delete a task
router.delete("/:id",deleteTask);

//update a task
router.put("/:id",updateTask);

module.exports = router