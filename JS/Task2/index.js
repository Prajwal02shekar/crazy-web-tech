let form=document.querySelector('form')
console.log(form)

form.onsubmit=(e)=>{
    e.preventDefault()
    console.log("Form Submitted")

    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)

    let userData={}
    inputBox.forEach((input)=>{
        // console.log(input.value)
        userData[input.name]=input.value
    })

    console.log(userData)

    let section=document.getElementById('container')

    let h1=document.createElement('h1');
    h1.innerText="User Details";


    let img=document.createElement('img')
    img.src=`${userData.imageUrl}`
   


    let h2=document.createElement('h2')
    h2.innerText=`Name: ${userData.username}`
    let p1=document.createElement('p')
    p1.innerText=`Age: ${userData.age}`
    section.append(h1,img,h2,p1)

    
}