let num = document.getElementById("num")
let ip = document.getElementById("ip")
let chance1 = document.getElementById("chance1")
let chance2 = document.getElementById("chance2")
let chance3 = document.getElementById("chance3")
let chance4 = document.getElementById("chance4")
let dots = document.getElementsByClassName("dots")
let end = document.getElementById("end")
let endValue = document.getElementById("endValue")
let hints = document.getElementById("hints")
let allHints = document.getElementsByClassName("allHints")
let rightNum = document.getElementById("rightNum")
let h22 = document.getElementById("h22")


window.onload=function(){
    ip.focus();
}

num.innerHTML=Math.floor(Math.random() * 101);

let chances=0;
let hintsNum=0;

function check(){
    if(ip.value==num.innerHTML){
        h22.style.display="none";
        num.style.display="block";
        rightNum.innerHTML+=num.innerHTML;
        setTimeout(function(){
            end.style.cssText="top:50%;left:50%;transform:translate(-50%,-50%);";
            endValue.innerHTML="win";
        },1200)
    }else {
        chances++;
        if(chances <= 5){
            dots[chances-1].classList.add("active");
        }
    }
    if(chances===5){
        end.style.cssText="top:50%;left:50%;transform:translate(-50%,-50%);";
        endValue.innerHTML="lose";
        rightNum.innerHTML+=num.innerHTML;
    }
    if(ip.value > num.innerHTML){
        hintsNum++;
        if(hintsNum <= 5){
            allHints[hintsNum-1].innerHTML= "-" + ip.value;
        }
    }else if(ip.value < num.innerHTML){
        hintsNum++;
        if(hintsNum <= 5){
            allHints[hintsNum-1].innerHTML= "+" + ip.value;
        }
    }
    ip.value="";
    ip.focus();
}

function agine(){
    num.innerHTML=Math.floor(Math.random() * 101);  
    end.style.cssText="top:-800px;left:50%;transform:translateX(-50%);";
    chances=0;
    hintsNum=0;
    dots[0].classList.remove("active");
    dots[1].classList.remove("active");
    dots[2].classList.remove("active");
    dots[3].classList.remove("active");
    dots[4].classList.remove("active");
    allHints[0].innerHTML= "_";
    allHints[1].innerHTML= "_";
    allHints[2].innerHTML= "_";
    allHints[3].innerHTML= "_";
    allHints[4].innerHTML= "_";
    rightNum.innerHTML="the right number :";
    h22.style.display="block";
    num.style.display="none";
}