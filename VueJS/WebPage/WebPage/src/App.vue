<template>
  <div>
    <app-Header></app-Header>
    <Ninjas></Ninjas>
    <app-Footer></app-Footer>
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
      
    }
  }
}
</script>

<style>

</style>
