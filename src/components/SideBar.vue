<template>
  <nav class="navbar">
    <span class="name">GEOAPP</span>

    <ul class="list">
      <li>Inicio</li>
      <li>Países</li>
      <li>Continentes</li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: #676767;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  font-size: 30px;
  font-weight: bold;
  padding: 1rem;
}

.list {
  list-style: none;
  font-size: 25px;
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;
}

.list li {
  margin: 1rem 0;
  padding: 0.5rem 2.5rem;
}

.list li:hover {
  background-color: white;
  color: #676767;
  border-radius: 7px;
}
</style>
