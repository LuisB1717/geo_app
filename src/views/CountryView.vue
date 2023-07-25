<template>
  <div class="country-view">
    <div class="card-container">
      <the-card
        v-for="country in countries"
        :key="country.code"
        :country="country"
        @click="onSelectCountry(country)"
      />
    </div>

    <div class="drawer-container">
      <the-drawer :country="countrySelected" />
    </div>
  </div>
</template>

<script>
import TheCard from "../components/TheCard.vue";
import TheDrawer from "../components/TheDrawer.vue";
import { countryQuery } from "../graphql/queries/countries.js";

export default {
  name: "CountryView",

  components: {
    TheCard,
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
    countries: countryQuery,
  },
};
</script>

<style>
.country-view {
  display: flex;
  justify-content: space-between;
}

.drawer-container {
  height: 100%;
  background-color: white;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 25px;
  place-content: center;
  flex: 1;
}
</style>
