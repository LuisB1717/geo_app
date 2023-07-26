<template>
  <nav class="navbar">
    <div class="name">GEOAPP</div>
    <div class="list">
      <router-link exact-path to="/">Inicio</router-link>
      <router-link exact-path to="/countries">Paises</router-link>
      <router-link exact-path to="/continents">Continentes</router-link>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: #676767;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: bold;
  padding: 1.5rem ;
  text-align: center;
  background-color: #dbdbdb;
  border-radius: 0.5rem;
  color: #676767;
}

.list {
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.list a {
  margin: 0.2rem 0;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  color: white;
}

.list a:hover , .list a.router-link-exact-active{
  background-color: white;
  color: #676767;
  border-radius: 4px;
}

@media (min-width: 1024px) {
  .navbar {
    position: fixed;
    height: 100%;
    width: 280px;
  }
}

@media (min-width: 1600px) {
  .navbar {
    width: 320px;
  }
}
</style>
