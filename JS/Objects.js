//? Objects

// let student={
//     stdId:101,
//     stdName:"Ajith",
//     stdAge:23,
// stdAddress:{
//     doorNo:384,
//     area:"RR Nagar",
//     city:"Bangalore",
//     state:"Karnataka",
//     pincode:560098
// }
// }
// console.log(student)
// console.log(student.stdId)
// console.log(student.stdName)
// console.log(student.stdAge)
// console.log(student.stdAddress.doorNo)
// console.log(student.stdAddress.city)
// console.log(student.stdAddress.pincode)




let student = {
    stdId: 101,
    stdName: "Ajith",
    stdAge: 23,
}
console.log(student)

//? Add a new property

// student.stdAddress="Banagaore"
// console.log(student)

// //? updaing a property
// student.stdName="Ajith Kumar"
// console.log(student)

// //? delete a property

// delete student.stdId
// console.log(student)


//! Object Inbuilt Methods
// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))


//? freeze()

// Object.freeze(student);
// console.log(Object.isFrozen(student))
//? Add a new property

// student.stdAddress="Banagaore"
// console.log(student)

// //? updaing a property
// student.stdName="Ajith Kumar"
// console.log(student)

// //? delete a property

// delete student.stdId
// console.log(student)


//? sealed

Object.seal(student)
console.log(Object.isSealed(student))
//? Add a new property

// student.stdAddress="Banagaore"
// console.log(student)

// //? updaing a property
// student.stdName="Ajith Kumar"
// console.log(student)

// //? delete a property

delete student.stdId
console.log(student)