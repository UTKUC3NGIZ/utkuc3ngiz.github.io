const closed = document.getElementsByClassName("navbar__inner--closed")[0];
const mobilMenu = document.getElementsByClassName("navbar__inner")[0];
const openMenu = document.getElementsByClassName("navbar__mobilMenu")[0];
closed.addEventListener("click", () => {
  mobilMenu.style.display = "none";
});

openMenu.addEventListener("click", () => {
  mobilMenu.style.display = "block";
});

//

const crew = document.getElementById("crew");
const destination = document.getElementById("destination");
const technology = document.getElementById("technology");

// fetch("assets/js/data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data.crew));

// page name
var path = window.location.pathname;
var page = path.split("/").pop();
pageName = page.replace(/.html/g, "");

// page name comparison
if ((pageName = destination)) {
  addId(destination);
} else if ((pageName = crew)) {
  addId(crew);
} else if ((pageName = technology)) {
  addId(technology);
}

function addId(pageName) {
  for (let i = 0; i < pageName.children.length; i++) {
    pageName.children[i].id = `${i}`;
  }
  pageName.addEventListener("click", (e) => {
    event.preventDefault();
    if (
      e.target.id !== "destination" &&
      e.target.id !== "crew" &&
      e.target.id !== "technology"
    ) {
      console.log(e.target.parentElement.id);
    } else {
      console.log(e.target.id);
    }
  });
}
