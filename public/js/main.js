let btnStarter = document.getElementById("btnSection5Starter");
let btnDinner = document.getElementById("btnSection5Dinner");
let btnLunch = document.getElementById("btnSection5Lunch");
let btnBreakFast = document.getElementById("btnSection5Breakfast");

let divDinner = document.querySelector(".divDinnerSection5");
let divLunch = document.querySelector(".divLunchSection5");
let divBreakFast = document.querySelector(".divBreakfastSection5");
let divStarter = document.querySelector(".divStarterSection5");


btnStarter.addEventListener("click", function () {
    divStarter.classList.add("divStarter");
    divStarter.classList.remove("divStarterSection5");

    divDinner.classList.add("divDinnerSection5")
    divDinner.classList.remove("divDinner");

    divLunch.classList.add("divLunchSection5")
    divLunch.classList.remove("divLunch")

    divBreakFast.classList.add("divBreakfastSection5")
    divBreakFast.classList.remove("divBreakfast");




})

btnDinner.addEventListener("click", function () {
    divDinner.classList.add("divDinner");
    divDinner.classList.remove("divDinnerSection5");

    divStarter.classList.add("divStarterSection5");
    divStarter.classList.remove("divStarter");

    divBreakFast.classList.add("divBreakfastSection5");
    divBreakFast.classList.remove("divBreakfast");

    divLunch.classList.add("divLunchSection5");
    divLunch.classList.remove("divLunch");

})

btnLunch.addEventListener("click", function () {
    divLunch.classList.add("divLunch");
    divLunch.classList.remove("divLunchSection5");

    divStarter.classList.add("divStarterSection5");
    divStarter.classList.remove("divStarter");

    divBreakFast.classList.add("divBreakfastSection5");
    divBreakFast.classList.remove("divBreakfast");

    divLunch.classList.add("divDinnerSection5");
    divLunch.classList.remove("divDinner");

})

btnBreakFast.addEventListener("click", function () {
    divBreakFast.classList.add("divBreakfast");
    divBreakFast.classList.remove("divBreakfastSection5");

    divStarter.classList.add("divStarterSection5");
    divStarter.classList.remove("divStarter");

    divBreakFast.classList.add("divDinnerSection5");
    divBreakFast.classList.remove("divDinner");

    divLunch.classList.add("divLunchSection5");
    divLunch.classList.remove("divLunch");

})

////////////////////////////////////////////////////////////////////////////////

let btn1sec6 = document.querySelector("#btn1section6");
let btn2sec6 = document.querySelector("#btn2section6");
let btn3sec6 = document.querySelector("#btn3section6");
let btn4sec6 = document.querySelector("#btn4section6");

let alldivsec6 = document.querySelector(".allDivSection6");

btn2sec6.addEventListener("click", function () {
    alldivsec6.style.setProperty("transform", "translateX(-100%)");
})

btn3sec6.addEventListener("click", function () {
    alldivsec6.style.setProperty("transform", "translateX(-200%)");
})

btn4sec6.addEventListener("click", function () {
    alldivsec6.style.setProperty("transform", "translateX(-300%)");
})

btn1sec6.addEventListener("click", function () {
    alldivsec6.style.setProperty("transform", "translateX(0%)");
})



///////////////////////////////////////////////////////////////////

let btn1sec7 = document.querySelector("#btn1section7");
let btn2sec7 = document.querySelector("#btn2section7");
let btn3sec7 = document.querySelector("#btn3section7");


let alldivsec7 = document.querySelector(".allImgSection7");

btn2sec7.addEventListener("click", function () {
    alldivsec7.style.setProperty("transform", "translateX(0%)");
})

btn3sec7.addEventListener("click", function () {
    alldivsec7.style.setProperty("transform", "translateX(-15%)");
})

btn1sec7.addEventListener("click", function () {
    alldivsec7.style.setProperty("transform", "translateX(15%)");
})

////////////////////////////////////////////////////////////////

let btn1 = document.querySelector("#btn1section10");
let btn2 = document.querySelector("#btn2section10");
let btn3 = document.querySelector("#btn3section10");
let btn4 = document.querySelector("#btn4section10");
let btn5 = document.querySelector("#btn5section10");
let btn6 = document.querySelector("#btn6section10");
let btn7 = document.querySelector("#btn7section10");
let btn8 = document.querySelector("#btn8section10");

let img1 = document.querySelector("#img1section10");
let img2 = document.querySelector("#img2section10");
let img3 = document.querySelector("#img3section10");
let img4 = document.querySelector("#img4section10");
let img5 = document.querySelector("#img5section10");
let img6 = document.querySelector("#img6section10");
let img7 = document.querySelector("#img7section10");
let img8 = document.querySelector("#img8section10");

let myDivSection10 = document.querySelector(".allImgSection10");

btn4.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(-26%)");
    img1.classList.remove("imgSecSection10");
    img1.classList.add("imgSection10");
    img2.classList.remove("imgSecSection10");
    img2.classList.add("imgSection10");
    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");

    img5.classList.remove("imgSecSection10");
    img5.classList.add("imgSection10");
    img6.classList.remove("imgSecSection10");
    img6.classList.add("imgSection10");
    img7.classList.remove("imgSecSection10");
    img7.classList.add("imgSection10");
    img8.classList.remove("imgSecSection10");
    img8.classList.add("imgSection10");


    img4.classList.remove("imgSection10");
    img4.classList.add("imgSecSection10");
})

