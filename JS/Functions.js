// function wishes(){
//     console.log("Good Afternoon All")
// }
// wishes()


//? Function with parameter


// function addNumber(n1,n2){
//     console.log(n1+n2)
// }

// addNumber(10,5)


// function wishes(username){
//     console.log(`Happy Birthday ${username}`)
// }
// wishes("Pavan")
// wishes("Sakshi")


//? Function with return type

// function addTwoNums(){
//     return 10+10
// }
// console.log(addTwoNums())

// let res=addTwoNums()
// console.log(res)


//? Function with parameter with return type
//? Example 1
// function multiply(num1,num2){
//     return num1*num2
// }
// console.log(multiply(5,6))
// let mul=multiply(10,5)
// console.log(mul);

//? Example 2
// function wishes(username){
//    return `Happy Birthday ${username}`
// }
// console.log(wishes("balaji"))
// console.log(wishes("chetan"))

//? Types of Function [or] Ways to declare a Functions
//! 1. Anonymous Function

// function (){
//     console.log("Iam a anonymous function")
// }

//! 2. Named Function
// function greeting(){
//     console.log("Hello All !!")
// }
// greeting()
//! 3. Function With Expression 
// let fun=function (){
//     console.log("Iam a anonymous function")
// }
// fun()
// let wish=function greeting(){
//     console.log("Hello All !!")
// }
// wish()

//! 4. First Class Function [or] First Citizen Function [or] First order Function
// let fun=function (){
//     console.log("Iam a anonymous function")
// }
// fun()
// let wish=function greeting(){
//     console.log("Hello All !!")
// }
// wish()
//! 5. Arrow Function
// let arrFun=()=>{
//     console.log("Iam a arrow Funcrion")
// }
// arrFun()
//? arrow function  with implicit return [without return keyword]
// let add=()=>10+10;
// console.log(add())

// let mul=(a,b)=>a*b
// console.log(mul(5,2))

//? arrow function  with explicit return [with return keyword]
// let addTwoNum=(n1,n2)=>{
//     return n1+n2
// }
// console.log(addTwoNum(5,3))


//! 6. Immediate Invoke Function Expression [IIFE]

// (function greeting(){
//     console.log("Hello All !!")
// })();

// (function (){
//     console.log("Iam a anonymous function")
// })()

//! 7. Higher Order Function [HOF]

// function add(n1,n2){
//     console.log(n1+n2)
// }
// function sub(n1,n2){
//     console.log(n1-n2)
// }
// function mul(n1,n2){
//     console.log(n1*n2)
// }

// function Operation(a,b,task){
//     task(a,b)
// }
// Operation(10,20,mul)
//! 8. Callback Function [CBF]

function deposit(amout){
    console.log(`${amout} depositted successfully`)
}
function withdraw(amout){
    console.log(`${amout} withdraw successfully`)
}
function transfer(amout){
    console.log(`${amout} transferred successfully`)
}
function bank(amount,operation){
    operation(amount)
}
bank(1000,deposit)
bank(500,withdraw)
bank(1500,transfer)
//! 9. Nested Function

// function Parent(){
//     console.log("Iam a Parent Function")

//     function child(){
//         console.log("Iam a child Function")
//     }
//     child()

// }
// Parent()
//? Javascript Closure
// console.log("Start")
// function Parent() {
//     console.log("Iam a Parent Function")
//     let a = 10;
//     let b = 20;
//     console.log(a)
//     console.log(b)
//     function child() {
//         console.log("Iam a child Function")
//         console.log(a)
//         console.log(b)
//         let c = 30;
//         console.log(c)
//     }
//     child()
// }
// Parent()
//? Javascript Currying

// console.log("Start")
// function Parent() {
//     console.log("Iam a Parent Function")
//     function child() {
//         console.log("Iam a child Function") 
//     }
//     return child
// }
// Parent()()

//? Javascript Clousure With Currying
// function Parent() {
//     console.log("Iam a Parent Function")
//     let a = 10;
//     let b = 20;
//     console.log(a)
//     console.log(b)
//     function child() {
//         console.log("Iam a child Function")
//         console.log(a)
//         console.log(b)
//         let c = 30;
//         console.log(c)
//     }
//     return child
// }
// Parent()()
//! 10.Generator Function


