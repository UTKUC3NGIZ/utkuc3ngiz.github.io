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

let destination_section = document.getElementById("destination_section")
let moon = document.getElementById("moon");
let mars = document.getElementById("mars");
let europa = document.getElementById("europa");
let titan = document.getElementById("titan");



function planetİnner(number) {
    let inner = `
        <div class="destination_section_inner">
        <div>
          <img src="${planets[number].img}" alt="" />
        </div>
        <div>
          <div>
            <a href="" id="moon">Moon</a>
            <a href="" id="mars">Mars</a>
            <a href="" id="europa">EUROPA</a>
            <a href="" id="titan">TITAN</a>
          </div>
          <h3>${planets[number].name}</h3>
          <p>
          ${planets[number].text}
          </p>
          <div>
            <div>
              <span>AVG. DISTANCE</span>
              <span>${planets[number].distance}</span>
            </div>
            <div>
              <span>EST. TRAVEL TIME</span>
              <span>${planets[number].travelTime}</span>
            </div>
          </div>
        </div>
        </div>
        `;
        destination_section.innerHTML = inner

  }


  moon.addEventListener("click", () => {
    event.preventDefault();
    planetİnner(0)
  
  });
  mars.addEventListener("click", () => {
    event.preventDefault();
    planetİnner(1)
    console.log("planets")
  
  });
  europa.addEventListener("click", () => {
    event.preventDefault();
    planetİnner(2)
  
  });
  titan.addEventListener("click", () => {
    event.preventDefault();
    planetİnner(3)
  
  });