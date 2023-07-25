<template>
  <div class="search-container">
    <div class="input-container">
      <label for="search"> País </label>
      <input
        name="search"
        type="text"
        class="search-input"
        placeholder="Escribe el país que deseas ver"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <button class="search-button">
      <img src="../assets/lupa.png" alt="" /> Buscar
    </button>

    <div v-if="showModal" class="search-modal">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    languages() {
      if (!this.country?.languages) return ''
      return this.country.languages.map(lang => lang.name).join(', ')
    }
  },
  methods: {
    onFocus() {
      this.showModal = true;
    },
    onBlur() {
      this.showModal = false;
    }
  }
};
</script>

<style>
.search-container {
  position: relative;
  width: 100%;
  max-width: 700px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 60px;
  padding: 12px;
  box-shadow:  1px 2px 4px #757575; ;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  color: #676767;
}

.search-input {
  background: transparent;
  color: #8b8b8b;
  border: none;
  outline: none;
  width: 200px;
}

.search-input::placeholder {
  color: #8b8b8b;
}

.search-input:focus {
  outline: none;
  border-bottom: 1px #0098ff solid;
  margin-bottom: -1px;
}

.search-button {
  border: 0;
  border-radius: 20px;
  padding: 6px 16px;
  background-color: #0098ff;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-button img {
  width: 20px;
}

.search-modal {
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  width: 70%;
}
</style>
