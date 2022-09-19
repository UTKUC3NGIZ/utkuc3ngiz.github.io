//

let filter_box = document.getElementById("filter_box")
let boxs =  document.getElementById("boxs")
let filter_button =  document.getElementById("filter_button")
// data extraction
fetch("assets/js/data.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    for (let i = 0; i < responseJson.length; i++) {
      let out_box = document.createElement("div");
      out_box.id = `out_box_id_${i}`;
      out_box.className = "out_box";
      boxs.appendChild(out_box);

      // formation of work boxes
      let box_inner = `
      <div class="box line">
      <div class="users_div">
        <div>
          <img src="${responseJson[i].logo}" alt="" />
        </div>
        <div>
          <div class="users_name">
            <h3>${responseJson[i].company}</h3>
            <span id="new${responseJson[i].id}">NEW!</span>
            <span id="featured${responseJson[i].id}">FEATURED</span>
          </div>
          <div class="users_rank">
            <h2>${responseJson[i].position}</h2>
          </div>
          <div class="users_info">
            <span>${responseJson[i].postedAt}</span>
            <span>${responseJson[i].contract}</span>
            <span>${responseJson[i].location}</span>
          </div>
        </div>
      </div>
      <div class="tags_div">
        <ul id="tags_div_id_${responseJson[i].id}">
          <li class="${responseJson[i].role}">${responseJson[i].role}</li>
          <li class="${responseJson[i].level}">${responseJson[i].level}</li>

        </ul>
      </div>
      </div>
      `;
      // conditions of status information
      document.getElementById(`out_box_id_${i}`).innerHTML = box_inner;
      if (responseJson[i].new === false) {
        document.getElementById(`new${responseJson[i].id}`).style.display =
          "none";
      }
      if (responseJson[i].featured === false) {
        document.getElementById(`featured${responseJson[i].id}`).style.display =
          "none";
        document.querySelectorAll(".box")[i].classList.remove("line");
      } else {
      }
      // transfer of tags
      for (let a = 0; a < responseJson[i].languages.length; a++) {
        let languages = document.createElement("li");
        languages.className = responseJson[i].languages[a];
        languages.innerHTML = responseJson[i].languages[a];
        document
          .getElementById(`tags_div_id_${responseJson[i].id}`)
          .appendChild(languages);
      }
      for (let a = 0; a < responseJson[i].tools.length; a++) {
        let tools = document.createElement("li");
        tools.className = responseJson[i].tools[a];
        tools.innerHTML = responseJson[i].tools[a];
        document
          .getElementById(`tags_div_id_${responseJson[i].id}`)
          .appendChild(tools);
      }
    }
    let tags_name_array = [];
    addEventListener("click", (e) => {
      // filtering function
      if (e.target.nodeName === "LI") {
        let tags_name = e.target.innerHTML;
        tags_name_array.push(e.target.innerHTML);
        const set_tags_name_array = new Set(tags_name_array);
        tags_name_array = []
        for (const language of set_tags_name_array) {
         tags_name_array.push(language)
        }
        let yeni = `
        <div>
        <span> ${tags_name}</span>
        <span class="material-symbols-outlined clear" > close </span>
      </div>
        `;

        if (
          filter_button.innerHTML.includes(tags_name) === false
        ) {
          filter_button.innerHTML += yeni;
        }

        for (let a = 0; a < responseJson.length; a++) {
          if (
            document
              .getElementById(`out_box_id_${a}`)
              .innerHTML.includes(tags_name) === false
          ) {
            document.getElementById(`out_box_id_${a}`).style.display = "none";
          }
        }
        filter_box.style.display = "flex";
        boxs.classList.add("responsive_boxs");
      }

      // remove the filter
      if (e.target.classList[1] === "clear") {
        let tags_name = e.target.parentNode;
        tags_name.remove();
        for (let u = 0; u < tags_name_array.length; u++) {
          if (tags_name.innerHTML.includes(tags_name_array[u]) === true) {
            tags_name_array.splice(u, 1);
          }
        }
        if (tags_name_array.length !== 0) {
          for (let u = 0; u < tags_name_array.length; u++) {
            for (let a = 0; a < responseJson.length; a++) {
              if (
                document
                  .getElementById(`out_box_id_${a}`)
                  .innerHTML.includes(tags_name_array[u]) === true
              ) {
                document.getElementById(`out_box_id_${a}`).style.display =
                  "block";
              }
            }
          }

          for (let u = 0; u < tags_name_array.length; u++) {
            for (let a = 0; a < responseJson.length; a++) {
              if (
                document
                  .getElementById(`out_box_id_${a}`)
                  .innerHTML.includes(tags_name_array[u]) === false
              ) {
                document.getElementById(`out_box_id_${a}`).style.display =
                  "none";
              }
            }
          }
        } else {
          for (let a = 0; a < responseJson.length; a++) {
            document.getElementById(`out_box_id_${a}`).style.display = "block";
            filter_box.style.display = "none";
            boxs.classList.remove("responsive_boxs");
          }
        }
      }
    });

    // Clear function
    let clear = document.getElementById("clear");
    clear.addEventListener("click", () => {
      for (let a = 0; a < responseJson.length; a++) {
        document.getElementById(`out_box_id_${a}`).style.display = "block";
        filter_button.innerHTML = "";
        tags_name_array = [];
        filter_box.style.display = "none";
        boxs.classList.remove("responsive_boxs");
      }
    });

    // media
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        document.getElementById("header_img").src =
          "assets/images/bg-header-mobile.svg";
      } else {
        document.getElementById("header_img").src =
          "assets/images/bg-header-desktop.svg";
      }
    }

    var x = window.matchMedia("(max-width: 768px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction);
    return responseJson;
  });
