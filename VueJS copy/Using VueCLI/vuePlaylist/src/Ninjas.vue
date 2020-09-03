<template>
<div>
<h1>List of Ninjas</h1>
  <ul>
      <li v-for="ninja in ninjas" v-bind:key="ninja">{{ ninja }}</li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      ninjas:['Yoshi','Mario','Ryu']
    }
  },
  methods:{
   
  },
}
</script>

<style scoped>
h1{
    color: green;
}

</style>
