# nodejsCustomModule
Nodejs custom module practices and example 

Step-1: Create a file eg. arithmatic.js. Consider this file as your module file which will contain all your module's code.
    
   module.export
    The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. 
    module is a variable that represents current module.
    exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.

    addNumber:function(operand1, operand2){
        return operand1 + operand2;
    },

    In the above code addNumber will act like a function name.

Step-2: Create a file eg app.js and will call the function defined in our module from app.js

        Include your module file arithmatic.js into app.js.

            eg. var obj = require('./arithmaticMod.js');
        
        obj will act like a object of your module and you can access functions defined in your module by obj.

        console.log('Addition: '+ obj.addNumber(5,10));

        obj.addNumber(5,10) calling addNumber function with two parameter.

