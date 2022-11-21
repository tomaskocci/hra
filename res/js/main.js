const attack = document.getElementById("attack");
const div = document.getElementById("div");
const zivoty = document.getElementById("zivoty");
const zivoty2 = document.getElementById("zivoty2");
const info = document.getElementById("info");

attack.onmousedown = () =>{

    if(zivoty2.innerHTML <=0 ){
        info.innerHTML= "nepřítel zemřel";
        clearInterval(interval)
    }else if(zivoty.innerHTML>0){
        div.style.left = "200px";
    zivoty2.innerHTML--;
    }
    
}
attack.onmouseup = ( ) =>{
    div.style.left = "0px"
}
const interval = setInterval(()=>{
    zivoty.innerHTML--;
    if(zivoty.innerHTML <=0){
        info.innerHTML="zemřel jsi"
        clearInterval(interval);
    }

},500)