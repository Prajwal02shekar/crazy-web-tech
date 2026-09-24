//? Promises

//! Promise States 
//? resolve
//? reject
//? pending

//! Instance Methods
//? then() -> handle resolve
//? catch() -> hanlde reject
//? finally() -> 





//! Example 1
// new Promise((resolve,reject)=>{
//     resolve("The promise is resolved");
//     reject("The promise is rejected")
// }).then((abc)=>{
//     console.log(abc)
// }).catch((abb)=>{
//     console.log(abb)
// }).finally(
//     console.log("I will be execting wheater promise is reloved or rejects")
// )


//! Example 2
// let p1=new Promise((res,rej)=>{
//     let ans=isRoomCleaned=true;
//     if(ans){
//         res("Yes the room is cleaned")
//     }else{
//         rej("Room need to be cleand")
//     }
// })

// p1.then((ab)=>{
//     console.log(ab)
// }).catch((cd)=>{
//     console.log(cd)
// })


//! Promise Static Methods
//? Promise.all()

// let p1=new Promise((resolve,reject)=>{
//     resolve("p1 is reloved")
//     reject("p1 is rejected")
// })

// let p2=new Promise((resolve,reject)=>{
//     resolve("p2 is reloved")
//     reject("p2 is rejected")
// })
// let p3=new Promise((resolve,reject)=>{
//     resolve("p3 is reloved")
//     reject("p3 is rejected")
// })
// let p4=new Promise((resolve,reject)=>{
//     resolve("p4 is reloved")
//     reject("p4 is rejected")
// })


// Promise.all([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
//? Promise.any()
// let p1=new Promise((resolve,reject)=>{
//     // resolve("p1 is reloved")
//     reject("p1 is rejected")
// })

// let p2=new Promise((resolve,reject)=>{
//     // resolve("p2 is reloved")
//     reject("p2 is rejected")
// })
// let p3=new Promise((resolve,reject)=>{
//     // resolve("p3 is reloved")
//     reject("p3 is rejected")
// })
// let p4=new Promise((resolve,reject)=>{
//     // resolve("p4 is reloved")
//     reject("p4 is rejected")
// })


// Promise.any([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//? Promise.allSettled()


// let p1=new Promise((resolve,reject)=>{
//     // resolve("p1 is reloved")
//     reject("p1 is rejected")
// })

// let p2=new Promise((resolve,reject)=>{
//     resolve("p2 is reloved")
//     reject("p2 is rejected")
// })
// let p3=new Promise((resolve,reject)=>{
//     // resolve("p3 is reloved")
//     reject("p3 is rejected")
// })
// let p4=new Promise((resolve,reject)=>{
//     resolve("p4 is reloved")
//     reject("p4 is rejected")
// })


// Promise.allSettled([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
//? Promise.race()

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 is reloved")
//         reject("p1 is rejected")
//     }, 3000)
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 is reloved")
//         reject("p2 is rejected")
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3 is reloved")
//         reject("p3 is rejected")
//     }, 5000)
// })
// let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p4 is reloved")
//         // reject("p4 is rejected")
//     },1000)
// })


// Promise.race([p1, p2, p3, p4]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })



//! fetch()

//! GitHub User's API
// https://api.github.com/users

//! Users Data API
// https://jsonplaceholder.typicode.com/users


//! Products API
// https://fakestoreapi.com/products



// fetch("https://api.github.com/users")
//     .then((res) => {
//         console.log(res)

//         let data = res.json()
//         // console.log(data)
//         data.then((res) => {
//             console.log(res)

//             res.forEach((users)=>{
//                 console.log(users.login)
//                 console.log(users.id)
//             })
//         })
//     })



fetch("https://fakestoreapi.com/products")
.then((res)=>{
    console.log(res)
    let productsData=res.json();
    console.log(productsData)

    productsData.then((ab)=>{
        console.log(ab)


        ab.forEach((prod)=>{
            console.log(prod)
            console.log(prod.title)
            console.log(prod.price)
        })
    })
})
