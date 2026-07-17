// merge objects method -1 addign method
const target ={a:1, b:2}
const target2= {b:3, d:4}

const returnMerge = Object.assign(target, target2)
console.log("object merge", returnMerge)

// merge object  method-2 spread operator
/*spread operator - part of modern js, concise, immutable, merging objects */
const obj1 ={name : "Gayatri", age: 25};
const obj2 ={college: 'govt college', rollNo: '103', age:'22'}

const merged = {...obj1, ...obj2}
console.log("merged using spread operator", merged)

// deep merge of object,
 
// flatten array
 const nested = {
    user: {
        name: "John"
    }
 }


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

