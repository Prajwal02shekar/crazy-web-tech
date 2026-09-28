//? Click events

let btn=document.querySelector('button')
console.log(btn)


//? using addEventLister();

// btn.addEventListener("click",()=>{
//     console.log("btn clicked")
//     console.log("My name is prajwal")
// })


//? using inbuilt method

// btn.onclick=()=>{
//     console.log("My name is pavan")
//     console.log(10+20)
// }

//! Mouse Events


let h1=document.querySelector('h1')
console.log(h1)


// h1.onmouseover=()=>{
//     console.log("mouse over triggred")
// }

// h1.onmouseout=()=>{
//     console.log("mouse out triggred")
// }

// btn.addEventListener("mouseover",()=>{
//     console.log(" btn overed")
// })
// btn.addEventListener("mouseout",()=>{
//     console.log(" btn out")
// })




//! Keyboard

// window.addEventListener("keydown",()=>{
//     console.log("key down triggred")
// })
// window.addEventListener("keyup",()=>{
//     console.log("key up triggred")
// })

//! Form Events

let form=document.querySelector('form')
console.log(form)

// form.onsubmit=(e)=>{
//     e.preventDefault()
//     console.log("Form Submitted")
// }


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("Form Submitted")
})