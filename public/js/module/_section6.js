let btn1 = document.querySelector("#btn1section6");
let btn2 = document.querySelector("#btn2section6");
let btn3 = document.querySelector("#btn3section6");
let btn4 = document.querySelector("#btn4section6");

let alldiv = document.querySelector(".allDivSection6");

btn2.addEventListener("click", function () {
    alldiv.style.setProperty("transform", "translateX(-100%)");
})

btn3.addEventListener("click", function () {
    alldiv.style.setProperty("transform", "translateX(-200%)");
})

btn4.addEventListener("click", function () {
    alldiv.style.setProperty("transform", "translateX(-300%)");
})

btn1.addEventListener("click", function () {
    alldiv.style.setProperty("transform", "translateX(0%)");
})