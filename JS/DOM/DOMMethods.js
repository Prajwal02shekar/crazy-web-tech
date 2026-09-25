//! DOM Methods

//? getElementById();

// let h1Tag=document.getElementById('head1')
// console.log(h1Tag)
// h1Tag.style.backgroundColor="red"
// h1Tag.style.color="white"

// let ele=document.getElementById('head2')
// console.log(ele)


// let p=document.getElementById('para')
// console.log(p)
// p.style.color="red"



//? getElementByClassName();
//! Example 1
// let elem=document.getElementsByClassName('elemenet')
// console.log(elem)
// for(let i=0;i<elem.length;i++){
//     console.log(elem[i])
//     elem[i].style.color="purple"
// }

//! Example 2
// let cont=document.getElementsByClassName('container');
// console.log(cont)
// for(let i=0;i<cont.length;i++){
//     console.log(cont[i]);
//     cont[i].style.height="100px"
//     cont[i].style.width="100px"
//     cont[i].style.border="2px solid red"
// }


//? getElementByTagName();

// let h1=document.getElementsByTagName('h1')
// console.log(h1)

// for(let j=0;j<h1.length;j++){
//     console.log(h1[j])
//     h1[j].style.backgroundColor="maroon"
// }

//? querySelector();

// let h1Tag=document.querySelector('#head1')
// console.log(h1Tag)


// let h1=document.querySelector('h1')
// console.log(h1)


// let pa=document.querySelector('p');
// console.log(pa)
// pa.style.color="green"


//? querySelectorAll();

let para=document.querySelectorAll('p')
console.log(para)

para.forEach((p)=>{
    console.log(p)
    p.style.color="red"
})


let elem=document.querySelectorAll('.elemenet');
console.log(elem)

elem.forEach((el)=>{
    console.log(el)
})