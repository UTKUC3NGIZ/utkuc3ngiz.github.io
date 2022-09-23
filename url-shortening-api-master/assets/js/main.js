// hamburger Menu
const button = document.getElementById("mobil_hamburger_button");
let open_hamburger = true;

button.addEventListener("click", () => {
  if (open_hamburger === true) {
    document.getElementById("mobil_inner").style.display = "flex";
    open_hamburger = false;
  } else {
    document.getElementById("mobil_inner").style.display = "none";
    open_hamburger = true;
  }
});

window.addEventListener('click', function(e){
  if (!document.getElementById('mobil_inner_div').contains(e.target) && (!document.getElementById('mobil_hamburger_button').contains(e.target))){
   document.getElementById('mobil_inner').style.display="none" //the same code you've used to hide the menu
} 
})

// url
const url = document.getElementById("url");
const url_button = document.getElementById("url_button");
url_button.addEventListener("click", () => {
  if (url.value === "") {
    console.log("oldu");
    document.getElementById("error").style.display = "block"
    url.classList.add("error")
  } else {
    url.classList.remove("error")
    fetch(`https://api.shrtco.de/v2/shorten?url=${url.value}`)
      .then((response) => response.json())
      .then((data) => {
        let url_div_inner = `
        <div>
          <span>
            <a href="${url.value}">${url.value}</a>
          </span>
        </div>
        <div>
          <span>
            <a href="${data.result.full_short_link}">${data.result.short_link}</a>
          </span>
          <button>Copy</button>
        </div>
        `;
        let url_div = document.createElement("div");
        url_div.innerHTML = url_div_inner;
        document.getElementById("main_url_div").appendChild(url_div);
        url.value = ""
        document.getElementById("error").style.display = "none"
      });
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    navigator.clipboard.writeText(e.target.parentNode.children[0].textContent);
    e.target.parentNode.children[1].textContent = "Copied!";
    e.target.parentNode.children[1].style.backgroundColor = "#3A3053";
  }
});
