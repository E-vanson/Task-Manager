const express = require('express')
const router =express.Router()
const {getAllTasks,createTask,updateTask,deleteTask,getTask} = require('../controllers/task')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask)

module.exports = router