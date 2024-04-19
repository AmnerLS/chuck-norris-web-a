<script>



export default {
  name: "header-content",
}
</script>

<template>
  <pv-toolbar style="background-color: #123456;">
    <template #start>
      <div class="flex align-items-center gap-2">
        <pv-button icon="pi pi-bars" />
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" style="width: 90px; height: 60px;">
        <h2 style="color: white;">ChuckNorris</h2>
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">

      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>