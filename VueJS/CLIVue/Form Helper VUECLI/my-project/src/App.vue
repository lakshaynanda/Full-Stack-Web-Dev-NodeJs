<template>
  <div>
    <form-helper>
      <h2 slot="title">This is a slot</h2>
      <p slot="text">This is the text inside the slot tag</p>

    </form-helper>

  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'
export default {
  components:{
    'form-helper':formHelper
  },
  data () {
    return {
      
    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
