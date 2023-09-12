const express = require('express')
const app=express()
const tasks= require('./routes/tasks')
const connectionDb= require('./db/connection')
const notFound = require('./middleware/not_found')
const errorHandler = require('./middleware/error-handler')
require('dotenv').config()

//setting up the middleware
app.use(express.static('/home/e-vans/projects/Node_Express_Tutorial/node-express-course/03-task-manager/starter/public'))
app.use(express.json())

//routes
app.get('/task', (req, res)=>{
    res.send("The task manager")
})

app.use('/api/v1/tasks', tasks)

app.use('api/v1/tasks/:id', tasks)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 3000

const start=async()=>{
    try{
        await connectionDb(process.env.MONGO_URI)
        app.listen(port ,console.log(`server is listening on ${port}...`))
    }catch(error){
   console.log(error)
    }
}

start()

