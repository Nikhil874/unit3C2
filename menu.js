async function fetchitems(){
    try{
    let response=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    let data=await response.json();
    console.log(data.meals);
    displayitems(data.meals);
    }
    catch(err){
        console.log(err);
    }
}
fetchitems();
function displayitems(arr){
    arr.map(function(elem){
var itemsdiv=document.getElementById("items");
var div2=document.createElement("div")
var image=document.createElement("img");
image.src=elem.strMealThumb;
var name= document.createElement("h4");
name.textContent=elem.strMeal;
var addtocart=document.createElement("button");
addtocart.textContent="Add to Cart";

var price=document.createElement("p");
price.textContent=Math.ceil((Math.random()*5))*100;
addtocart.onclick=function(){
addedtocart(image.src,name.textContent,price.textContent)
};
div2.append(image,name,price,addtocart);
itemsdiv.append(div2);
    });
}
var arr=JSON.parse(localStorage.getItem("itemsarr"))||[];
var count=document.getElementById("count");
count.textContent=arr.length;
function addedtocart(imagesrc,itemname,itemprice){
   console.log(imagesrc,itemname,itemprice);
   var obj={
       image_src:imagesrc,
       item_name:itemname,
       item_price:itemprice
   }
   arr.push(obj);
  
   var count=document.getElementById("count");
   count.textContent=arr.length;
   
   console.log(arr);
   localStorage.setItem("itemsarr",JSON.stringify(arr));

}
function gotocart(){
    window.location.href="cart.html";
}