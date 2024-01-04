

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

// sum()

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
// var squares = []
//  numbers.forEach((manish)=>{
//     squares.push(manish * manish)
// })
// console.log(squares)



// const squares = numbers.map((number)=>{
    //     return number * 5
    // })
    
    // const evenNumber = numbers.filter((number)=>{
        //     return number % 2 == 0
        // })
        
        // console.log(evenNumber)
        
 var numbers = [1,2,3,4,5,6,7,8,9,10]
 const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
 },55)

 const cartItems = [
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "momo",
        productPrice : 2,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "chowmein",
        productPrice : 2,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    }
    
 ]
 
 const newCartItems = cartItems.map((item)=>{
   
    return {
        manish : item.productName,
        productPrice : item.productPrice * 2,
        qty: item.qty
    }
 })
//  console.log(newCartItems)

 const totalPrice = cartItems.reduce((accumulator,currentProduct)=>{
        return accumulator + currentProduct.productPrice
 },0)

 const totalQty = cartItems.reduce((accumulator,currentProduct)=>{
    return accumulator + currentProduct.qty
 },0)

//  console.log(totalPrice)
//  console.log(totalQty)


const haha = cartItems.filter((item)=>{
    return item.productPrice === 2 && item.productName === "momo"
})

// ES6

// console.log(haha)


// var name = "manish" 
// let name = "manish"
// const name = "manish"

// require ("packagename") - 
// module.exports = name

// import "packagName"
// export const name 
const name = "Mahesh Basnet"
const {age,name:nayaname,helloworld} = {
    name : "Manish basnet",
    age : 21,
    helloworld : "hello"
     
}
console.log(nayaname)


const [names] = ["Manish basnet","Maesh Basnet"]
console.log(age,name)
console.log(names)

const numbers2 = [1,2,3,4]
const numbersCopy = [...numbers2]
console.log(numbersCopy)