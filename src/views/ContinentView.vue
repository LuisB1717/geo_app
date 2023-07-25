<template>
  <div class="continent-view">
    <div class="continent-container">
      <continent-card
        v-for="continent in continents"
        :key="continent.code"
        :continent="continent"
      />
    </div>
  </div>
</template>

<script>
import ContinentCard from "../components/ContinentCard.vue";
import { continentQuery } from "../graphql/queries/continents.js";

export default {
  name: "ContinentView",
  components: {
    ContinentCard,
  },

  apollo: {
    continents: continentQuery,
  },
};
</script>

<style>
.continent-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 25px;
  place-content: center;
}
</style>
