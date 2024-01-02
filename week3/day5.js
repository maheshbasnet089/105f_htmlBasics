

// var names = ["Manish" , "Mahesh", "Jitu"]

// for( name of names){
//     console.log(name)
// }


// var address = ["Itahari" , "Kathmandu", "Dharan"]

// for(addr of address){
//     console.log(addr)
// }

// function sayHello(){
//     console.log("Hello, How are you")
// }
const sayHello = function(){
    console.log("Hello world")
}

const sayHello2 = ()=>{
    console.log("Hello world")
}

// sayHello2()

// function sum(a,b){
//     console.log(a + b)
// }

// sum(5,4)

// sum(1,2)


// (function hello(){
//     console.log("Hello")
// })()

// function hello(name="Manish"){
//     // console.log("Hello " + name)
//     console.log(`Hello ${name}`)
// }


// const hello = (name="Manish")=>{
//     console.log("hello " + name)
// }
// hello()

var numbers = [1,2,3,4,5,6,7,8,9,10]

// var squares = []
//  numbers.forEach((manish)=>{
//     squares.push(manish * manish)
// })
// console.log(squares)

const squares = numbers.map((number)=>{
    return number * 5
})

const evenNumber = numbers.filter((number)=>{
    return number % 2 == 0
})
console.log(evenNumber)

