<template>
  <div class="item-card">
    <img
      class="img-item"
      src="https://elviajerofeliz.com/wp-content/uploads/2019/02/Ciudades-de-Espan%CC%83a.jpg"
      alt=""
    />

    <div class="item-info">
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
.item-card {
  width: 300px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 1px 1px 10px #757575;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.img-item {
  width: 100%;
  border-radius: 50px 50px 0 0;
}

.item-info {
  display: flex;
  padding: 15px 35px;
  align-items: center;
}

.item-info img {
  width: 60px;
  height: 40px;
  margin-right: 20px;
}

.country-name {
  font-size: 25px;
  font-weight: 800;
  color: #0098ff;
}

.continent-name {
  font-size: 20px;
  font-weight: 500;
}

.item-card:hover {
  .item-info {
    background-color: #0098ff;
    border-radius: 0 0 50px 50px;
  }
  .country-name,
  .continent-name {
    color: white;
  }
}
</style>
