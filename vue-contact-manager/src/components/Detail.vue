<template>

  <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Détail contact </h5>
    <p class="card-text"  >email :{{ contact.email }}</p>
    <p class="card-text"  >phone :{{ contact.phone }}</p>
    <p class="card-text"  >adresse :{{ contact.address.street }}</p>
    <p class="card-text"  >city :{{ contact.address.city }}</p>
    <!-- <p class="card-text" >{{ list. phone}}</p> -->
    <p class="card-text"></p>
    <button class="btn btn-danger"  @click="delet" v-bind:key="contact.id">delete</button>
    
  </div>
</div>
    
</template>

<script>
export default {
   props: ['contact'],
   methods: {
       delet() {
           this.$emit('delete',this.contact);
           
       }
   },

}
</script>

<style>

</style>