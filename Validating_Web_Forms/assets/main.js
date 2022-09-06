// input definitions
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const phone = document.getElementById("phone")
const bio = document.getElementById("bio")

// input error definitions 
const fnameError = document.getElementById("fnameError")
const lnameError = document.getElementById("lnameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const phoneError = document.getElementById("phoneError")
const bioError = document.getElementById("bioError")




alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


// functions

// fname
function successfname() {
    fnameError.style.display = "none"
    fname.classList.add("successful");
    fname.classList.remove("unsuccessful");
    document.getElementById("button").classList.remove("grey_button")
}
function unsuccessfname() {
    fnameError.style.display = "block"
    fname.classList.add("unsuccessful");
    fname.classList.remove("successful");
    document.getElementById("button").classList.add("grey_button")
}

// lname
function successlname() {
    lnameError.style.display = "none"
    lname.classList.add("successful");
    lname.classList.remove("unsuccessful");
    document.getElementById("button").classList.remove("grey_button")
}
function unsuccesslname() {
    lnameError.style.display = "block"
    lname.classList.add("unsuccessful");
    lname.classList.remove("successful");
    document.getElementById("button").classList.add("grey_button")
}

// email
function successemail() {
    emailError.style.display = "none"
    email.classList.add("successful");
    email.classList.remove("unsuccessful");
    document.getElementById("button").classList.remove("grey_button")
}
function unsuccessemail() {
    emailError.style.display = "block"
    email.classList.add("unsuccessful");
    email.classList.remove("successful");
    document.getElementById("button").classList.add("grey_button")
}
// password
function successpassword() {
    passwordError.style.display = "none"
    password.classList.add("successful");
    password.classList.remove("unsuccessful");
    document.getElementById("button").classList.remove("grey_button")
}
function unsuccesspassword() {
    passwordError.style.display = "block"
    password.classList.add("unsuccessful");
    password.classList.remove("successful");
    document.getElementById("button").classList.add("grey_button")
}

// phone
function successphone() {
    phoneError.style.display = "none"
    phone.classList.add("successful");
    phone.classList.remove("unsuccessful");
    document.getElementById("button").classList.remove("grey_button")
}
function unsuccessphone() {
    phoneError.style.display = "block"
    phone.classList.add("unsuccessful");
    phone.classList.remove("successful");
    document.getElementById("button").classList.add("grey_button")
}

// bio
function successbio() {
    bioError.style.display = "none"
    bio.classList.add("successful");
    bio.classList.remove("unsuccessful");
    document.getElementById("button").classList.remove("grey_button")
}
function unsuccessbio() {
    bioError.style.display = "block"
    bio.classList.add("unsuccessful");
    bio.classList.remove("successful");
    document.getElementById("button").classList.add("grey_button")

}


// submit click
const submit = () => {

    fnamevalue = fname.value
    if (3 <= fnamevalue.length && 16 >= fnamevalue.length) {
        successfname()
    } else {
        unsuccessfname()
    }

    // 

    lnamevalue = lname.value
    if (3 <= lnamevalue.length && 16 >= lnamevalue.length) {
        successlname()
    } else {
        unsuccesslname()
    }

    // 

    emailvalue = email.value
    const patternMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const resultMail = emailvalue.search(patternMail)

    if (resultMail === 0) {
        successemail()
    } else {
        unsuccessemail()
    }

    // 

    passwordvalue = password.value
    const patternPassword = /^[a-zA-Z0-9@_-]{6,16}$/;
    const resultPassword = passwordvalue.search(patternPassword)
    if (resultPassword === 0) {
        successpassword()
    } else {
        unsuccesspassword()
    }

    // 

    phonevalue = phone.value
    const patternPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g
    const resultPhone = phonevalue.search(patternPhone)
    if (resultPhone === 0) {
        successphone()
    } else {
        unsuccessphone()
    }

    // 

    biovalue = bio.value
    const patternbio = /^[a-z_-\s]{8,50}$/g;
    const resultbio = biovalue.search(patternbio)
    if (resultbio === 0) {
        successbio()
    } else {
        unsuccessbio()
    }
}


