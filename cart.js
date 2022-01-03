var arr=JSON.parse(localStorage.getItem("itemsarr"));
displayitems(arr);

function displayitems(arr){
    console.log(arr);
    var itemsdiv=document.getElementById("items");
    itemsdiv.innerHTML="";
    var sum=0;
    arr.map(function(elem,index){
var itemsdiv=document.getElementById("items");
var div1=document.createElement("div")
var image=document.createElement("img");
image.src=elem.image_src;
var name= document.createElement("h4");
name.textContent=elem.item_name;
var addtocart=document.createElement("button");
addtocart.textContent="Delete from Cart";
addtocart.onclick=function(){
deleteElement(index);
}

var price=document.createElement("p");
price.textContent=elem.item_price;
sum+=Number(elem.item_price);

div1.append(image,name,price,addtocart);
itemsdiv.append(div1);
   });
   var displaysum=document.getElementById("total");
   displaysum.textContent=sum;
}
function deleteElement(index){
   arr.splice(index,1);
   localStorage.setItem("itemsarr",JSON.stringify(arr));
   displayitems(arr);

}
function checkout(){
    window.location.href="checkout.html"
}