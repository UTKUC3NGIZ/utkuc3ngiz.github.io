// navbar
const closed = document.getElementsByClassName("navbar__inner--closed")[0];
const mobilMenu = document.getElementsByClassName("navbar__inner")[0];
const openMenu = document.getElementsByClassName("navbar__mobilMenu")[0];
closed.addEventListener("click", () => {
  mobilMenu.style.display = "none";
  document.body.style.overflow = "auto";
});

openMenu.addEventListener("click", () => {
  mobilMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

/////////////////////////////////////////////////////////////////////////////////
// JSON content
const data = {
  destination: [
    {
      id: 0,
      name: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avg: "384,400 km",
      est: "3 DAYS",
      img: "assets/img/destination/moon.png",
    },
    {
      id: 1,
      name: "MARS",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avg: "225 MIL. km",
      est: "9 months",
      img: "assets/img/destination/mars.png",
    },
    {
      id: 2,
      name: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avg: "628 MIL. km",
      est: "3 years",
      img: "assets/img/destination/europa.png",
    },
    {
      id: 3,
      name: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avg: "1.6 BIL. km",
      est: "7 years",
      img: "assets/img/destination/titan.png",
    },
  ],
  crew: [
    {
      id: 0,
      task: "Commander ",
      name: "Douglas Hurley",
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: "assets/img/crew/personel1.png",
    },
    {
      id: 1,
      task: "Mission Specialist ",
      name: "MARK SHUTTLEWORTH",
      text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: "assets/img/crew/personel2.png",
    },
    {
      id: 2,
      task: "PILOT",
      name: "Victor Glover",
      text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      img: "assets/img/crew/personel3.png",
    },
    {
      id: 3,
      task: "Flight Engineer",
      name: "Anousheh Ansari",
      text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      img: "assets/img/crew/personel4.png",
    },
  ],
  technology: [
    {
      id: 0,
      name: "LAUNCH VEHICLE",
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      tabletImg: "assets/img/technology/tablet_1.png",
      img: "assets/img/technology/desktop_1.jpg",
    },
    {
      id: 1,
      name: "SPACEPORT",
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      tabletImg: "assets/img/technology/tablet_2.jpg",
      img: "assets/img/technology/desktop_2.jpg",
    },
    {
      id: 2,
      name: "SPACE CAPSULE",
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      tabletImg: "assets/img/technology/tablet_3.jpg",
      img: "assets/img/technology/desktop_3.jpg",
    },
  ],
};

//////////////////////////////////////////////////////////////////////////////////

// content exchange

const crew = document.getElementById("crew");
const destination = document.getElementById("destination");
const technology = document.getElementById("technology");
const exploreInner = document.getElementsByClassName("explore-inner")[0];
const contentImage = document.getElementById("contentImage");
const contentImageTablet = document.getElementById("contentImageTablet");
const mainPromotion = document.getElementsByClassName("main__promotion")[0];

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

// defining content IDs
function addId(pageName) {
  for (let i = 0; i < pageName.children.length; i++) {
    pageName.children[i].id = `${i}`;
  }
}

// content change function
pageName.addEventListener("click", (e) => {
  event.preventDefault();
  if (pageName === destination) {
    const destinationInfo = `
<div class="explore-inner__text loading_animation">
<h2 class="h2">${data.destination[e.target.id].name}</h2>
<p class="p">
${data.destination[e.target.id].text}
</p>
</div>
<div class="explore-inner__info loading_animation">
<div>
  <h3 class="s2 loading_animation">AVG. DISTANCE</h3>
  <span class="s1">${data.destination[e.target.id].avg}</span>
</div>
<div>
  <h3 class="s2 loading_animation">Est. travel time</h3>
  <span class="s1 loading_animation">${data.destination[e.target.id].est}</span>
</div>
</div>
`;
exploreInner.innerHTML = destinationInfo;

    const imageChange = `
<h5 class="h5"><span>01</span> Pick your destination</h5>
<img src="${data.destination[e.target.id].img}" alt="${
      data.destination[e.target.id].name
    }" id="contentImage" class="loading_animation" />
`;
    mainPromotion.innerHTML = imageChange;
    for (let i = 0; i < destination.children.length; i++) {
      destination.children[i].classList.remove("active_transitions");
    }
    e.target.classList.add("active_transitions");
  } else if (pageName === crew) {
    const crewInfo = `
    <div class="explore-inner">
    <div class="explore-inner__text">
      <h4 class="h4 loading_animation" id="task">${
        data.crew[e.target.id].task
      }</h4>
      <h3 class="h3 loading_animation" id="name">${
        data.crew[e.target.id].name
      }</h3>
      <p class="p loading_animation" id="text">
      ${data.crew[e.target.id].text}
      </p>
    </div>
  </div>
    `;
    exploreInner.innerHTML = crewInfo;

    const imageChange = `
    <h5 class="h5"><span>02</span>  Meet your crew</h5>
    <img src="${data.crew[e.target.id].img}" alt="${
      data.crew[e.target.id].name
    }" id="contentImage" class="loading_animation" />
    `;
    mainPromotion.innerHTML = imageChange;

    for (let i = 0; i < crew.children.length; i++) {
      crew.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  } else if (pageName === technology) {
    const technologyInfo = `
  <div class="explore-inner__text">
  <h4 class="nav_text">THE TERMINOLOGY…</h4>
  <h3 class="h3 loading_animation">${data.technology[e.target.id].name}</h3>
  <p class="p loading_animation">
  ${data.technology[e.target.id].text}
  </p>
</div>
    `;
    exploreInner.innerHTML = technologyInfo;

    const imageChange = `
    <h5 class="h5"><span>03</span>SPACE LAUNCH 101</h5>
    <img class="desktop_img loading_animation" src="${
      data.technology[e.target.id].img
    }" alt="${data.technology[e.target.id].name}" id="contentImage" />
    <img class="tablet_img loading_animation" src="${
      data.technology[e.target.id].tabletImg
    }" alt="${data.technology[e.target.id].name}" id="contentImageTablet" />

    `;
    mainPromotion.innerHTML = imageChange;

    for (let i = 0; i < technology.children.length; i++) {
      technology.children[i].classList.remove("active_transitions");
    }
    e.target.classList.add("active_transitions");
  }
});

console.log(mainPromotion.innerHTML);
