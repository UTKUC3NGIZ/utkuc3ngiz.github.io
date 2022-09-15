import React from "react";
import ReactDOM from "react-dom";
import myImage from "./images/my_matrix.png"; 
const techs = ["HTML", "CSS", "Sass", "JS", "React"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

const months = [
  "January",
  "February",
  "March", 
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[new Date().getMonth()];
const day = new Date().getDate();
const year = new Date().getFullYear();

const subscribe = (
  <div className="outside">
    <div className="inner">
      <img src={myImage} alt="" />
      <h1>
        Utku Cengiz <span className="material-symbols-outlined">done</span>
      </h1>
      <h2>Senior Developer, Turkey</h2>
      <h3>SKILLS</h3>
      <ul>{techsFormatted}</ul>
      <span>
        <span className="material-symbols-outlined">schedule</span> Joined on{" "}
        {month} {day}, {year}
      </span>
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(subscribe, rootElement);
