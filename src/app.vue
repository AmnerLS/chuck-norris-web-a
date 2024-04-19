<script>

import {NorrisApiService} from "./norris/services/norris-api.service.js";
import {Joke} from "./norris/model/joke.entity.js";
import JokeList from "./norris/components/joke-list.component.vue";
import FooterContent from "./public/footer-content.component.vue";
import HeaderContent from "./public/header-content.component.vue";

export default {
  name: 'app',
  components: {HeaderContent, FooterContent, JokeList},
  data() {
    return {
      jokes:[],
      norrisApi: new NorrisApiService()
    }
  },
  created(){
    this.getJokes();
  },
  methods: {
    async buildJokes(categories){
      for (const category of categories) {
        const response = await this.norrisApi.getRandomJoke(category);
        this.jokes.push(new Joke(response.data.id, category, response.data.icon_url, response.data.value));
      }
    },
    async getJokes(){
      const response = await this.norrisApi.getCategories();
      const categories = response.data;
      console.log(categories);
      await this.buildJokes(categories);
      console.log(this.jokes[0]);
    }
  }
}


</script>
<template>
  <header-content/>
  <joke-list :jokes="jokes"/>
  <footer-content/>

</template>
<style scoped>




</style>
