<template>
  <div class="continent-card">
    <img
      src="https://pixabay.com/get/gdc2222eb785942d451de4beae2b5133b144676a5fc96fb06e0bba7a34ce75310ba533904e88129671cc9019823a1851f4b5057b789e97028d235550a06ae2bfc_640.jpg"
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
};
</script>

<style>
.continent-card {
  width: 400px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 1px 1px 10px #757575;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.continent-card img {
  width: 100%;
  border-radius: 50px 50px 0 0;
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
