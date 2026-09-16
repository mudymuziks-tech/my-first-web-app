const movies = [
  "Batman",
  "Avatar",
  "Interstellar",
  "Inception",
  "The Dark Knight"
];



const searchInput = document.getElementById("movieSearch");
const searchResult = document.getElementById("searchResult");

if (searchInput && searchResult) {
  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value;
    const lowersearchText = searchText.lowerCase();
    if (searchText ==="") {
      searchResult.textContent = "Start typing a a movie...";
    } else if (movies.includes(searchText)) {
      searchResult.textContent = "Movie found!";
    } else {
      searchResult.textContent = "Movie not found. ";
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