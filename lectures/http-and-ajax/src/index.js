// 1) Button exercise - Rehearsal

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (event) => {
//   event.currentTarget.innerText = "Please wait...";
//   event.currentTarget.setAttribute("disabled", "");
// })


// 2) OMDb API - GET REQUEST

// const results = document.querySelector("#results");

// const searchMovies = (keyword) => {
//   const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`
//   fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     data.Search.forEach((movie) => {
//       const movieListItem = `<li class="list-inline-item">
//                                 <img src="${movie.Poster}" alt="poster">
//                                 <p>${movie.Title}</p>
//                             </li>`
//       results.insertAdjacentHTML("beforeend", movieListItem);
//     })
//   });
// }


// const form = document.querySelector("#search-movies");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const keyword = document.querySelector("#keyword").value;
//   results.innerHTML = "";
//   searchMovies(keyword);
// })

// 3) Algolia API - POST Request

// const searchAlgoliaPlaces = (event) => {
//   fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data); // Look at local_names.default
//     });
// };

// const input = document.querySelector("#search");
// input.addEventListener("keyup", searchAlgoliaPlaces);








