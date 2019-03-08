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
document.querySelector("#activate-all").addEventListener("click", function () {
    allPowersFunction("enabled")

})
document.querySelector("#deactivate-all").addEventListener("click", function () {
    delPowersFunction("enabled")

})

function allSpecPowersFunction(newClass, power) {
    power.classList.toggle(newClass)
    power.classList.toggle("disabled")
}




document.querySelector("#activate-flight").addEventListener("click", function () {
    allSpecPowersFunction("enabled", flight)


})

document.querySelector("#activate-mindreading").addEventListener("click", function () {
    allSpecPowersFunction("enabled", mindReader)


})

document.querySelector("#activate-xray").addEventListener("click", function () {
    allSpecPowersFunction("enabled", xRay)


})