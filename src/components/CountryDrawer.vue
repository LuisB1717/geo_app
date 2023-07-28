<template>
  <div class="drawer-wrapper" @click="onDrawerClick">
    <div class="drawer">
      <img
        :src="image || defaultImage"
        class="drawer-image"
        alt="country image"
      />
      <div class="drawer-content">
        <img
          :src="`https://flagsapi.com/${country?.code}/flat/64.png`"
          alt="Country flag"
          :onerror="`this.onerror=null;this.src='${defaultFlag}'`"
        />
        <div>
          <p class="country-name">{{ country?.name }}</p>
          <p class="continent-name">{{ country?.continent.name }}</p>
        </div>
      </div>
      <div class="country-info">
        <p>
          Capital: <span> {{ country?.capital }} </span>
        </p>
        <p>
          Language: <span> {{ languages }} </span>
        </p>
        <p>
          Population: <span> 500k people </span>
        </p>
        <p>
          Currency: <span> {{ country?.currency }} </span>
        </p>
        <p>
          Regions: <span v-if="!thereAreRegions"> No se encontraron regiones </span>
        </p>
        <ul v-if="thereAreRegions" class="region-list">
          <li v-for="state in country?.states" :key="state.code">
            {{ state.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultFlag, defaultImage } from "../data/restapi/pixabay.js";
import { getImage } from "../data/storage/cache.js";

export default {
  props: {
    country: Object,
  },
  data() {
    return {
      image: getImage(this.country?.code),
      defaultImage,
      defaultFlag,
    }
  },
  updated() {
    this.image = getImage(this.country?.code)
  },
  computed: {
    languages() {
      if (!this.country?.languages) return "";
      return this.country.languages.map((lang) => lang.name).join(", ");
    },
    thereAreRegions() {
      return this.country?.states.length > 0
    }
  },
  methods: {
    onDrawerClick() {
      this.$emit('close')
    }
  }
};
</script>

<style>
.drawer-wrapper {
  position: relative;
}
.drawer {
  padding: 2rem;
  position: fixed;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.drawer-image {
  width: 100%;
  border-radius: 15px;
}
.drawer-content {
  display: flex;
  padding: 20px 0;
  align-items: center;
}

.drawer-content img {
  width: 50px;
  margin-right: 20px;
}

.country-info p {
  font-weight: 800;
  color: #0098ff;
  margin-bottom: 0.5rem;
}

.country-info span {
  font-weight: 500;
  color: #676767;
  margin-left: 10px;
}

.region-list {
  list-style: none;
  padding: 10px 20px;
  background-color: white;
  color: #676767;
  box-shadow: 1px 1px 6px 1px #757575;
  margin-top: 1rem;
  height: 240px;
  overflow-y: scroll;
}

.region-list li {
  margin: 8px 0;
  color: #757575;
  font-weight: 500;
}

.region-list p {
  color: #757575;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0;
}

@media (min-width: 1024px) {
  .drawer-wrapper {
    width: 360px;
  }
  .drawer {
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
  }
}
</style>
