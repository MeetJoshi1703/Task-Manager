const mongoose= require('mongoose')

const taskSchema = new mongoose.Schema(
    {

        name:{
            type:String,
            required:[true,"pleaseeeee add a task u stupid"]        
        },
        completed:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    {
        timestamps:true
    }
)

const Task = mongoose.model("Task",taskSchema);

module.exports = Task
