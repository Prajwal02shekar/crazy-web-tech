

// let h2=document.createElement('h2')
// console.log(h2)
// h2.innerText="Hello Alll"


// document.body.appendChild(h2)



// let section=document.createElement('section');
// console.log(section)
// document.body.appendChild(section)


// let h3=document.createElement('h3');
// console.log(h3)
// h3.innerText="HEading 3"
// let p=document.createElement('p');
// console.log(p)
// p.innerText="ugffxcvjkl;ioptrysfdfghloiuydfdguopui";


// section.append(h3,p)



// let aside=document.createElement('aside');
// console.log(aside)
// document.body.appendChild(aside)

// let h1=document.createElement('h1')
// h1.innerText="Prajwal";

// let img=document.createElement('img')
// img.src="https://avatars.githubusercontent.com/u/160094074?v=4"


// aside.append(h1,img)



// document.body.innerHTML=`
//  <h2>HEading 2</h2>
//     <section>
//         <h3>HEading 3</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ex possimus laudantium ratione sit aliquam,
//             fugiat sapiente voluptatem porro, repellendus quo similique magnam quam.</p>
//     </section>
//     <aside>
//         <h1>Prajwal</h1>
//         <img src="https://avatars.githubusercontent.com/u/160094074?v=4" alt="">
//     </aside>


//     <h4>HEading 4</h4>
// `


async function getProducts(){
    let res=await fetch('https://fakestoreapi.com/products')
    console.log(res)

    let data=await res.json()
    console.log(data)

    let section=document.createElement('section');
    document.body.appendChild(section)

    data.forEach((prod)=>{
        console.log(prod)
        let aside=document.createElement('aside');
        console.log(aside)
        section.append(aside)

        let img=document.createElement('img');
        img.src=`${prod.image}`
        let h2=document.createElement('h2');
        h2.innerText=`${prod.title}`
        let h3=document.createElement('h3')
        h3.innerText=`${prod.price}`
        let btn=document.createElement("button")
        btn.innerText="Add to cart"

        console.log(img,h2,h3,btn)

        aside.append(img,h2,h3,btn)
    })


}
getProducts()