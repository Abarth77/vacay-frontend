<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="data"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Backend from './utility/Backend.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data() {
    return {
      data: null
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      // An attempt at making use of the fetch() API a bit more smooth,
      // and cut out packes that are not needed, in this case Axios
      const backend = new Backend();

      // Proof of concept, remove
      const EndpointFn = "myFunctionName";
      const response = await backend.getData(EndpointFn);
      this.data = response;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
