let secHand = document.querySelector(".sec-hand")
let minHand = document.querySelector(".min-hand")
let hourHand = document.querySelector(".hour-hand")

function setDate(){
    let secHand = document.querySelector(".sec-hand")
    let minHand = document.querySelector(".min-hand")
    let hourHand = document.querySelector(".hour-hand")
    const now = new Date();
    const seconds = now.getSeconds();
    let secdegree = ((seconds / 60) * 360) + 90
    secHand.style.transform = `rotate(${secdegree}deg)`

    const minutes = now.getMinutes();
    let mindegree = ((minutes / 60) * 360) + 90
    minHand.style.transform = `rotate(${mindegree}deg)`

    const hours = now.getHours();
    let hdegree = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hdegree}deg)`

    let days = now.getDate();
    let months = now.getMonth() +  1;
    let year = now.getFullYear();
    
    console.log(days);
    document.querySelector(".date").innerHTML = `Today is<br>${days}/${months}/${year}`
}


setInterval(setDate, 1000)
let bg = [
    {
        bg: `url("../img/gif-background.gif")`,
        bgmobile: `url("../img/bgmobile.jpg")`,
    },
    {
        bg: `url("../img/gif-background2.gif")`,
        bgmobile: `url("../img/gif-bgmobile.gif")`,
    },
    {
        bg: `url("../img/gif-background3.gif")`,
        bgmobile: `url("../img/gif-bgmobile2.gif")`,
    },
    {
        bg: `url("../img/gif-background4.gif")`,
        bgmobile: `url("../img/gif-bgmobile3.gif")`,
    },
    {
        bg: `url("../img/gif-background5.gif")`,
        bgmobile: `url("../img/gif-bgmobile4.gif")`,
    },
    {
        bg: `url("../img/gif-background5.gif")`,
        bgmobile: `url("../img/gif-bgmobile5.gif")`,
    },

]

function randombg() {
    let rdm = bg[Math.floor(Math.random() * bg.length)].bg
    document.documentElement.style.setProperty("--bg" , rdm)
    console.log(rdm);
}
function randombgmobile() {
    let rdm = bg[Math.floor(Math.random() * bg.length)].bgmobile
    document.documentElement.style.setProperty("--bgmobile" , rdm)
    console.log(rdm);
}

document.querySelector(".change-bg").addEventListener("click", randombg)
document.querySelector(".change-bg").addEventListener("click", randombgmobile)

let audio1 = new Audio("./music/713.mp3")
function playbgm(){
    audio1.play();
    console.log("hola");
}
function pausebgm(){
    audio1.pause();
    console.log("patimicola");
}

function changeVolume(){
    audio1.volume = this.value / 100
}

document.querySelector(".play-button").addEventListener("click",playbgm)
document.querySelector(".pause-button").addEventListener("click",pausebgm)
document.querySelector("#volume").addEventListener("change", changeVolume)