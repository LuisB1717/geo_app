<template>
  <div class="modal-wrapper">
    <div class="modal-header">
      <p class="modal-title">Filtrar por continentes</p>
      <button class="modal-clear" @click="onClearSelected">
        Limpiar
      </button>
    </div>

    <div class="modal-list">
      <div
        v-for="continent in continents"
        :key="continent.code"
        class="modal-item"
        @click="onContinentClick(continent)"
      >
        <div
          :class="[
            'modal-card',
            { highlight: selected.includes(continent.code) },
          ]"
        >
          <img
            class="modal-image"
            src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg"
            alt=""
          />
        </div>
        <p class="modal-paragraph">{{ continent.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    continents: Array,
  },
  data() {
    const selectedContinents = this.$router.currentRoute.query?.continent;

    return {
      selected: selectedContinents ? selectedContinents.split(",") : [],
    };
  },
  methods: {
    onContinentClick(continent) {
      if (this.selected.includes(continent.code)) {
        this.selected = this.selected.filter(
          (element) => element !== continent.code
        );
      } else {
        this.selected.push(continent.code);
      }

      this.$router.replace({
        query: {
          continent: this.selected.join(","),
        },
      });

      this.$emit("change", this.selected);
    },
    onClearSelected() {
      if (this.selected.length !== 0) {
        this.selected = [];
        this.$router.replace({
          query: {
            continent: "",
          },
        });
      }

      this.$emit("change", this.selected);
    },
  },
};
</script>

<style>
.highlight img {
  box-shadow: 0 0 3px 2px #0098ff;
}

.modal-wrapper {
  position: absolute;
  top: 5rem;
  left: 0;
  background-color: #fff;
  padding: 1.2rem;
  width: 70%;
  border-radius: 25px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.modal-title {
  color: #757575;
  font-weight: 540;
}

.modal-clear {
  border: none;
  background-color: transparent;
  color: #0098ff;
  font-weight: 550;
  cursor: pointer;
  font-size: 15px;
}

.modal-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 130px);
  gap: 10px 25px;
  place-content: center;
}

.modal-item p {
  color: #757575;
  margin-top: 5px;
}
.modal-card,
.modal-image {
  border-radius: 12px;
}

.modal-card {
  display: flex;
  justify-content: center;
}

.modal-image {
  width: 130px;
}
</style>
