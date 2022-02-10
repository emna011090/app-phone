<template>
  
<ContactList :list="contactList"/>
  
</template>

<script>
// @ is an alias to /src
import  ContactList from '@/components/ContactList.vue'

export default {
  name: 'Home',

  components:{
    ContactList,

  },
  data(){
    return{
      contactList:[
        {
          id:1,
          name:"emna",
          emai:"emna@gmail.com",
          phone:"+216 55 478 962",
          adresse:{
            street:"ibn khaloun",
            city:"ariana",
          },

        },
        {
           id:2,
          name:"mehdi",
          emai:"mehdi@gmail.com",
          phone:"+216 22 478 962",
          adresse:{
            street:"saada",
            city:"manouba",
          },
        },
        { id:3,
          name:"olfa",
          emai:"olfa@gmail.com",
          phone:"+216 55 458 962",
          adresse:{
            street:"rafeha",
            city:"tunis",
          },}
      ]
    }
  }
}
</script>
