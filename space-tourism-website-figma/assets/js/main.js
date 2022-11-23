const closed = document.getElementsByClassName("navbar__inner--closed")[0]
const mobilMenu = document.getElementsByClassName("navbar__inner")[0]
const openMenu = document.getElementsByClassName("navbar__mobilMenu")[0]
closed.addEventListener("click",() =>{
    mobilMenu.style.display = "none"
})

openMenu.addEventListener("click",() => {
    mobilMenu.style.display = "block"
})


