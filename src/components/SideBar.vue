<template>
  <nav class="navbar">
    <span class="name">GEOAPP</span>
    <div class="list">
      <router-link to="/">Inicio</router-link>
      <router-link to="/countries">Paises</router-link>
      <router-link to="/continents">Continentes</router-link>
    </div>

    <router-view />
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
  font-size: 25px;
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.list a {
  margin: 1rem 0;
  padding: 0.5rem 2.5rem;
  text-decoration: none;
  color: white;
}

.list a:hover , .list a.router-link-exact-active{
  background-color: white;
  color: #676767;
  border-radius: 7px;
}
</style>
