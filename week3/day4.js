

for( let a = 0; a<2 ; a++){
    console.log(a,"Manish Basnet")
    
}

// var i = 0 
// while(i<10){
//     console.log(i,"Manish Basnet")
//     i++
// }

// let i = 0; 
// do{
//     console.log(i,"Manish Basnet")
//     i++
// }
// while(i<10)

var person = {
    name : "Manish Basnet",
    age : 21,
    nationality : "Nepali",
    address : "Itahari",
    address2 : "Itahari",
    address3 : "Itahari",
    address4 : "Itahari",
    address5 : "Itahari",


}
// for(let key in person){
//     console.log(person[key])
// }

var names = ["Manish Basnet","Mahesh Basnet","Jitu Thakur","Rajan Adhikari"]
// console.log(names.length)

// for(let manish in names){
//     console.log(names[manish])
// }

// for(var i = 0 ; i<names.length;i++){
//     console.log(names[i])
// }

// for(let name of names){
//     console.log(name)
// }
// console.log(person['name'])
// console.log(person.age)

// var response =  {
//     status: 200,
//     message: "Files fetched successfully",
//     files: [
//         {
//             _id: "6592c4452cb0cff85878baf4",
//             name: "Clean Minimal Launching Soon Instagram Post.png",
//             userId: "347986",
//             ipAddress: "103.121.173.37",
//             path: "https://tapshare.dpkailashcollab.com/u/Clean-Minimal-Launching-Soon-Instagram-Post.png",
//             size: "246316",
//             createdAt: "2024-01-01T13:55:17.006Z",
//             updatedAt: "2024-01-01T13:55:17.006Z",
//             __v: 0
//         }
//     ]
// }

var response2 = {
    status: 200,
    message: "Files fetched successfully",
    files: [
        {
            _id: "6592c4452cb0cff85878baf4",
            name: "Clean Minimal Launching Soon Instagram Post.png",
            userId: "347986",
            ipAddress: "103.121.173.37",
            path: "https://tapshare.dpkailashcollab.com/u/Clean-Minimal-Launching-Soon-Instagram-Post.png",
            size: "246316",
            createdAt: "2024-01-01T13:55:17.006Z",
            updatedAt: "2024-01-01T13:55:17.006Z",
            __v: 0
        },
        {
            _id: "6592c6902cb0cff85878bafc",
            name: "cm.jpeg",
            userId: "347986",
            ipAddress: "103.121.173.37",
            path: "https://tapshare.dpkailashcollab.com/u/cm.jpeg",
            size: "9151",
            createdAt: "2024-01-01T14:05:04.497Z",
            updatedAt: "2024-01-01T14:05:04.497Z",
            __v: 0
        }
    ]
}

var files = response2.files

// files.forEach((file)=>{
//     console.log(file.path)
// })
// console.log(files)

// for(var i = 0; i < files.length ; i++){
//     console.log(files[i].userId)
// }
// for(file of files){
//     console.log(file.name)
// }

// console.log(response2.files[0].ipAddress)
// console.log(response2.files[0].ipAddress)



// console.log(response.files[0].name)