let myForm=document.querySelector('form');
myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("Form Submitted")

    let email=document.getElementById('email').value
    let password=document.getElementById('passowrd').value

    console.log(email,password)


    let storedData=JSON.parse(localStorage.getItem('userDetails'))
    console.log(storedData)
    if(storedData){
        if(email===storedData.email && password===storedData.password){
            alert("Login Sucessfull")
            window.location.href='./HomePage.html'
        }else{
            alert("Invalid Details")
        }
    }
})