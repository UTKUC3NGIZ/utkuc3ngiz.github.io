const body = document.getElementsByTagName("body")[0]

body.style.backgroundImage = "url(images/galaxy.gif)"
body.style.fontFamily = "Montserrat"


// 


const header = document.getElementsByTagName("header")[0]

header.style.textAlign = "center"


// 


const title = document.getElementsByTagName("h1")[0]

title.style.textAlign = "center"
title.style.fontSize = "50px"
title.style.color = "white"


//  


const input = document.getElementById("mass")

input.style.padding = "8px 12px"
input.style.width = "15%"


// 


const selectDiv = document.getElementsByTagName("select")[0]

selectDiv.style.padding = "8px 12px"
selectDiv.style.width = "12%"


// 


const main = document.getElementsByTagName("main")[0]

main.style.margin = "50px 100px"
main.style.textAlign = "center"


// 


const alert = document.createElement("h2")
alert.textContent = "Please enter the required arguments."
alert.style.color = "white"
alert.style.display = "inline-block"
alert.style.backgroundColor = "#8080805c"
alert.style.padding = "10px"
document.getElementsByTagName("main")[0].appendChild(alert)


// 


const flexContainer = document.getElementsByClassName("flex-container")[0]

flexContainer.style.display = "none"
flexContainer.style.justifyContent = "center"
flexContainer.style.backgroundColor = "#99999966"


// 


const planetImg = document.getElementsByClassName("image")[0]

planetImg.style.padding = "70px"


// 


const planetInfo = document.getElementsByClassName("description")[0]

planetInfo.style.padding = "70px"
planetInfo.style.color = "white"
planetInfo.style.display = "flex"
planetInfo.style.flexDirection = "column"
planetInfo.style.alignItems = "center"
planetInfo.style.justifyContent = "center"


// 


const infotext = document.createElement("h2")

document.getElementsByClassName("description")[0].appendChild(infotext)


// 


const infoN = document.createElement("span")
infoN.style.padding = "40px"
infoN.style.border = "1px solid transparent"
infoN.style.borderRadius = "50%"
infoN.style.backgroundColor = "#a8a8a85c"
infoN.style.fontSize = "20px"
infoN.style.minWidth = "60px"
infoN.style.minHeight = "60px"
infoN.style.display = "flex"
infoN.style.justifyContent = "center"
infoN.style.alignItems = "center"

document.getElementsByClassName("description")[0].appendChild(infoN)


// 


const button = document.getElementsByTagName("button")[0]

button.style.padding = "8px 12px"
button.style.width = "12%"
button.style.backgroundColor = "#9e9d9dbf"
button.style.color = "white"


// functions 


// names of planets


let planets = [
    {
        name: "Earth",
        weight: 9.80,
        image: 'images/earth.png'
    },
    {
        name: "Jupiter",
        weight: 24.79,
        image: 'images/jupiter.png'
    },
    {
        name: "Mars",
        weight: 3.72,
        image: 'images/mars.png'
    },
    {
        name: "Mercury",
        weight: 3.70,
        image: 'images/mercury.png'
    },
    {
        name: "Moon",
        weight: 1.62,
        image: 'images/moon.png'
    },
    {
        name: "Neptune",
        weight: 11.15,
        image: 'images/neptune.png'
    },
    {
        name: "Pluto",
        weight: 0.62,
        image: 'images/pluto.png'
    },
    {
        name: "Saturn",
        weight: 10.44,
        image: 'images/saturn.png'
    },
    {
        name: "Uranus",
        weight: 8.87,
        image: 'images/uranus.png'
    },
    {
        name: "Venus",
        weight: 8.87,
        image: 'images/venus.png'
    },
]

let options = []

for (let i = 0; i < planets.length; i++) {
    options = document.createElement("option")
    options.textContent = planets[i].name
    options.value = planets[i].name
    document.getElementsByTagName("select")[0].appendChild(options)
}


// calculation process


const mass = document.querySelector("#mass")
const option = document.querySelector("select")
var cal = 0

button.addEventListener("click", () => {

    for (property of planets) {
        if (option.value === property.name) {

            cal = property.weight * mass.value
            infotext.textContent = `The weight of the object on ${option.value}`
            document.getElementsByClassName("planet-image")[0].src = property.image
            flexContainer.style.display = "flex"
            alert.style.display = "none"


        }
    }
    infoN.textContent = `${cal.toFixed(2)}N`



})

