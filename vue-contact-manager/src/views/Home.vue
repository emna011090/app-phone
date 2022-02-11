<template>
  

    <div class="demo">
    <button
       v-for="tab in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
      {{ tab }}
    </button>
	  <component :is="currentTab" :list="contactList"  @display="add"   class="tab"></component>
  </div>
 
</template>

<script>
// @ is an alias to /src
import  ContactList from '@/components/ContactList.vue'
import addContact from '@/components/addContact.vue'




export default {
  name: 'Home',

  components:{
    ContactList,addContact

  },
  data(){
    return{
      currentTab: 'contactList',
      tabs: ['contactList', 'addContact'],
      contactList:[
        {
          id:1,
          name:"emna",
          email:"emna@gmail.com",
          phone:"+216 55 478 962",
          address:{
            street:"ibn khaloun",
            city:"ariana",
          },

        },
        {
           id:2,
          name:"mehdi",
          email:"mehdi@gmail.com",
          phone:"+216 22 478 962",
          address:{
            street:"saada",
            city:"manouba",
          },
        },
        { id:3,
          name:"olfa",
          email:"olfa@gmail.com",
          phone:"+216 55 458 962",
          address:{
            street:"rafeha",
            city:"tunis",
          },}
      ]
    }
  },
  methods:{
    add(user) {
     this.contactList.push(user);
     this.currentTab="contactList"
      
    },
    remove(index){
     //this.contactList.$remove(user);
     this.$delete(this.contactList, index)
    }
  },
}
</script>
<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
