const mongoose = require('mongoose')

//set up the structure of the documents that we will have in our collection 
const taskSchemer = new mongoose.Schema({
    //adding validators
    name:{
        type:String,//the data entered should be a string
        required:[true,'must provide name'],//sets that one must enter the name //required:true|false
        trim:true,//removes any unneccessary white spaces
        maxlength:[20, 'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports= mongoose.model("Task", taskSchemer)