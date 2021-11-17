let secHand = document.querySelector(".sec-hand")
let minHand = document.querySelector(".min-hand")
let hourHand = document.querySelector(".hour-hand")

function setDate(){
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

    let days = now.getDay();
    let months = now.getMonth();
    let year = now.getFullYear();
    
    console.log();
    document.querySelector(".date").innerHTML = `Today is<br>${days}/${months}/${year}`
}


setInterval(setDate, 1000)

let bg1 = `url("../img/gif-background.gif")`
let bg2 = `url("../img/gif-background2.gif")`
let bg3 = `url("../img/gif-background3.gif")`
let bg4 = `url("../img/gif-background4.gif")`
let bg5 = `url("../img/gif-background5.gif")`
let bg6 = `url("../img/gif-background6.gif")`
let arraybg = [bg1 , bg2 , bg3 , bg4 , bg5 ,]
let bgm1 = `url("../img/bgmobile.jpg")`
let bgm2 = `url("../img/gif-bgmobile.gif")`
let bgm3 = `url("../img/gif-bgmobile2.gif")`
let bgm4 = `url("../img/gif-bgmobile3.gif")`
let bgm5 = `url("../img/gif-bgmobile4.gif")`
let bgm6 = `url("../img/gif-bgmobile5.gif")`
let bgm7 = `url("../img/gif-bgmobile6.gif")`
let arraybgmobile = [bgm1, bgm2 , bgm3 , bgm4 , bgm5 , bgm6 , bgm7]

function randombg() {
    let rdm = arraybg[Math.floor(Math.random() * arraybg.length)]
    document.documentElement.style.setProperty("--bg" , rdm)
    console.log(rdm);
}
function randombgmobile() {
    let rdm = arraybgmobile[Math.floor(Math.random() * arraybgmobile.length)]
    document.documentElement.style.setProperty("--bgmobile" , rdm)
    console.log(rdm);
}

document.querySelector(".change-bg").addEventListener("click", randombg)
document.querySelector(".change-bg").addEventListener("click", randombgmobile)