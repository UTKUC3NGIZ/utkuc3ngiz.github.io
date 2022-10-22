let employees = [
  {
    task: "THE TERMINOLOGY…",
    name: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: "../img/technology/img1.jpg",
  },
  {
    task: "THE TERMINOLOGY… ",
    name: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: "../img/technology/img2.jpg",
  },
  {
    task: "THE TERMINOLOGY…",
    name: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: "../img/technology/img3.jpg",
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
