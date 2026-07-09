// ===============================
// PickTool v1.0
// Main JavaScript
// ===============================

const menuButton=document.getElementById("menuButton");
const navigation=document.getElementById("navigation");
const search=document.getElementById("search");

if(menuButton&&navigation){

menuButton.addEventListener("click",function(){

if(navigation.style.display==="flex"){

navigation.style.display="none";

}else{

navigation.style.display="flex";
navigation.style.flexDirection="column";

}

});

}

if(search){

search.addEventListener("keyup",function(){

const keyword=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(function(card){

if(card.innerText.toLowerCase().includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

document.querySelectorAll('a[href^="#"]').forEach(function(link){

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
