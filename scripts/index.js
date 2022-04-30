import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let id;
import { getdata,append } from "./fetch.js";
document.getElementById("search").addEventListener("input",function(){
    myFn(main,1000)
})



const main = ()=>{
    let container = document.getElementById("product")
    const query = document.getElementById("search").value
    if(query){
        container.style.backgroundColor="black"
        
    }
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${query}`

    

 

 getdata(url).then((res)=>{
     append(res,container)
 })
 
}
    


const myFn = ((func,delay) =>{
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        func()
    },delay)
})
// let user=JSON.parse(localStorage.getItem("username"))
// if(user.name==undefined){
//     document.getElementById("profile").innerHTML=null
   

// }
// else{
//     document.getElementById("profile").innerHTML=`Hello ${user.name}`
//     document.getElementById("l").innerHTML=null
//     document.getElementById("su").innerHTML=null
// }

let user = JSON.parse(localStorage.getItem("data")) 
//localStorage.setItem("data",JSON.stringify(res))
let container = document.getElementById("product")
console.log(user)

user.map(({name,mobile})=>{
    let p1 =document.createElement("h1")
    p1.innerHTML=name
    p1.setAttribute("class","p1")
    let p2 =document.createElement("h1")
    p2.innerHTML=mobile
    p2.setAttribute("class","p1")
    
    container.append(p1,p2)
})



// let p3 =forcreate("p")
// let p4 =forcreate("p")
// let p5 =forcreate("p")