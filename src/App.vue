<template>
  <div id="app">
    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: #e3f4ff;
  
  
}
</style>
