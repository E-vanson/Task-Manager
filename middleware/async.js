const asyncWrapper = (fn)=>{
       return async (req, res, next)=>{
    try {
        await fn(req, res, next)
        //the error is handled by the built in default error handler
    } catch (error) {
        next(error)
    }
}
}

module.exports = asyncWrapper;