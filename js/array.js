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
console.log("original array", arrFruit)

// remove orange 
console.log("splice- add item",arrFruit.splice(2,1)) 
console.log("arrfruit added orange", arrFruit)
/* 2 is for index number and 1 is count of item to be remove and show mutated array*/

// replace item - 'mango' with 'pineapple' 
/*2 is selected index, 1 is delete count*/
arrFruit.splice(2,1, 'pineapple')
console.log("replace", arrFruit)

// add item without deleting single item
arrFruit.splice(3, 0, "chikoo")
console.log("item add without delete", arrFruit)

// modify any one item to upper case, (work same as replace)
arrFruit.splice(3,1, arrFruit[2].toUpperCase())
// 2 is 2nd index from original array, put selected item at 3rd position to be modify, 1 is modify and delete item
console.log("toUpperCase", arrFruit)


//1.sum of array item
const numbers = [1, 2, 3, 4, 5, 6];
const totalsum = numbers.reduce((acc, current) => acc + current, 0);
console.log("sum of array:", totalsum); 

// sort arrray item
const sortArr= ["car", "animal", "city", "furniture", "states", "country"]
console.log(sortArr.sort())

// reverse array- reverses original array, not sorted with alphabets
console.log("reverse array", arrFruit.reverse())

// fill - fills index from 3-5 with 0
console.log("fill in arr", numbers.fill(1,3)) 
// o/p - [1, 2, 3, 1, 1, 1]

// reorder element
 const letters = ["a", "d", "c", "b", "f", "e"]
 console.log("reorder array item", letters.sort())

//  IMMUTABLE ARRAY YMETHODS IN JS - returning new array instead of modifying original array also called copying methods

  // replacement of mutable sort() is toSort() immutable
    const sortTo = [0, 3, 4, 5, 6, 2, 8, 9, 1]
    console.log("replacement for sort",sortTo.toSorted())
 
  // replacement for reverse is toReversed() in immutable
    console.log("reverseTo for toReversed()", sortTo.toReversed())

  //replace for splice is toSpliced() in immutable
    console.log("sortArr toSpliced", sortArr.toSpliced(2, 3));

  //with() method is for replace array item
  console.log("replace with index", sortArr.with(2, "market"))

  // find maximum element
    console.log("maximum element", Math.max(...sortTo))

  // find minimum element
    console.log("minimum element", Math.min(...sortTo))
  //  o/p will be NaN if have alphabets

  // find second last number
  const getSecondLarge=(arr)=>{
    let largeNumm = - Infinity;
      let secondLargeNum = - Infinity;

        for (const num of arr){
          if(num > largeNumm){
            secondLargeNum = largeNumm;
            largeNumm = num;
          }
          else if (num > secondLargeNum && num !== secondLargeNum){
            secondLargeNum = num;
          }
        }
        return secondLargeNum === secondLargeNum - Infinity ? null : secondLargeNum;
    }
    const numberss =[10, 35, 51, 72, 91, 37, 64, 22];
    console.log(getSecondLarge(numberss))

    // remove duplicate number
    const dupNumber = [1, 2, 3, 4, 1, 6, 7, 2, 9]
    console.log("duplicate number", dupNumber)
      console.log("removed duplicate number", [...new Set(dupNumber)])

    // move all 0's at end of array
      const moveZero=(arr)=>{
        let pos = 0;
          for(let i=0; i< arr.length; i++){
            if (arr[i] !==0) {
              arr[pos] =arr[i];
              pos++;
            }
         }
         while (pos < arr.length){
          arr[pos] = 0;
          pos++;
         }
         return arr;
       }
       const nums =[1, 3, 0, 6, 0, 2, 7, 0]
       console.log("0 moved at the end", moveZero(nums))

      // const moveZero=()=>{
      //   for (let i=0; i< arr.length; i++){
      //     if (arr[i] !==0){

      //     }
      //   }
      // }