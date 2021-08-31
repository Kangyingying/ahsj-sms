<template>
  <Navigation></Navigation>
  <router-view/>
  <Footer></Footer>

</template>

<script>
import {Options, Vue} from 'vue-class-component';
import Navigation from '@/components/Navigation/Navigation.vue'
import Footer from "@/components/Footer/Footer";

  @Options({
    components:{
      Navigation,
      Footer
    }
  })
  export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}
</style>
