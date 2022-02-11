<template>
<div class="row">
    <div class="col-lg-6">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Contact list</h5>
   <p class="card-text" v-for="contact  in list" v-bind:key="contact.id" 
    @click="activedetail = contact "  >{{ contact.name }}</p>
    <p class="card-text"></p>
    
  </div>
</div>
    </div>
    <div class="col-lg-6">
   <Detail v-if="activedetail" @delete="remove" :contact="activedetail"/>
      </div>
    </div>
</template>

<script>

import  Detail from './Detail.vue'

export default {
    name: 'ContactList',
    props: {
        list: Array
        },
       
        components: {
          Detail,
        },

        data() {
          return {
          activedetail :null,
       
           
          }
        
        },
       
        
       
    }
        
       
       




</script>

<style>

</style>