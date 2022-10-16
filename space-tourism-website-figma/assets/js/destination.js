let planets = [
  {
    name: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    img: "../img/destination/moon.png",
  },
  {
    name: "MARS",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    travelTime: "9 months",
    img: "../img/destination/mars.png",
  },
  {
    name: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    travelTime: "3 years",
    img: "../img/destination/europa.png",
  },
  {
    name: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    travelTime: "7 years",
    img: "../img/destination/titan.png",
  },
];

let destination_section = document.getElementById("destination_section");
let moon = document.getElementById("moon");
let mars = document.getElementById("mars");
let europa = document.getElementById("europa");
let titan = document.getElementById("titan");

// planet change button

let planet_buttons = document.getElementById("planet_buttons");
let planet_button = planet_buttons.getElementsByClassName("planet_button");

for (let i = 0; i < planet_button.length; i++) {
  planet_button[i].addEventListener("click", function () {
    var active = planet_buttons.getElementsByClassName("active-index");
    active[0].classList.remove("active-index");
    this.className += " active-index";
  });
}

// planet change definition

let planet_img = document.getElementById("planet_img");
let planet_name = document.getElementById("planet_name");
let planet_info = document.getElementById("planet_info");
let planet_distance = document.getElementById("planet_distance");
let planet_time = document.getElementById("planet_time");

function planetChange(number) {
  planet_img.src = planets[number].img;
  planet_name.innerHTML = planets[number].name;
  planet_info.innerHTML = planets[number].text;
  planet_distance.innerHTML = planets[number].distance;
  planet_time.innerHTML = planets[number].travelTime;
}

moon.addEventListener("click", () => {
  event.preventDefault();
  planetChange(0);
});

mars.addEventListener("click", () => {
  event.preventDefault();
  planetChange(1);
});
europa.addEventListener("click", () => {
  event.preventDefault();
  planetChange(2);
});
titan.addEventListener("click", () => {
  event.preventDefault();
  planetChange(3);
});
