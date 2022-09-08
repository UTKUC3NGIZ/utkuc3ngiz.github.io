const clone = structuredClone(countries_data);

//  kısaltmalar
const languagesDiv = document.getElementById("tenMostPanelLanguages")
const populationDiv = document.getElementById("tenMostPanelPopulation")
const buttonSpan = document.getElementById("buttons_title")

// en çok konuşulan 10 ülke
let text_arr = []
for (const property of clone) {
    text_arr = text_arr.concat(property.languages)
}


const cleaning = new Set(text_arr)

const counts = []
const count = {}

for (const l of cleaning) {
    const filteredLang = text_arr.filter((lng) => lng === l)
    counts.push({ lang: l, count: filteredLang.length })
}

counts.sort(function (a, b) {
    return b.count - a.count
})


// tasarım


for (let i = 0; i < 10; i++) {
    let topTenLang = document.createElement("div")
    topTenLang.id = `top_ten_lang${i}`
    languagesDiv.appendChild(topTenLang)


    let topTenLangTitle = document.createElement("h3")
    topTenLangTitle.textContent = counts[i].lang
    document.getElementById(`top_ten_lang${i}`).appendChild(topTenLangTitle)



    let topTenLangbar = document.createElement("div")
    topTenLangbar.id = `top_ten_bar_lang${i}`
    document.getElementById(`top_ten_lang${i}`).appendChild(topTenLangbar)

    let topTenLangbarİnner = document.createElement("div")
    topTenLangbarİnner.id = `top_ten_bar_inner_lang${i}`
    topTenLangbarİnner.style.width = `${counts[i].count}%`

    document.getElementById(`top_ten_bar_lang${i}`).appendChild(topTenLangbarİnner)



    let topTenLangNumber = document.createElement("h3")
    topTenLangNumber.textContent = counts[i].count
    document.getElementById(`top_ten_lang${i}`).appendChild(topTenLangNumber)

}





// // en çok nüfusa sahip 10 ülke



function population_function() {
    for (const property of clone) {

        clone.sort(function (a, b) {
            return b.population - a.population
        })
    }

    const world = {
        "name": "World",
        "population": toplam
    }


    // tasarım

    let topTenPopulation = document.createElement("div")
    topTenPopulation.id = `top_ten_population_world`
    populationDiv.appendChild(topTenPopulation)


    let topTenPopulationTitle = document.createElement("h3")
    topTenPopulationTitle.textContent = world.name
    document.getElementById(`top_ten_population_world`).appendChild(topTenPopulationTitle)



    let topTenPopulationbar = document.createElement("div")
    topTenPopulationbar.id = `top_ten_bar_world`
    document.getElementById(`top_ten_population_world`).appendChild(topTenPopulationbar)

    let topTenPopulationbarİnner = document.createElement("div")
    topTenPopulationbarİnner.id = `top_ten_bar_inner_world`
    topTenPopulationbarİnner.style.width = `${(world.population / toplam) * 100}%`

    document.getElementById(`top_ten_bar_world`).appendChild(topTenPopulationbarİnner)



    let topTenPopulationNumber = document.createElement("h3")
    topTenPopulationNumber.textContent = world.population
    document.getElementById(`top_ten_population_world`).appendChild(topTenPopulationNumber)







    for (let i = 0; i < 9; i++) {
        let topTenPopulation = document.createElement("div")
        topTenPopulation.id = `top_ten_population${i}`

        let denek = `
                <h3>${clone[i].name}</h3>
                <div id="top_ten_bar_pop${i}">
                    <div id="top_ten_bar_inner_pop${i}" style="width:${(clone[i].population / toplam) * 100}%;"></div>
                </div>
                <h3>${clone[i].population}</h3>
            `
        topTenPopulation.innerHTML = denek
        populationDiv.appendChild(topTenPopulation)

    }
}

population_function()

// butonlar ve değişen yazılar


populationDiv.style.display = "none"
buttonSpan.textContent = "10 Most Spoken Languages In The World"

const population = () => {
    languagesDiv.style.display = "none"
    populationDiv.style.display = "block"
    buttonSpan.textContent = "10 Most Populated Contries In The World"


}

const languages = () => {
    languagesDiv.style.display = "block"
    populationDiv.style.display = "none"
    buttonSpan.textContent = "10 Most Spoken Languages In The World"
}






