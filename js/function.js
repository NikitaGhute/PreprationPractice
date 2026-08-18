
// 1.hoisting, declaration of function variable (expression) before initlize it
const adding = function divided (a, b){
    return (a / b);
}
console.log(adding(4, 2))



// 2. callback
function text() {
    console.log("Hello Js");
}
function newText(callback) {
     callback();
}
newText(text);

// 3.callback for calculate arith operation
const calculate= (a, b, operation)=> {
    return operation(a, b);
};
const add = (a, b)=>{
    return a + b;
};

const mul = (a ,b)=>{
    return a * b;
};
console.log(calculate(10 , 5,add))
console.log(calculate(40, 123, mul))


// 4. 
const greet= (name)=>{
    console.log("Hello", name);
}

const processUer = (callback)=>{
    let name = "Nikita";
    callback(name);
}
processUer(greet);

// 5. callback with parameter
    const sentense = (name)=>{
        console.log("this is" + name)
    }
    
    const sentense2=(callback)=>{
        let name= " callback from js."
        callback(name)
    }
    sentense2(sentense);

// 6. callback with argument
const myName=(namee)=>{
    console.log("My name is "+ namee)
}

const nextPart=(callback)=>{
    let namee ="Nikita"
    callback(namee)
}
nextPart(myName)