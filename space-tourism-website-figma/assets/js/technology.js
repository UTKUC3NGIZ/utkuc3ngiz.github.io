let technology = [
  {
    task: "THE TERMINOLOGY…",
    name: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: "../img/technology/img1.jpg",
    tabletImg:"../img/technology/tablet1.jpg",
  },
  {
    task: "THE TERMINOLOGY… ",
    name: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: "../img/technology/img2.jpg",
    tabletImg:"../img/technology/tablet2.jpg",
  },
  {
    task: "THE TERMINOLOGY…",
    name: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: "../img/technology/img3.jpg",
    tabletImg:"../img/technology/tablet3.jpg",
  },
];
const technologyTask = document.getElementById("technology_task");
const technologyName = document.getElementById("technology_name");
const technologyText = document.getElementById("technology_text");
const technologyImg = document.getElementById("technology_img");
const tablettechnologyImg = document.getElementById("tablet_img");
let technology_animation = document.getElementsByClassName("technology")


function employeeChange(number) {
  technologyTask.innerHTML = technology[number].task;
  technologyName.innerHTML = technology[number].name;
  technologyText.innerHTML = technology[number].text;
  technologyImg.src = technology[number].img;
  tablettechnologyImg.src = technology[number].tabletImg;
}

// technology slider

const slider = document.getElementById("slider");
let slider_button = slider.getElementsByClassName("slider_button");

for (let i = 0; i < slider_button.length; i++) {
  slider_button[i].addEventListener("click", function () {
    var active = slider.getElementsByClassName("active-slider");
    active[0].classList.remove("active-slider");
    this.className += " active-slider";
    employeeChange(i);

    
    technology_animation[0].classList.add("loading_animation")

    setTimeout(function(){
      technology_animation[0].classList.remove("loading_animation")

    },1500)

  });
}
