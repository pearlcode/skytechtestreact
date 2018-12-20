import axios from 'axios';

export default async (query) => {

    const endpoint = "https://help-search-api-prod.herokuapp.com/search"; // needs to be in config
    return axios.get(`${endpoint}?query=${query}`)
        .then(function (response) {
            console.log(response);
            return response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        });

}