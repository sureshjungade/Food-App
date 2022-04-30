let  getdata = async (url)=>{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.meals)
    return data.meals
    
}

let append = (data,container) =>{
    container.innerHTML=null;
data.forEach(({strMealThumb,strMeal,strArea,strInstructions,strYoutube})=>{
    console.log(data)
    let img = document.createElement("img")
    img.src=strMealThumb;
    let name = document.createElement("h3")
    name.innerText=`Name: ${strMeal}`;

    let Area = document.createElement("h3")
    Area.innerText=`Area: ${strArea}`;

    let receipe = document.createElement("p")
    receipe.innerText=`Receipe: ${strInstructions}`;

    let a = document.createElement("a");
    a.innerText="Click here for above receipe"
    a.href=strYoutube;
    container.append(img,name,Area,receipe,a)
})


}

export {getdata,append}