btn5.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(-52%)");
    img1.classList.remove("imgSecSection10");
    img1.classList.add("imgSection10");
    img2.classList.remove("imgSecSection10");
    img2.classList.add("imgSection10");
    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");
    img6.classList.remove("imgSecSection10");
    img6.classList.add("imgSection10");
    img7.classList.remove("imgSecSection10");
    img7.classList.add("imgSection10");
    img8.classList.remove("imgSecSection10");
    img8.classList.add("imgSection10");


    img4.classList.remove("imgSecSection10");
    img4.classList.add("imgSection10")
    img5.classList.remove("imgSection10");
    img5.classList.add("imgSecSection10");
})

btn6.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(-78%)");
    img1.classList.remove("imgSecSection10");
    img1.classList.add("imgSection10");
    img2.classList.remove("imgSecSection10");
    img2.classList.add("imgSection10");
    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");
    img4.classList.remove("imgSecSection10");
    img4.classList.add("imgSection10");

    img7.classList.remove("imgSecSection10");
    img7.classList.add("imgSection10");
    img8.classList.remove("imgSecSection10");
    img8.classList.add("imgSection10");




    img5.classList.remove("imgSecSection10");
    img5.classList.add("imgSection10")
    img6.classList.remove("imgSection10");
    img6.classList.add("imgSecSection10");
})

btn7.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(-104%)");
    img1.classList.remove("imgSecSection10");
    img1.classList.add("imgSection10");
    img2.classList.remove("imgSecSection10");
    img2.classList.add("imgSection10");
    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");
    img4.classList.remove("imgSecSection10");
    img4.classList.add("imgSection10");
    img5.classList.remove("imgSecSection10");
    img5.classList.add("imgSection10");

    img8.classList.remove("imgSecSection10");
    img8.classList.add("imgSection10");



    img6.classList.remove("imgSecSection10");
    img6.classList.add("imgSection10")
    img7.classList.remove("imgSection10");
    img7.classList.add("imgSecSection10");
})

btn8.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(-130%)");
    img1.classList.remove("imgSecSection10");
    img1.classList.add("imgSection10");
    img2.classList.remove("imgSecSection10");
    img2.classList.add("imgSection10");
    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");
    img4.classList.remove("imgSecSection10");
    img4.classList.add("imgSection10");
    img5.classList.remove("imgSecSection10");
    img5.classList.add("imgSection10");
    img6.classList.remove("imgSecSection10");
    img6.classList.add("imgSection10");


    img7.classList.remove("imgSecSection10");
    img7.classList.add("imgSection10")
    img8.classList.remove("imgSection10");
    img8.classList.add("imgSecSection10");
})

btn3.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(-5%)");
    img1.classList.remove("imgSecSection10");
    img1.classList.add("imgSection10");
    img2.classList.remove("imgSecSection10");
    img2.classList.add("imgSection10");
    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");
    img5.classList.remove("imgSecSection10");
    img5.classList.add("imgSection10");
    img6.classList.remove("imgSecSection10");
    img6.classList.add("imgSection10");
    img7.classList.remove("imgSecSection10");
    img7.classList.add("imgSection10");
    img8.classList.remove("imgSecSection10");
    img8.classList.add("imgSection10");



    img4.classList.remove("imgSecSection10");
    img4.classList.add("imgSection10")
    img3.classList.remove("imgSection10");
    img3.classList.add("imgSecSection10");
})

btn2.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(22%)");
    img1.classList.remove("imgSecSection10");
    img1.classList.add("imgSection10");
    img4.classList.remove("imgSecSection10");
    img4.classList.add("imgSection10");
    img5.classList.remove("imgSecSection10");
    img5.classList.add("imgSection10");
    img6.classList.remove("imgSecSection10");
    img6.classList.add("imgSection10");
    img7.classList.remove("imgSecSection10");
    img7.classList.add("imgSection10");
    img8.classList.remove("imgSecSection10");
    img8.classList.add("imgSection10");




    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");
    img2.classList.remove("imgSection10");
    img2.classList.add("imgSecSection10");
})

btn1.addEventListener("click", function () {
    myDivSection10.style.setProperty("transform", "translateX(45%)");
    img2.classList.remove("imgSecSection10");
    img2.classList.add("imgSection10");
    img3.classList.remove("imgSecSection10");
    img3.classList.add("imgSection10");
    img4.classList.remove("imgSecSection10");
    img4.classList.add("imgSection10");
    img5.classList.remove("imgSecSection10");
    img5.classList.add("imgSection10");
    img6.classList.remove("imgSecSection10");
    img6.classList.add("imgSection10");
    img7.classList.remove("imgSecSection10");
    img7.classList.add("imgSection10");
    img8.classList.remove("imgSecSection10");
    img8.classList.add("imgSection10");


    img1.classList.remove("imgSection10");
    img1.classList.add("imgSecSection10");
})

///////////////////////////////////////// DARK Mode

const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

darkModeBtn.addEventListener("click", function () {
    body.style.backgroundColor = body.style.backgroundColor === "white" ? "black" : "white";
});


//////////////////////MODALE


let modal = document.getElementById("myModal");


let btn = document.querySelector(".BtnBookTableNavBar");


let span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//////////////////////////////////


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();