
// hoisting, declaration of function variable (expression) before initlize it
const adding = function divided (a, b){
    return (a / b);
}
console.log(adding(4, 2))


const summ = add(30, 10);
const add = function added(a, b){
    return a + b;
}
console.log("added values", summ)