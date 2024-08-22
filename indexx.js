let A=document.querySelector(".J1");
let B=document.querySelector(".bodyA1");
let C=document.querySelector(".exp");
let D=document.querySelector(".form1");
let E=document.querySelector(".parent");
let F=document.querySelector("body");
let G=document.querySelector(".up_div");
let H=document.querySelector(".Advertisment");
let disappear=function(){
    B.classList.remove("togg1")
}
let appear=function(){
    B.classList.add("togg1")
}
A.addEventListener("mouseover",function(){
    disappear();    
})
A.addEventListener("mouseleave",function(){
    appear();    
})
C.addEventListener("click",function(){
    D.classList.toggle("form0");
    E.classList.toggle("parent1");
})
function ad1(){
    H.style.backgroundImage='url(ad1.png)';
}
function ad2(){
    H.style.backgroundImage='url(ad2.jpg)';
}
function ad3(){
    H.style.backgroundImage='url(word.jpg)';
}
setInterval(ad1,4000);
setInterval(ad2,5000);
setInterval(ad3,8000);

