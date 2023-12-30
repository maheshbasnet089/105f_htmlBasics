// var variableName = "value"
// let variableName2 = "value"
// const variableName3 = ""

var name1 = "Manish Basnet"
var name2= "Bob Marley"
var name3 = "Ramesh Adhikari"


// console.log(name1)
// console.log(name2)
// console.log(name3)

//ARRAY 
var names = ['Manish Basnet','Ramesh Adhikari',12]
var doesExist = names.includes(123)
console.log(doesExist)
names[0] = "Mahesh Basnet"


// console.log(names)

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])


// objects 

var person1 = {
    name : "Manish Basnet",
    age : 21,
    address : "Itahari"
}
Object.freeze(person1)

person1.name = "Jitu Thakur"
// console.log(person1)
// person1.age = 15
// delete person1.address

// console.log(person1)



// console.log(person1)
// console.log(person1.name,person1.age,person1.address)
// console.log(person1.age)
// console.log(person1.address)

// console.log(person1['name'])
// console.log(person1['age'])