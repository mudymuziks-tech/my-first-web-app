const searchInput = document.getElementById("movieSearch");
const searchResult = document.getElementById("searchResult");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value;

  searchResult.textContent ="you are searching for: " + searchText;
});