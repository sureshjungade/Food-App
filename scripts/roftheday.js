import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()


let url = "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
let container = document.getElementById("product")
if(url){
    container.style.backgroundColor="black"
    
}
 import { getdata,append } from "./fetch.js";

 getdata(url).then((res)=>{
     append(res,container)
 })