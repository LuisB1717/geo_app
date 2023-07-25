<template>
  <div id="app">
    <SideBar></SideBar>
    <main>
      <div class="header">
        <TheSearch></TheSearch>
      </div>

      <section>
        <div class="card-container">
          <TheCard
            v-for="country in countries"
            :key="country.code"
            :country="country"
            @click.native="onSelectCountry(country)"
          ></TheCard>
        </div>

        <div class="drawer-container">
          <TheDrawer :country="countrySelected"></TheDrawer>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import TheCard from "./components/TheCard.vue";
import TheDrawer from "./components/TheDrawer.vue";
import TheSearch from "./components/TheSearch.vue";

import gql from "graphql-tag";

export default {
  name: "App",
  components: {
    SideBar,
    TheCard,
    TheSearch,
    TheDrawer,
  },

  data() {
    return {
      countrySelected: null,
    };
  },

  methods: {
    onSelectCountry: function (country) {
      this.countrySelected = country;
    },
  },

  apollo: {
    countries: gql`
      {
        countries {
          code
          name
          capital
          currency
          languages {
            code
            name
          }
          continent {
            code
            name
          }
          states {
            code
            name
          }
        }
      }
    `,
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

section {
  display: flex;
  justify-content: space-between;
}

.drawer-container {
  height: 100%;
  background-color: white;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 25px;
  place-content: center;
  flex: 1;
}
</style>
