let val

// Desktop
const fname = document.getElementById("fname")
const fnameCart = document.getElementById("fnameCart")
const fnameError = document.getElementById("fnameError")
// 
const number = document.getElementById("number")
const numberCart = document.getElementById("numberCart")
const numberError = document.getElementById("numberError")
// 
const MM = document.getElementById("MM")
const MMError = document.getElementById("MMError")
const YY = document.getElementById("YY")
const YYError = document.getElementById("YYError")

const dateCartMM = document.getElementById("dateCartMM")
const dateCartYY = document.getElementById("dateCartYY")
// 
const CVC = document.getElementById("CVC")
const CVCCart = document.getElementById("CVCCart")
const CVCError = document.getElementById("CVCError")
// 
const button = document.getElementById("button")
const form = document.getElementById("desktopform")
const desktopCompleted = document.getElementById("desktopCompleted")


// 

// Mobil
const mobilfname = document.getElementById("mobilfname")
const mobilfnameCart = document.getElementById("mobilfnameCart")
const mobilfnameError = document.getElementById("mobilfnameError")
// 
const mobilnumber = document.getElementById("mobilnumber")
const mobilnumberCart = document.getElementById("mobilnumberCart")
const mobilnumberError = document.getElementById("mobilnumberError")
// 
const mobilMM = document.getElementById("mobilMM")
const mobilMMError = document.getElementById("mobilMMError")
const mobilYY = document.getElementById("mobilYY")
const mobilYYError = document.getElementById("mobilYYError")

const mobildateCartMM = document.getElementById("mobildateCartMM")
const mobildateCartYY = document.getElementById("mobildateCartYY")
// 
const mobilCVC = document.getElementById("mobilCVC")
const mobilCVCCart = document.getElementById("mobilCVCCart")
const mobilCVCError = document.getElementById("mobilCVCError")
// 
const mobilbutton = document.getElementById("mobilbutton")
const mobilform = document.getElementById("mobilform")
const mobilCompleted = document.getElementById("mobilCompleted")

// 

function non_number(name, error, border_error) {
    var typo = val.search(/^[A-Za-z\s]+$/gi)
    if (typo === -1) {
        error.innerHTML = "Wrong format, letters only"
        border_error.classList.add("error_border")
        button.style.backgroundColor = "hsl(279, 6%, 55%)"
        mobilbutton.style.backgroundColor = "hsl(279, 6%, 55%)"
    } else {
        name.innerHTML = val
        error.innerHTML = ""
        border_error.classList.remove("error_border")
        button.style.backgroundColor = "#220930"
        mobilbutton.style.backgroundColor = "#220930"
    }
    if (val === "") {
        name.innerHTML = ""
        error.innerHTML = "Can't be blank"
        border_error.classList.add("error_border")
    }

}
function non_letter(number, error, border_error) {
    var typo = val.search(/^[0-9\s]+$/gi)
    if (typo === -1) {
        error.innerHTML = "Wrong format, numbers only"
        border_error.classList.add("error_border")
        button.style.backgroundColor = "hsl(279, 6%, 55%)"
        mobilbutton.style.backgroundColor = "hsl(279, 6%, 55%)"
    } else {
        number.innerHTML = val
        error.innerHTML = ""
        border_error.classList.remove("error_border")
        button.style.backgroundColor = "#220930"
        mobilbutton.style.backgroundColor = "#220930"
    }
    if (val === "") {
        number.innerHTML = ""
        error.innerHTML = "Can't be blank"
        border_error.classList.add("error_border")
    }

}

// Desktop

fname.addEventListener("input", () => {

    val = fname.value
    val = val.toUpperCase()
    non_number(fnameCart, fnameError, fname)

})

number.addEventListener("input", () => {

    val = number.value
    val = val.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    console.log(val)
    non_letter(numberCart, numberError, number)
    if (val.length < 1) {
        numberError.innerHTML = "Can't be blank"
    } else if (val.length <= 18) {
        numberError.innerHTML = "must be at least 12 digits"
        number.classList.add("error_border")
        button.style.backgroundColor = "hsl(279, 6%, 55%)"
    }

})

