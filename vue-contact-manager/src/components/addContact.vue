<template>
<div class="row">
    <div class="col-lg-6 offset-lg-3">
  <form @submit.prevent="onsubmit" >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" 
    v-model="user.email" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">name</label>
    <input type="text" class="form-control"   v-model="user.name">
    <label for="exampleInputPassword1">phone</label>
    <input type="tel" class="form-control"   v-model="user.phone">
    <label for="exampleInputPassword1">address </label>
    <label for="exampleInputPassword1">street</label>
    <input type="text" class="form-control"  v-model="user.address.street">
    <label for="exampleInputPassword1">city</label>
    <input type="text" class="form-control"  v-model="user.address.city">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
    </div>
</div>
</template>


<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    data() {
        return {
         user:{   
            email: '',
            phone: '',
            address:{
                street:'',
                city:''

            } 
            }
        }
    },
    methods: {
        onsubmit() {
            this.user.id=uuidv4();
            console
              this.$emit('display',this.user);
            
        }
    },

}
</script>

<style>

</style>