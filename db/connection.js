const mongoose = require('mongoose')




//the object in the parameters removes deprication errors
const connectionDb=(url)=>{
    mongoose
    .connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}

module.exports= connectionDb