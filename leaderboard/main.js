
// form button
const formButton = document.getElementById("form_button")

// form
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const country = document.getElementById("country")
const score = document.getElementById("score")
// data
allData = document.getElementById("all_data")


let i = 0
formButton.addEventListener("click", () => {
    i++

    if (fname.value !== "" && lname.value !== "" && country.value !== "" && score.value !== "") {
        // new Data
        newData = document.createElement("div")
        allData.appendChild(newData)
        newData.id = `data${i}`
        document.getElementById(`data${i}`).className = "data"



        // Date
        const d = new Date();
        let date = d.toDateString();
        let hour = d.toLocaleTimeString();

        // data Div
        let info = `
<div>
    <h3 id="">${fname.value} ${lname.value}</h3>
    <span>${date} ${hour}</span>
</div>

<div>
    <h3>${country.value}</h3>
</div>

<div>
    <h3 id="data_score${i}">${score.value}</h3>
</div>

<div>
    <button class="data_button" id="data_delete${i}">
        <span class="material-symbols-outlined">delete</span>
    </button>
    <button class="data_button" id="data_score_add${i}">+5</button>
    <button class="data_button" id="data_score_extraction${i}">-5</button>
</div>
`
        document.getElementById(`data${i}`).innerHTML = info
       
        // Form check
        document.getElementById("error").style.display = "none"

        // Form cleaning
        fname.value = ""
        lname.value = ""
        country.value = ""
        score.value = ""
    } else {
        // Form Error
        document.getElementById("error").style.display = "block"
    }



})


// delete, increase, decrease functions

document.addEventListener('click', (e) => {
    let elementId = e.target.id;

    const pattern = /\d+/g
    const matches = elementId.match(pattern)

    const dataScore = document.getElementById(`data_score${matches}`)

    // delete
    if (elementId == `data_delete${matches}`) {
        document.getElementById(`data_delete${matches}`).parentElement.parentElement.remove()
    }
    // increase
    if (elementId == `data_score_add${matches}`) {
        let numberScore = Number(dataScore.textContent)
        dataScore.textContent = numberScore + 5
    }
    // decrease
    if (elementId == `data_score_extraction${matches}`) {
        let numberScore = Number(dataScore.textContent)
        dataScore.textContent = numberScore - 5
    }

});


// 



