const Task = require('../Model/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-errors')

const getAllTasks = asyncWrapper( async (req, res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks:tasks})
        //res.status(200).json({tasks, amount:tasks.length})
        //res.status(200).json({status:'success', data:{tasks, nbHits:tasks.length}})
})

const createTask = asyncWrapper( async (req, res)=>{
        const task = await Task.create(req.body)
    res.status(201).json({task:task})
})

const getTask = asyncWrapper( async (req, res)=>{
    
        const {id:taskID} = req.params
        const task =  await Task.findOne({_id:taskID})
        if(!task){
            // const err = new Error('Not found')
            // err.status(404)
            // return next(err)
           // return res.status(404).json({msg:`No task with the id ${taskID}`})
           return next(createCustomError(`No task with the id ${taskID}`, 404))
        }
        //res.send(req.params.id)
        res.status(200).json({task:task})
})

const updateTask = asyncWrapper( async (req, res)=>{
        const {id:taskID} = req.params
        const task = await Task.updateOne({_id:taskID}, req.body,{
        new:true,
        runValidators:true
    })
    if(!task){
       // return res.status(404).json({msg:`No task with the id ${taskID}`})
       return next(createCustomError(`No task with the id ${taskID}`, 404))
    }
    res.status(200).json({task})
    
}
)


const  deleteTask = asyncWrapper( async (req, res)=>{
   
        const {id:taskID} = req.params
        const task = await Task.deleteOne({_id:taskID})
        if(!task){
            //return res.status(404).json({msg:`No task with the id ${taskID}`})
            return next(createCustomError(`No task with the id ${taskID}`, 404))
        }
        //res.send(req.params.id)
        res.status(200).json({task:task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}