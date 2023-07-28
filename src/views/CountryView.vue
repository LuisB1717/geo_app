<template>
  <div class="country-view">
    <div class="header">
      <the-search
        v-model="search"
        :continents="continents"
        @change="onFilterChange"
      />
    </div>

    <div class="section">
      <div class="card-container">
        <country-card
          v-for="country in filteredCountries"
          :key="country.code"
          :country="country"
          :selected="countrySelected"
          @click="onSelectCountry(country)"
        />
      </div>

      <the-drawer
        v-if="showDrawer"
        :country="countrySelected"
        @close="onClose"
      />
    </div>
  </div>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";
import TheDrawer from "../components/TheDrawer.vue";
import TheSearch from "../components/TheSearch.vue";
import { countryQuery } from "../data/graphql/countries.js";

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
      search: "",
      showDrawer: false,
      countrySelected: null,
      selectedContinents: selectedContinents
        ? selectedContinents.split(",")
        : [],
    };
  },
  computed: {
    filteredCountries() {
      if (!this.countries?.length) {
        return [];
      }
      if (this.search == "") {
        return this.countries;
      }
      return this.countries.filter((country) => {
        const countryName = country.name.toLowerCase();
        return countryName.includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    onFilterChange(value) {
      this.selectedContinents = value;
    },
    onSelectCountry(country) {
      if (!this.countrySelected) {
        this.showDrawer = true;
        this.countrySelected = country;
      } else if (country.code == this.countrySelected.code) {
        this.showDrawer = false;
        this.countrySelected = null;
      } else {
        this.countrySelected = country;
      }
    },
    onClose() {
      this.showDrawer = false;
      this.countrySelected = null;
    },
  },

  apollo: {
    countries: {
      query: countryQuery,
      variables() {
        return {
          continents:
            this.selectedContinents.length === 0
              ? this.continents?.map((continent) => continent.code)
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

.section {
  display: flex;
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
