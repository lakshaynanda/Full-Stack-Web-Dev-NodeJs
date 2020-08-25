<template>
  <div>
    <app-Header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-Header>
    <Ninjas v-bind:ninjas="ninjas"></Ninjas>
    <app-Footer v-bind:title="title"></app-Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
export default {
  components:{
    'app-Header':Header,
    'app-Footer':Footer,
    'Ninjas':Ninjas
  },
  data () {
    return {
      ninjas:[
          {name:'Ryu', speciality:'Vue Components',show:false},
          {name:'Crystal', speciality:'HTML Wizardry',show:false},
          {name:'Hitoshi', speciality:'Click Events',show:false},
          {name:'Tango', speciality:'Conditionals',show:false},
          {name:'Kami', speciality:'Webpack',show:false},
          {name:'Yoshi', speciality:'Data Diggin',show:false},
      ],
      title:'Vue Ninjas'
    }
  },
  methods:{
    updateTitle:function(updatedTitle){
      this.title=updatedTitle;
    }
  }
} 
</script>

<style>

</style>