MM.addEventListener("input", () => {

    val = MM.value
    non_letter(dateCartMM, MMError, MM)
    if (val.length < 1) {
        MMError.innerHTML = "Can't be blank"
    } else if (val.length <= 1) {
        MMError.innerHTML = "must be at least 2 digits"
        MM.classList.add("error_border")
        button.style.backgroundColor = "hsl(279, 6%, 55%)"
    }

})

YY.addEventListener("input", () => {

    val = YY.value
    non_letter(dateCartYY, YYError, YY)
    if (val.length < 1) {
        YYError.innerHTML = "Can't be blank"
    } else if (val.length <= 1) {
        YYError.innerHTML = "must be at least 2 digits"
        YY.classList.add("error_border")
        button.style.backgroundColor = "hsl(279, 6%, 55%)"
    }
})

CVC.addEventListener("input", () => {

    val = CVC.value
    non_letter(CVCCart, CVCError, CVC)
    if (val.length < 1) {
        CVCError.innerHTML = "Can't be blank"
    } else if (val.length <= 2) {
        CVCError.innerHTML = "must be at least 3 digits"
        CVC.classList.add("error_border")
        button.style.backgroundColor = "hsl(279, 6%, 55%)"
    }
})

button.addEventListener("click", () => {
    if (fname.value === "" || number.value === "" || MM.value === "" || YY.value === "" || CVC.value === "" || number.value.length !== 12 || MM.value.length !== 2 || YY.value.length !== 2 || CVC.value.length !== 3) {
        button.style.backgroundColor = "hsl(279, 6%, 55%)"
    } else {
        button.style.backgroundColor = "#220930"
        form.style.display = "none"
        desktopCompleted.style.display = "flex"

    }

})


// Mobil

mobilfname.addEventListener("input", () => {

    val = mobilfname.value
    val = val.toUpperCase()
    non_number(mobilfnameCart, mobilfnameError, mobilfname)
})

mobilnumber.addEventListener("input", () => {

    val = mobilnumber.value
    val = val.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    non_letter(mobilnumberCart, mobilnumberError, mobilnumber)
    if (val.length < 1) {
        mobilnumberError.innerHTML = "Can't be blank"
    } else if (val.length <= 18) {
        mobilnumberError.innerHTML = "must be at least 12 digits"
        mobilnumber.classList.add("error_border")
        mobilbutton.style.backgroundColor = "hsl(279, 6%, 55%)"
    }

})

mobilMM.addEventListener("input", () => {

    val = mobilMM.value
    non_letter(mobildateCartMM, mobilMMError, mobilMM)
    if (val.length < 1) {
        mobilMMError.innerHTML = "Can't be blank"
    } else if (val.length <= 1) {
        mobilMMError.innerHTML = "must be at least 2 digits"
        mobilMM.classList.add("error_border")
        mobilbutton.style.backgroundColor = "hsl(279, 6%, 55%)"
    }

})

mobilYY.addEventListener("input", () => {

    val = mobilYY.value
    non_letter(mobildateCartYY, mobilYYError, mobilYY)
    if (val.length < 1) {
        mobilYYError.innerHTML = "Can't be blank"
    } else if (val.length <= 1) {
        mobilYYError.innerHTML = "must be at least 2 digits"
        mobilYY.classList.add("error_border")
        mobilbutton.style.backgroundColor = "hsl(279, 6%, 55%)"
    }
})

mobilCVC.addEventListener("input", () => {

    val = mobilCVC.value
    non_letter(mobilCVCCart, mobilCVCError, mobilCVC)
    if (val.length < 1) {
        mobilCVCError.innerHTML = "Can't be blank"
    } else if (val.length <= 2) {
        mobilCVCError.innerHTML = "must be at least 3 digits"
        mobilCVC.classList.add("error_border")
        mobilbutton.style.backgroundColor = "hsl(279, 6%, 55%)"
    }
})

mobilbutton.addEventListener("click", () => {
    if (mobilfname.value === "" || mobilnumber.value === "" || mobilMM.value === "" || mobilYY.value === "" || mobilCVC.value === "") {
        mobilbutton.style.backgroundColor = "hsl(279, 6%, 55%)"
        mobilbutton.innerHTML = ""

    } else {
        mobilbutton.style.backgroundColor = "#220930"
        mobilform.style.display = "none"
        mobilCompleted.style.display = "flex"
    }

})

