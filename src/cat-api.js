import axios from "axios";
import Notiflix from "notiflix";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/'; //! Разобраться!
axios.defaults.headers.common["x-api-key"] = "live_rnU55rCXqKPD83Egmapcdap90VKAblzQGTKZl8H3JKOckJcU60JEOZSi2DteHMrS";


export { fetchBreeds };
export { fetchCatByBreed };

function fetchBreeds() {

  return axios.get('breeds')
    .then(response => {

      return response.data;
    })
}


function fetchCatByBreed(breedId) {

  return axios.get(`images/search?breed_ids=${breedId}`)
    .then(response => {

      return response.data;
    })
    .catch(error => {

      Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
    });
}