const char = document.querySelector(".char")
const clicks = document.querySelector(".clicks")

let a = 0;

char.addEventListener("mousedown", ()=>{
    a++
    clicks.innerHTML = 'Clicks' + a
})