<template>
  <div id="">
   <h1>{{ title }}</h1>
   <Ninjas></Ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'
export default { 
  
  // components:{     //Local Registration
  //   'Ninjas': Ninjas
  // },
  data () {
    return {
      title:"Ninja App"
    }
  },
  methods:{
   
  },
}
</script>

<style>
h1{
  color: blueviolet;
}
</style>
