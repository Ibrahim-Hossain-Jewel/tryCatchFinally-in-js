//Write a program with a function that an input is not a number then show it's not a number.with error handling try catch block.
// var myNum = "Jewel";
// const myErrorLog = [];

// function checkingNumber(myNum) {
//     if (isNaN(myNum)) {
//         throw "It is not a number";
//     }else{
//         console.log("It's a number");
//     }
// }

// function errorHandler(e) {
//     myErrorLog.push(e);
// }

// //Now try catch block for error handling
// try{
//     checkingNumber(myNum);
// }catch(catchID){
//     console.log("Caught an error " + catchID);
// }
// console.log("I want to live");
//Another statement try catch statement.

function myString(string) {
    if (typeof string === "string") {
        this.value = string;
        this.getValue = function () {
            return "Your string " + this.value + ".";
        }
    }
    else{
        throw new stringExceptionError(string);
    }
}

function stringExceptionError(value) {
    this.value = value;
    this.message = "Must be a string";
    this.toString = function () {
        return this.value + this.message;
    }
}

function varifyString(ee) {
    let str;
    try {
        //Create instance inside this try block.
        str = new myString(ee);
    } catch (e) {
        if (e instanceof stringExceptionError) {
            console.log("String exception "+e);
        }else{
            console.log("Other exception");
        }
    }
    //Now run the finally block that code segment will always run 
    finally{
        console.log("Always run");
    }
    return str;
}

const a = varifyString("I am a string");
console.log(a.getValue());
const b = varifyString(true);
//now create a finallyExample function in javascript.
function finallyExample() {
    try{
        console.log("hello try");
        m;//occured error
    }
    catch(e){
        console.log("Your exception is here "+e.message);
    }finally{
        console.log("Hello occured! always");
    }
}
finallyExample();