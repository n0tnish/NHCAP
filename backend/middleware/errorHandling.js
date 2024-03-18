function errorHandling(error, req, res, next) {
    if (error || res.errorCode >= 400) {
        res.json({
            status: error.status || res.errorCode || 500,
            message: 'An error occurred. Retry.'
        })
    } else {
        next()
    }
}

export {
    errorHandling
}