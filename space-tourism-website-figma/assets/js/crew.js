let employees = [
  {
    task: "Commander",
    name: "Douglas Hurley",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: "../img/crew/image-removebg-preview(289).png",
  },
  {
    task: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "../img/crew/image-removebg-preview(262).png",
  },
  {
    task: "PILOT",
    name: "Victor Glover",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: "../img/crew/image-removebg-preview(288).png",
  },
  {
    task: "Flight Engineer",
    name: "Anousheh Ansari",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: "../img/crew/image-removebg-preview(265).png",
  },
];
const crewTask = document.getElementById("crew_task");
const crewName = document.getElementById("crew_name");
const crewText = document.getElementById("crew_text");
const crewImg = document.getElementById("crew_img");

function employeeChange(number) {
  crewTask.innerHTML = employees[number].task;
  crewName.innerHTML = employees[number].name;
  crewText.innerHTML = employees[number].text;
  crewImg.src = employees[number].img;
}

// crew slider

const slider = document.getElementById("slider");
let slider_button = slider.getElementsByClassName("slider_button");

for (let i = 0; i < slider_button.length; i++) {
  slider_button[i].addEventListener("click", function () {
    var active = slider.getElementsByClassName("active-slider");
    active[0].classList.remove("active-slider");
    this.className += " active-slider";
      employeeChange(i);

  });
}
