import axios from "axios";


const http = axios.create({
    baseURL: "https://api.chucknorris.io",
})

export class NorrisApiService {

    getCategories() {
       return http.get('/jokes/categories');
    }

    getRandomJoke(category) {
        if(category) {
            return http.get(`/jokes/random?category=${category}`);
        }
    }
}