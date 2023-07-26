<template>
  <div id="app">
    <side-bar />

    <main>
      <section>
        <router-view :continents="continents" />
      </section>
    </main>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import { continentQuery } from "./graphql/queries/continents.js";

export default {
  name: "App",
  components: {
    SideBar,
  },
  apollo: {
    continents: continentQuery,
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
  display: flex;
  flex-direction: column;
}
main {
  padding: 40px 20px;
  min-height: 100vh;
  flex: 1;
}

@media (min-width: 1024px) {
  #app {
    flex-direction: row;
  }
  main {
    margin-left: 280px;
  }
}

@media (min-width: 1600px) {
  main {
    margin-left: 320px;
  }
}
</style>
