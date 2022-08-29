const teachings = [
    {
        language:"HTML",
        bgcolor:"#dd4b25"
    },
    {
        language:"CSS",
        bgcolor:"#254BDD"
    },
    {
        language:"JAVASCRIPT",
        bgcolor:"#EFD81D"
    },
    {
        language:"BOOTSTRAP",
        bgcolor:"#7e0ff3"
    },
    {
        language:"SASS",
        bgcolor:"#C66394"
    }
]

const works = [
    {
        work:"Programmer",
        textContent:"terminal"
    },
    {
        work:"Designer",
        textContent:"architecture"
    },   
     {
        work:"Student",
        textContent:"school"
    }
]



const teachingsText = document.getElementById("teachings_text")
teachingsText.textContent = teachings[0].language
teachingsText.style.color = teachings[0].bgcolor

var i = 1;

    function time() {
        setTimeout(function () {

            teachingsText.textContent = teachings[i].language
            teachingsText.style.color = teachings[i].bgcolor
            i++

            if (i < teachings.length) {
                time()
                

            }else {
                i = 0
                time()
            }
            console.log(i)

        }, 2000)
    }

time()




const worksText = document.getElementById("worksText")
const worksIcons = document.getElementById("worksIcons")

worksText.textContent =  works[0].work
worksIcons.innerHTML = works[0].textContent

var a = 1;

    function deneme() {
        setTimeout(function () {

             worksText.textContent =  works[a].work
             worksIcons.innerHTML =  works[a].textContent
            a++

            if (a <  works.length) {
                deneme()


            }else {
                a = 0
                deneme()
            }
            console.log(a)

        }, 4000)
    }

deneme()