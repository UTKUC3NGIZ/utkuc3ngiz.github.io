// functions

const startingWord = document.getElementById("starting_word")
const searchWithAnyWord = document.getElementById("search_with_any_word")
const arrangement = document.getElementById("arrangement")
const search = document.querySelector("input")
const numberOfResults = document.getElementById("number_of_results")
document.getElementById("number_of_results").style.color = "#000"
// number of country

document.getElementById("number_of_country").textContent = countries.length


// function by which countries are transferred

for (const property in countries) {
    let countriesDiv = document.createElement("div")
    countriesDiv.className = "countries_div"
    countriesDiv.id = `countries_div${property}`


    let countriesTitle = document.createElement("h1")
    countriesTitle.className = "countries_title"
    countriesTitle.textContent = countries[property]

    document.getElementById("countries_section").appendChild(countriesDiv)
    document.getElementById(`countries_div${property}`).appendChild(countriesTitle)

}


// startingWord function

const startingWordButton = () => {
    document.getElementById("starting_word").style.backgroundColor = "#581cb8"
    document.getElementById("search_with_any_word").style.backgroundColor = "#895be6"


    let inputSearch
    search.addEventListener("input", e => {

        inputSearch = search.value

        const startingWord = new RegExp("^" + inputSearch, "gi");
        let numberOfIndex = 0
        for (const property in countries) {

            // STARTING WORD

            const startingWordMatches = countries[property].search(startingWord)


            if (startingWordMatches === 0) {
                numberOfIndex++
                document.getElementById(`countries_div${property}`).style.display = "flex"
            } else {
                document.getElementById(`countries_div${property}`).style.display = "none"
            }

        }
        document.getElementById("number_of_results").textContent = numberOfIndex

    })

}



// searchWord function

const searchWordButton = () => {
    document.getElementById("search_with_any_word").style.backgroundColor = "#581cb8"
    document.getElementById("starting_word").style.backgroundColor = "#895be6"

    let inputSearch
    search.addEventListener("input", e => {

        inputSearch = search.value

        const searchWord = new RegExp(inputSearch, "gi")
        let numberOfIndex = 0
        for (const property in countries) {

            // SEARCH WORD

            const searchWordMatches = countries[property].search(searchWord)

            if (searchWordMatches === 0) {
                numberOfIndex++
                document.getElementById(`countries_div${property}`).style.display = "flex"

            } else if (searchWordMatches === -1) {
                document.getElementById(`countries_div${property}`).style.display = "none"
            } else {
                document.getElementById(`countries_div${property}`).style.display = "flex"
            }
        }
        document.getElementById("number_of_results").textContent = numberOfIndex

    })
}

//  function to run on page load
let inputSearch
search.addEventListener("input", e => {

    inputSearch = search.value

    const searchWord = new RegExp(inputSearch, "gi")
    let numberOfIndex = 0
    for (const property in countries) {

        // SEARCH WORD
        const searchWordMatches = countries[property].search(searchWord)

        if (searchWordMatches === 0) {
            numberOfIndex++
            document.getElementById(`countries_div${property}`).style.display = "flex"

        } else if (searchWordMatches === -1) {
            document.getElementById(`countries_div${property}`).style.display = "none"
        } else {
            document.getElementById(`countries_div${property}`).style.display = "flex"
        }

    }
    document.getElementById("number_of_results").textContent = numberOfIndex

})



// sort button function

const arrangementSort = () => {

    let countrySort = []

    for (const property in countries) {

        countrySort.push(countries[property])

    }

    if (document.getElementsByClassName("countries_title")[0].innerHTML[0] == "A") {
        countrySort.reverse()

    } else {
        countrySort.sort()
    }

    for (const property in countrySort) {
        document.getElementsByClassName("countries_title")[property].textContent = countrySort[property]

    }
}




const enteredLetter = document.getElementById("entered_letter")

search.addEventListener("input", e => {

    inputSearch = search.value

    enteredLetter.textContent = inputSearch
    enteredLetter.style.color = "#000"

})



