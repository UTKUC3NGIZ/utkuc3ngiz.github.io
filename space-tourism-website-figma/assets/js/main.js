// mobil menu

let mobilMenu = document.getElementById("mobil-menu");
let mobilMenuContent = document.getElementById("mobil-menu-content");
let closeButton = document.getElementById("close-button");

mobilMenu.addEventListener("click", () => {
  event.preventDefault();
  mobilMenuContent.style.display = "block";
});

closeButton.addEventListener("click", () => {
  event.preventDefault();
  mobilMenuContent.style.display = "none";
});

