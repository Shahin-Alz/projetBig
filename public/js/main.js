let btnStarter = document.getElementById("btnSection5Starter");
console.log(btnStarter);
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