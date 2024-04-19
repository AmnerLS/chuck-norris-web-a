<script>
import {Joke} from "../model/joke.entity.js";


export default {
  name: "joke-card",
  props: {joke: Joke}
}
</script>

<template>
  <pv-card class="m-2">

    <template #title>
      <p>{{ joke.category }}</p>
    </template>
    <template #subtitle>
      <p>{{ joke.id }}</p>
    </template>
    <template #content>
      <div class="p-d-flex p-flex-column p-sm-flex-row">
        <div class="p-p-2">
          <img :src="joke.iconUrl" class="p-mr-2">
        </div>
        <div class="p-p-2">
          <p>{{ joke.value }}</p>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>