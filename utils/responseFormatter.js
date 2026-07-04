function success(message ,data){
    return {
        success:true,
        timeStamp : new Date().toISOString(),
        message,
        data
    };
}
function failure(message){
    return{
        success: false,
        timeStamp : new Date().toISOString(),
        message
    };
}
module.exports = { success,failure };