// let myForm=document.querySelector('form')
// console.log(myForm)

// myForm.onsubmit=(e)=>{
//     e.preventDefault()

//     let username=document.getElementById('username').value
//     let email=document.getElementById('email').value
//     let password=document.getElementById('passowrd').value

//     console.log(username)
//     console.log(email)
//     console.log(password)
//     console.log("Form Submitted")
// }

//? 2nd way

let myForm=document.querySelector('form')
console.log(myForm)

myForm.onsubmit=(e)=>{
    e.preventDefault()

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)

    let formData={}
    inputBox.forEach((ele)=>{
        console.log(ele.name +":"+ ele.value)
    })
    console.log(formData)
    console.log("Form Submitted")
}