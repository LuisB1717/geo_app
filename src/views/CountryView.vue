<template>
  <div class="country-view">
    <div class="header">
      <the-search :continents="continents" @change="onFilterChange" />
    </div>

    <div class="section">
      <div class="card-container">
        <country-card
          v-for="country in countries"
          :key="country.code"
          :country="country"
          @click="onSelectCountry(country)"
        />
      </div>

      <div class="drawer-container" v-if="showDrawer">
        <div class="container-button">
          <button class="close-button" @click="onClosedDrawer">X</button>
        </div>
        <the-drawer :country="countrySelected" />
      </div>
    </div>
  </div>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";
import TheDrawer from "../components/TheDrawer.vue";
import TheSearch from "../components/TheSearch.vue";
import { countryQuery } from "../graphql/queries/countries.js";

export default {
  name: "CountryView",

  props: {
    continents: Array,
  },

  components: {
    CountryCard,
    TheDrawer,
    TheSearch,
  },

  data() {
    const selectedContinents = this.$router.currentRoute.query?.continent;

    return {
      showDrawer: false,
      countrySelected: null,
      selectedContinents: selectedContinents
        ? selectedContinents.split(",")
        : [],
    };
  },

  methods: {
    onFilterChange(value) {
      this.selectedContinents = value;
    },
    onSelectCountry(country) {
      this.countrySelected = country;
      this.showDrawer = true;
    },
    onClosedDrawer() {
      this.showDrawer = false;
    },
  },

  apollo: {
    countries: {
      query: countryQuery,
      variables() {
        return {
          continents:
            this.selectedContinents.length === 0
              ? this.continents.map((continent) => continent.code)
              : this.selectedContinents,
        };
      },
    },
  },
};
</script>

<style>
.country-view {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.section{
  display: flex;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}

.drawer-container {
  height: 100%;
  background-color: white;
  position: relative;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 25px;
  place-content: center;
  flex: 1;
}

.container-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-button {
  border: 0;
  cursor: pointer;
  padding: 7px 10px;
  border-radius: 50%;
  background-color: #0098ff;
  color: white;
  font-weight: bold;
}
</style>
