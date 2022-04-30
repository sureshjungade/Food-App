import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let url = "https://www.themealdb.com/api/json/v1/1/random.php";
let container = document.getElementById("product")
if(url){
    container.style.backgroundColor="black"
    
}
 import { getdata,append } from "./fetch.js";

 getdata(url).then((res)=>{
     append(res,container)
 })

 document.getElementById("btn").addEventListener("click",getdata)