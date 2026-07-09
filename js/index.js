// questions for ChatGpt:
// hy need to convert num into string for output of reverse the number

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

// const reverseNumber=()=>{
    let name= "NIKITA";
    let reverseOutput= name.split('').reverse().join('');
    console.log(name)
    console.log("reverse output" ,reverseOutput)
// }

const numm= 123456
let reverseNum = parseFloat(numm.toString().split('').reverse().join(''));  //why need to convert into string for reverse the number
// console.log("numm", numm)
console.log("reverse number", reverseNum)

// unsolved - count digits
// let countdigit= 123456; ..


// reverse below string
let js= "javascript";
let reverseJS= js.split('').reverse().join('');
console.log("reverese js ", reverseJS);

// palindrom 
const palindromp=(str)=>{
    let palindromName = str.split("").reverse().join('');
    return str === palindromName;
}

    console.log("palindrom Name is", palindromp("madam"))
    console.log("palindrome Name is ", palindromp("road"))

// count vowel from given string
const countVowels = (strr)=>{
    let count = 0;
    let vowelss= "aeiouAEIOU";
    for (const char of strr){           //here, char is temprory variable, for (.. of ..) loop through every charater of string one by one
        if (vowelss.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels ("ChatGPT, openAI"))


// count vowels
// const vowelCount =(name1)=>{
    //     let count1 =0;
    //     let vowelss= "aeiouAEIOU";
    //     for (const i of name1){
        //         if(vowelss.includes(i)){
            //             count1++;
            //         }
            //     }
            //     return count1;
            // }
            
            // console.log("vowel count are:", vowelCount("Japanies are technicals"))
            
            
// remove duplicate characters
    let duplicateName="Nikkittaa";
    const uniqueValue= new Set(duplicateName.split(""))       //here set use useful for create new set and works as === to check its value and its type also. splits into characters to get its value
    console.log("unique value:" ,(uniqueValue.size))         

  console.log("count of unique value is:", uniqueValue);

// count character frequency    input-hello, output-h1, e1, l2, o1
const helloName= "hello";
    for (const char of helloName){
        const countHello = char.split;
        console.log("helloName", char)
    }


// remove duplicate value
    let namme="programming";
    const repeatValue= new Set(namme.split(""))
    console.log("remove duplicate from programming:", repeatValue)

// capitalize every word
let capps="i am learning js"
console.log(capps.toUpperCase())
console.log(capps.toLowerCase())   

// capitalize first letter of word from sentence
const capitalSentence=(str)=>{
   return str.split(" ")         //cuts string into array
   .map(item=>item.charAt(0).toUpperCase() +item.slice(1))
     //map loops to capitalize 1st letter of every word
     //slice- extract remaining letters starts from index 1 to last
   .join(" ");        //it again convert into string
}
console.log(capitalSentence("hello word from javascript"));