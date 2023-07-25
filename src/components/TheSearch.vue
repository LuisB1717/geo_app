<template>
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      placeholder="Escribe el país que deseas ver"
    />
    <button class="search-button">
      <img src="../assets/lupa.png" alt="" /> Buscar
    </button>
  </div>
</template>

<style>
.search-container {
  width: 100%;
  max-width: 700px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 60px;
  padding: 7px 25px;
  box-shadow:  1px 2px 4px #757575; ;
 
}

.search-input {
  background: transparent;
  flex: 1;
  border: 0;
  outline: none;
  padding: 24px;
  color: #757575;
}

.search-button {
  border: 0;
  border-radius: 20px;
  padding: 7px 25px;
  background-color: #0098ff;
  cursor: pointer;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-button img {
  width: 30px;
}
</style>
