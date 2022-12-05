const attack = document.getElementById("attack");
const div = document.getElementById("div");
const zivoty = document.getElementById("zivoty");
const zivoty2 = document.getElementById("zivoty2");
const info = document.getElementById("info");

const gohome = document.getElementById("gohome");
const gogym = document.getElementById("gogym");
const backongarden = document.getElementById("backongarden");





//move 
gogym.onclick = () =>{
    garden.style.display= "none";
    gym.style.display= "block";
    home.syle.display= "none";

}
gohome.onclick= () =>{
    garden.style.display= "none";
    home.style.display= "block";
    gym.style.display= "none";
    
}
backongarden.onclick= () =>{
    home.style.display= "none";
    garden.style.display= "block";
    gym.style.display= "none";
}
backgarden.onclick = () =>{
    gym.style.display="none";
    garden.style.display="block";
    home.style.display="none";

}
//atack in gym
attack.onmousedown = () =>{

    if(zivoty2.innerHTML <=0 ){
        info.innerHTML= "dodělal jsi sérii";
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
        info.innerHTML="neudělal jsi sérii"
        clearInterval(interval);
    }

},500)




