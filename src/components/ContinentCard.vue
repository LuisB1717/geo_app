<template>
  <div class="continent-card" @click="onCardClick">
    <img
      src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg"
      alt=""
    />
    <div class="continent-card-info">
      <p class="continent-info-name">{{ continent?.name }}</p>
      <p class="continent-info-code">{{ continent?.code }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    continent: Object,
  },
  methods: {
    onCardClick() {
      this.$router.push({
        path: '/countries',
        query: {
          continent: this.continent.code, 
        }
      })
    }
  }
};
</script>

<style>
.continent-card {
  width: 400px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 10px #757575;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.continent-card img {
  width: 100%;
  border-radius: 20px 20px 0 0;
}

.continent-card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
}

.continent-info-name {
  color: #757575;
  font-weight: 700;
}
.continent-info-code {
  color: #0098ff;
  font-weight: 800;
}

.continent-card:hover {
  background-color: #0098ff;
  .continent-info-name,
  .continent-info-code {
    color: white;
  }
}
</style>
