let btn1 = document.querySelector("#btn1section7");
let btn2 = document.querySelector("#btn2section7");
let btn3 = document.querySelector("#btn3section7");


let alldiv = document.querySelector(".allImgSection7");

btn2.addEventListener("click", function () {
    alldiv.style.setProperty("transform", "translateX(-15%)");
})

btn3.addEventListener("click", function () {
    alldiv.style.setProperty("transform", "translateX(-30%)");
})

btn1.addEventListener("click", function () {
    alldiv.style.setProperty("transform", "translateX(0%)");
})