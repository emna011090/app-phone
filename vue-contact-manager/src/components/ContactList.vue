<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Contact </h5>
    <p class="card-text" v-for="contact in list" v-bind:key="contact.id">{{ contact.name }}</p>
      <p class="card-text"></p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</template>

<script>


export default {
    name: 'ContactList',
    props: {
        list: Array
        },



}
</script>

<style>

</style>