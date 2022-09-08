for (const property in countries_data) {
    countries_data[property].ID = property
}
document.getElementById("number_of_countries").innerHTML = `${countries_data.length}`


const countries_div = document.getElementById("countries_data_div")


// converting the undefined
for (const property in countries_data) {
    if (countries_data[property].capital === undefined) {
        const checkUndefinef = countries_data[property]
        Object.assign(checkUndefinef, { capital: "undefined" }
        )
    }
}



function arrangement(standings) {
    for (const property of standings) {
        // divin oluşumu
        countrie_div = document.createElement("div")
        countrie_div.id = `countrie_div_${property.ID}`
        document.getElementById("countries_data_div").appendChild(countrie_div)
        let countrie_inner = `
        <div class="countrie_top">
             <img src="${property.flag}" alt="">
             <h2>${property.name}</h2>
        </div>
        <div class="countrie_bottom">
             <span>Capital:${property.capital}</span>
             <span>Languages:${property.languages}</span>
             <span>Population: <span class="data_number" id="countriesPopulation${property.ID}">${property.population}</span> <span id="countriesPopulationNumber${property.ID}">${property.population}</span> </span>

        </div>
        `
        document.getElementById(`countrie_div_${property.ID}`).innerHTML = countrie_inner



    }
    // comma separation
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    let separation = []
    for (const property in countries_data) {
        separation.push(numberWithCommas(document.getElementById(`countriesPopulation${property}`).innerHTML))
        document.getElementById(`countriesPopulationNumber${property}`).innerHTML = separation[property]
    }
}
arrangement(countries_data)



let check = true

// name sort 
const nameSort = structuredClone(countries_data)
const nameSortReverse = structuredClone(countries_data)
const name_sort = () => {
    document.getElementById("countries_data_div").innerHTML = ""
    nameSort.sort((a, b) => {
        const nameA = a.name
        const nameB = b.name
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    })
    nameSortReverse.sort((b, a) => {
        const nameA = a.name
        const nameB = b.name
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    })

    if (check === true) {
        arrangement(nameSort)
        check = false
    } else {
        arrangement(nameSortReverse)
        check = true
    }
}


// Capital sort 
const capitalSort = structuredClone(countries_data)
const capitalSortReverse = structuredClone(countries_data)

const capital_sort = () => {
    document.getElementById("countries_data_div").innerHTML = ""
    capitalSort.sort((a, b) => {
        const capitalA = a.capital
        const capitalB = b.capital
        if (capitalA < capitalB) {
            return -1;
        }
        if (capitalA > capitalB) {
            return 1;
        }
    })
    capitalSortReverse.sort((b, a) => {
        const capitalA = a.capital
        const capitalB = b.capital
        if (capitalA < capitalB) {
            return -1;
        }
        if (capitalA > capitalB) {
            return 1;
        }
    })

    if (check === true) {
        arrangement(capitalSort)
        check = false
    } else {
        arrangement(capitalSortReverse)
        check = true
    }
}

// population sort 
const populationSort = structuredClone(countries_data)
const populationSortReverse = structuredClone(countries_data)

const population_sort = () => {
    document.getElementById("countries_data_div").innerHTML = ""
    populationSort.sort((a, b) => {
        const populationA = a.population
        const populationB = b.population
        if (populationA < populationB) {
            return -1;
        }
        if (populationA > populationB) {
            return 1;
        }
    })
    populationSortReverse.sort((b, a) => {
        const populationA = a.population
        const populationB = b.population
        if (populationA < populationB) {
            return -1;
        }
        if (populationA > populationB) {
            return 1;
        }
    })

    if (check === true) {
        arrangement(populationSort)
        check = false
    } else {
        arrangement(populationSortReverse)
        check = true
    }
}

// arama bölümü 

const search = document.querySelector("input")
let inputSearch
let outputID = []
let outputIDGlobal = []
let tabloSort = []
let son = []
let sortCheck = true

search.addEventListener("input", () => {
    inputSearch = search.value
    let numberOfResults = 0
    outputID = []
    const searchWord = new RegExp(inputSearch, "gi")
    for (const property in countries_data) {
        const searchWordMatchesName = countries_data[property].name.search(searchWord)
        const searchWordMatchesCapital = countries_data[property].capital.search(searchWord)
        const searchWordMatchesLanguages = countries_data[property].languages.join().search(searchWord)


        if (searchWordMatchesName === 0 || searchWordMatchesCapital === 0 || searchWordMatchesLanguages === 0) {
            document.getElementById(`countrie_div_${property}`).style.display = "block"

        } else if (searchWordMatchesName === -1 && searchWordMatchesCapital === -1 && searchWordMatchesLanguages === -1) {
            document.getElementById(`countrie_div_${property}`).style.display = "none"
        }
        if (document.getElementById(`countrie_div_${property}`).style.display !== "none") {
            numberOfResults++
            outputID.push(document.getElementById(`countrie_div_${property}`).id)

        }
    }
    outputIDGlobal.push(outputID)
    document.getElementById("number_of_outputs").style.display = "block"
    document.getElementById("number_of_outputs").innerHTML = numberOfResults + " countries satisified the search criteria"

    if (inputSearch === "") {
        document.getElementById("tenMostPanelPopulation").innerHTML = ""
        population_function()
        buttonSpan.textContent = "10 Most Spoken Languages In The World"
        sortCheck = true

    } else {
        sortCheck = false

        tabloSort = []
        buttonSpan.textContent = "World Population"
        for (let i = 0; i < outputIDGlobal[outputIDGlobal.length - 1].length; i++) {

            document.getElementById(outputIDGlobal[outputIDGlobal.length - 1][i]).style.display = "block"
            const txt = document.getElementById(outputIDGlobal[outputIDGlobal.length - 1][i]).id


            const pattern = /[^A-Za-z,._ ]+/g
            const matches = txt.match(pattern)
            tabloSort.push(matches)
            document.getElementById("tenMostPanelPopulation").innerHTML = ""

        }

        for (let a = 0; a < tabloSort.length; a++) {
            let topTenPopulation = document.createElement("div")
            topTenPopulation.id = `top_ten_population${a}`
            let denek = `
                    <h3>${countries_data[tabloSort[a]].name}</h3>
                    <div id="top_ten_bar_pop${a}">
                    <div id="top_ten_bar_inner_pop${a}" style="width:${(countries_data[tabloSort[a]].population / toplam) * 100}%;"></div>
                    </div>
                    <h3>${countries_data[tabloSort[a]].population}</h3>
                        `

            topTenPopulation.innerHTML = denek
            populationDiv.appendChild(topTenPopulation)
        }

    }
})

let toplam = 0
for (const property of countries_data) {

    toplam += property.population
}

// aramadan sonra sıralama
const sortAfterSearch = document.getElementById("buttons")
sortAfterSearch.addEventListener("click", () => {

    if (sortCheck === false) {
        for (const property in countries_data) {
            document.getElementById(`countrie_div_${property}`).style.display = "none"
        }

        for (let i = 0; i < outputIDGlobal[outputIDGlobal.length - 1].length; i++) {

            document.getElementById(outputIDGlobal[outputIDGlobal.length - 1][i]).style.display = "block"
            const txt = document.getElementById(outputIDGlobal[outputIDGlobal.length - 1][i]).id


            const pattern = /[^A-Za-z,._ ]+/g
            const matches = txt.match(pattern)
            tabloSort.push(matches)

        }
    }
})


let mybutton = document.getElementById("scroll_up");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}


