function errFunc(){
    throw "error";
    console.log("this code will not be executed");
}

function func(){
    try{
        console.log("2 : function - 1");
        errFunc();
        console.log("function - 2");
    }
    finally{
        console.log("3 : finally in function - this code will always be executed");
    }
}

try{
    console.log("1 : try - 1");
    func();
    console.log("try - 2");
}
catch(e){
    console.log("4 : catch error : ", e);
}
finally{
    console.log("5 : finally - this code will always be executed");
}