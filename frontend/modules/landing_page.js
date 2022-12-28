import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let data = await fetch(`${config.backendEndpoint}/cities`);
    let json = await data.json();
    console.log(json);
    return json;
  } catch (err) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

  let div = document.createElement("div");
  div.className = "col-lg-3";

  let card = `
  <a href = "pages/adventures/?city=${id}" target = "_blank" id=${id}>
    <div class="tile">
      <img src="${image}" alt="bu" />
      <p class = "tile-text text-center">${city} </br> ${description}</p>
    </div>
  </a>
  `;
  div.innerHTML = card;
  document.getElementById("data").append(div);
}

export { init, fetchCities, addCityToDOM };
