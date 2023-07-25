<template>
  <div class="country-card" @click="$emit('click')">
    <img
      class="country-img"
      src="https://elviajerofeliz.com/wp-content/uploads/2019/02/Ciudades-de-Espan%CC%83a.jpg"
      alt=""
    />

    <div class="country-info">
      <img
        src="https://img.asmedia.epimg.net/resizer/LQyBk5T2TfVttC_yVM8n5HuEYpM=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/53YSJXSIZFHNTBV52Z4AMKISUM.png"
        alt=""
      />
      <div>
        <p class="country-name">{{ country?.name }}</p>
        <p class="continent-name">{{country?.continent.name}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: Object
  },
};
</script>

<style>
.country-card {
  width: 300px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 1px 1px 10px #757575;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.img-country {
  width: 100%;
  border-radius: 50px 50px 0 0;
}

.country-info {
  display: flex;
  padding: 15px 35px;
  align-items: center;
}

.country-info img {
  width: 60px;
  height: 40px;
  margin-right: 20px;
}

.country-name {
  
  font-weight: 800;
  color: #0098ff;
}

.continent-name {

  font-weight: 500;
}

.country-card:hover {
  .country-info {
    background-color: #0098ff;
    border-radius: 0 0 50px 50px;
  }
  .country-name,
  .continent-name {
    color: white;
  }
}
</style>
