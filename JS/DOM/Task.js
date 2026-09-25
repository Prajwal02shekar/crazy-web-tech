async function getUsersDetails(){
    let respone=await fetch('https://api.github.com/users')
    console.log(respone)

    let userDetails=await respone.json();
    console.log(userDetails)

    let div=document.createElement('div');
    document.body.appendChild(div)

    userDetails.forEach((user)=>{
        // console.log(user)
        let aside=document.createElement('aside');
        div.appendChild(aside)

        let img=document.createElement('img')
        img.src=`${user.avatar_url}`
        let h2=document.createElement('h2').innerText=`${user.login}`
        let a=document.createElement('a')
        a.href=`${user.html_url}`
        aside.append(img,h2,a)
        a.innerText="Git Hub Link"
    })
}
getUsersDetails()