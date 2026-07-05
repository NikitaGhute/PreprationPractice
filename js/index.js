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

// factorial for 6 number
const factorialNum=(n)=>{
    if (n === 0) return undefined;
    let  result = 1;
    for (let i =2 ; i<=n; i++){
        result = result *i;
    }
    return result;
}
console.log(factorialNum(6));

// Fibonacci series 
// result might be 0,1,2,3,5,8,13,21 ...... 
const FibonacciSeries=(n)=>{
    if(n <0 ) return undefined;
    let result= 0;

}

// prime number
const isPrime=(num)=> {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    
    // 2 is the only even prime number
    if (num === 2) return true;
    
    // Exclude all other even numbers
    if (num % 2 === 0) return false;
    
    // Check odd factors up to the square root of the number
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

console.log(isPrime(12));
// console.log(isPrime(11));
// console.log(isPrime(11));


// prime number
// function isPrime(num){
//     if (num<=0) return false;
//     if (num % num === 1 ){
//         console.log("is prime number", (1))
//     } 
// }
const reverseNumber=()=>{
    let name= "NIKITA";
    console.log(name)
}