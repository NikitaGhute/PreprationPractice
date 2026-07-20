// merge objects method -1 addign method
const target ={a:1, b:2}
const target2= {b:3, d:4}


// function means only do something, not necessery to return or give output result. eg : switch off the fan, not needed return something, only do task

// return will use, when we need complsory output 
// eg. do sum or multiplication of two numbers. 

// return with function example
  const calcAge=(birthYr)=>{
     let age = 2026 -birthYr;
     return age;
  } 
  const myAge = calcAge(1996)
  console.log("myAge is- ", myAge)


const boyAge= ()=>{
    const boyAge= 4;
   console.log("boy age", boyAge)
}
boyAge();



const returnMerge = Object.assign(target, target2)
console.log("object merge", returnMerge)

// merge object  method-2 spread operator
/*spread operator - part of modern js, concise, immutable, merging objects */
const obj1 ={name : "Gayatri", age: 25};
const obj2 ={college: 'govt college', rollNo: '103', age:'22'}

const merged = {...obj1, ...obj2}
console.log("merged using spread operator", merged)

// deep merge of object,
 
// flatten object

//  group users by city
const users = [
    {name: "Janai", city: "Pune"},
    {name: "Babita", city:"Mumbai"},
    {name: "Nikita", city:"Delhi"}
];

const groupByCity = Object.groupBy(users, user =>user.city);
const groupByName= Object.groupBy(users, name=>name.name)
console.log("group by city",groupByCity)
console.log("group by name", groupByName)

// count occurance in object
const fruits =['apple', 'banana', 'apple', 'orange', 'applle']
const countFruits= fruits.filter(item =>item === 'apple').length;

console.log("apple's count", countFruits)

// count occurance 
const loginUsers=[
    {id: 1, role: 'admin'},
    {id: 2, role: 'user'},
    {id: 3, role: 'admin'},
    {id:4, role: 'guest'},
    {id:5, role:'admin'}
];

const countAdmin = loginUsers.reduce((acc, user) => user.role === 'admin' ? acc+ 1 : acc)
const countGuest = loginUsers.reduce((acc, user1) =>user1.role === 'guest' ? acc +1 :acc ,0)
console.log("countAdmin", countAdmin)
console.log("count guest user", countGuest)




