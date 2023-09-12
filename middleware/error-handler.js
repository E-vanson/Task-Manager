const {CustomAPIError} = require('../errors/custom-errors')
//setting up a custom error handler
const errorHandler = (err, req, res, next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg: `something went wrong`})
}

module.exports = errorHandler;