<template>
  <div
    :class="['country-card', { selected: selected?.code == country?.code }]"
    @click="$emit('click')"
    v-observe-visibility="visibilityChanged"
  >
    <img
      :src="image || defaultImage"
      :class="['country-image', { limited }]"
      alt="country image reference"
    />
    <div class="country-card-info">
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
    <div v-if="!!countryTag" class="country-tag">
      {{ countryTag }}
    </div>
  </div>
</template>

<script>
import { defaultFlag, defaultImage, getImageFrom } from "../data/restapi/pixabay.js";
import { getImage, saveImage } from "../data/storage/cache.js";

export default {
  props: {
    country: Object,
    selected: Object,
  },
  data() {
    const fromCache = getImage(this.country?.code);
    return {
      image: fromCache,
      cached: !!fromCache,
      limited: false,
      fetched: false,
      defaultImage,
      defaultFlag,
    };
  },
  computed: {
    countryTag() {
      if (this.cached) return "From cache";
      if (this.limited) return "Limited";
      if (!this.image) return "Default image";
      return "";
    },
  },
  methods: {
    fetchImage() {
      if (!this.image && !this.fetched) {
        const search = this.country?.capital || this.country?.name;
        getImageFrom(search).then((value) => {
          if (value) {
            this.image = value.src;
            this.limited = value.limited;
            this.fetched = true;
            saveImage(this.country?.code, value.src);
          }
        });
      }
    },
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.fetchImage();
      }
    },
  },
};
</script>

<style>
.country-card {
  width: 300px;
  position: relative;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 10px #757575;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.country-image {
  width: 100%;
  border-radius: 20px 20px 0 0;
  aspect-ratio: 4 / 3;
}
.country-image.limited {
  filter: grayscale();
}
.country-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  color: #fff;
  background-color: #000;
  font-size: 0.6rem;
  text-transform: uppercase;
  border-radius: 8px;
  padding: 4px 8px;
  opacity: 0.5;
}
.country-card-info {
  display: flex;
  padding: 12px 20px;
  align-items: center;
  flex: 1;
}

.country-card-info img {
  width: 48px;
  margin-right: 16px;
}

.country-name {
  font-weight: 700;
  color: #0098ff;
}

.continent-name {
  color: #757575;
}

.country-card:hover,
.country-card.selected {
  .country-card-info {
    background-color: #0098ff;
    border-radius: 0 0 20px 20px;
  }

  .country-name,
  .continent-name {
    color: white;
  }
}
</style>
