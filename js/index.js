// swap two values without using 3rrd variable
let a = 10;
let b = 20;
c = [a, b] = [b, a]
console.log(c);

// write function that returns data type of any value
const getType=()=>{
    // return typeof("Hello")
    // return typeof(10)
    // return typeof([])
    return typeof(null)
    // return typeof({})
}
// why shows object as type of array?
console.log(getType())

// convert celsius to fahrenheit
// const myInput = document.createElement('input')
// myInput.type='text';
// myInput.placeholder="Enter celsius value"
// myInput.id= "user_input"
a =60;
formula = ((a-32)* 5/9);
// document.body.appendChild(myInput);

console.log(formula, "converted")

// check if number is even or odd
arr = 60;
if (arr % 2 === 0){
   console.log("number is even")
}
else{
    console.log("number is odd")
}

// find largest number 
num= [10, 25, 15, 22, 40];
const max = Math.max(...num);  //what if spread operator 
console.log("max number", max)

// 2nd solution for largest number
const findMax=(arr)=>{
    if (arr.length === 0) return undefined;

    let max= arr[0];
    for (let i= 1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([10, 25, 15, 22, 53]));