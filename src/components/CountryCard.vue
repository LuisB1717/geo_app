<template>
  <div
    :class="['country-card', { selected: selected?.code == country?.code }]"
    @click="$emit('click')"
  >
    <img
      class="country-img"
      src="https://elviajerofeliz.com/wp-content/uploads/2019/02/Ciudades-de-Espan%CC%83a.jpg"
      alt=""
    />

    <div class="country-card-info">
      <img
        src="https://img.asmedia.epimg.net/resizer/LQyBk5T2TfVttC_yVM8n5HuEYpM=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/53YSJXSIZFHNTBV52Z4AMKISUM.png"
        alt=""
      />
      <div>
        <p class="country-name">{{ country?.name }}</p>
        <p class="continent-name">{{ country?.continent.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: Object,
    selected: Object,
  },
};
</script>

<style>
.country-card {
  width: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 10px #757575;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.country-img {
  width: 100%;
  border-radius: 20px 20px 0 0;
}

.country-card-info {
  display: flex;
  padding: 12px 20px;
  align-items: center;
  flex: 1;
}

.country-card-info img {
  width: 60px;
  height: 40px;
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
