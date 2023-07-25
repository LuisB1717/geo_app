<template>
  <div id="app">
    <side-bar />

    <main>
      <div class="header">
        <the-search />
      </div>

      <section>
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import TheSearch from "./components/TheSearch.vue";

export default {
  name: "App",
  components: {
    SideBar,
    TheSearch,
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
  height: 100%;
  background-color: #e3f4ff;
}

main {
  width: calc(100% - 300px);
  margin-left: 300px;
  padding: 40px 20px;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}


</style>
