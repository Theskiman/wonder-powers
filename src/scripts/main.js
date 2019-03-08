const mindReader = document.querySelector("#mindreading")
const flight = document.querySelector("#flight")
const xRay = document.querySelector("#xray")
const allPowers = [mindReader, flight, xRay]


function allPowersFunction(newClass) {
    for (let i = 0; i < allPowers.length; i++) {
        allPowers[i].classList.toggle(newClass)

    }
}

function delPowersFunction(oldClass) {
    for (let i = 0; i < allPowers.length; i++) {
        allPowers[i].classList.remove(oldClass)

    }
}

function allSpecPowersFunction(newClass) {
   let elSel = event.target.id.split("-")
   let targEl = document.getElementById(elSel[1])
   
    targEl.classList.toggle(newClass)
    targEl.classList.toggle("disabled")
    console.log(event.target.id.split("-"))
}

addEventListener("click", function () {
    allSpecPowersFunction("enabled")

})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    delPowersFunction("enabled")

})

document.querySelector("#activate-all").addEventListener("click", function () {
    allPowersFunction("enabled")

})