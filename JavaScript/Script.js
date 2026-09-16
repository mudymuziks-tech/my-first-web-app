const searchInput = document.getElementById("movieSearch");
const searchResult = document.getElementById("searchResult");

if (searchInput && searchResult) {
  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value;

    if (searchText ==="") {
      searchResult.textContent = "Start typing a a movie...";
    } else if (searchText === "Batman") {
      searchResult.textContent = "Batman found!";
    } else {
      searchResult.textContent = "You are searching for: " + searchText;
    }
  });
}


const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  });
}




const backButton = document.querySelector("#backButton");

console.log(backButton);

if (backButton) {
  backButton.addEventListener("click", () => {
    history.back();
  });
}