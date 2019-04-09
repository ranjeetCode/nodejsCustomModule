//exports is a keyword which makes our module or function accessible to outside of the module.

module.exports ={
    addNumber:function(operand1, operand2){
        return operand1 + operand2;
    },
    
    subNumber:function(operand1, operand2){
        return operand1 - operand2;
    },
    
    mulNumber:function(operand1, operand2){
        return operand1 * operand2;
    },
    
    divNumber:function(operand1, operand2){
        return operand1/operand2; 
    } 
}

/* 
exports.addNumber=function(operand1, operand2){
    return operand1 + operand2;
}

exports.subNumber = function(operand1, operand2){
    return operand1 - operand2;
}

exports.mulNumber = function(operand1, operand2){
    return operand1 * operand2;
}

exports.divNumber = function(operand1, operand2){
    return operand1/operand2; 
}
*/