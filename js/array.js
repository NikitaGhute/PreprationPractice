// array methods 
// array is mutable (changable),it can change, modify, remove items without creating new array.

arr= [1,2,3,4,5,6,7];
console.log("array", arr)



// 1. push item- add item automatically at end of array 
console.log("pushed array item", arr.push(8))
console.log(arr)

// 2. pop item - remove item automatically at end of array
console.log("array pop", arr.pop());

// 3. shift item - remove item at start of array
console.log("shift/ remove array item", arr.shift())

// 4. unshift item -add item at start of array
console.log("add item at start of array", arr.unshift(9))

// 5. splice()- add or remove item at specific indices. 
// console.log("splice array item", arr.splice(1,4))

let arrFruit= ['apple', 'banana', 'orange', 'mango', 'kiwi', 'grapes'];

// remove orange 
console.log("splice add item",arrFruit.splice(2,1)) 
/* 2 is for index number and 1 is for remove 1 item only*/

// replace item - 'mango' with 'pineapple'
arrFruit.splice(2,1, 'pineapple')
console.log("replace", arrFruit)



//1.sum of array
