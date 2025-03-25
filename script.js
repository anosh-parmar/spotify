searchbar = document.querySelector("#search_bar");
search = document.querySelector(".search");
searchbtn = document.querySelector(".searchbtn");
hr = document.querySelector(".hr");
body = document.querySelector("body");
function showSearchBar() {
  if (window.innerWidth <= 380) return;

  if (searchbar.style.display === "none") {
    searchbar.style.display = "block";
  } else {
    searchbar.style.display = "none";
  }
  if (search.style.width === "50px") {
    search.style.width = "100%";
  } else {
    search.style.width = "50px";
  }
  if (searchbtn.style.transform === "rotate(0deg)") {
    searchbtn.style.transform = "rotate(360deg)";
  } else {
    searchbtn.style.transform = "rotate(0deg)";
  }
}

function hideSearchBar(event) {
  if (!search.contains(event.target) && event.target !== searchbtn) {
    searchbar.style.display = "none";
    search.style.width = "50px";
    searchbtn.style.transform = "rotate(0deg)";
  }
}

document.querySelector(".searchbtn").addEventListener("click", showSearchBar);

document.addEventListener("click", hideSearchBar);

spotify = document.querySelector(".spotify");
home = document.querySelector(".home");
library = document.querySelector(".library");
function againshowsearchbar() {
  if (window.innerWidth <= 380) {
    if (searchbar.style.display === "none") {
      searchbar.style.display = "block";
    } else {
      searchbar.style.display = "none";
    }
    if (search.style.width === "50px") {
      search.style.width = "100%";
    } else {
      search.style.width = "50px";
    }
    if (searchbtn.style.transform === "rotate(0deg)") {
      searchbtn.style.transform = "rotate(360deg)";
    } else {
      searchbtn.style.transform = "rotate(0deg)";
    }
  }
}
document
  .querySelector(".searchbtn")
  .addEventListener("click", againshowsearchbar);

img = searchbtn.querySelector("img");
function glow() {
  search.style.backgroundColor = "#333333";
  searchbtn.style.backgroundColor = "#333333";
  searchbar.style.backgroundColor = "#333333";
  img.style.filter = "invert(100%)";
}
function nogl() {
  search.style.backgroundColor = "#1f1f1f";
  searchbtn.style.backgroundColor = "#1f1f1f";
  searchbar.style.backgroundColor = "#1f1f1f";
  img.style.filter = "invert(60%)";
}

search.addEventListener("mouseenter", glow);
search.addEventListener("mouseleave", nogl);

one = document.querySelector(".oneimg");
two = document.querySelector(".twoimg");

function changeImages() {
  one.src = "/svgs/home1.svg";
  two.src = "/svgs/library1.svg";
}

function revertImages() {
  one.src = "/svgs/home.svg";
  two.src = "/svgs/library.svg";
}

document.querySelectorAll(".hs a").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

library.addEventListener("click", changeImages);
home.addEventListener("click", revertImages);
