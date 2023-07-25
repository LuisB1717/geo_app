<template>
  <div class="drawer">
    <img
      class="img-drawer"
      src="https://elviajerofeliz.com/wp-content/uploads/2019/02/Ciudades-de-Espan%CC%83a.jpg"
      alt=""
    />
    <div class="drawer-content">
      <img
        src="https://img.asmedia.epimg.net/resizer/LQyBk5T2TfVttC_yVM8n5HuEYpM=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/53YSJXSIZFHNTBV52Z4AMKISUM.png"
        alt=""
      />
      <div>
        <p class="country-name">Spain</p>
        <p class="continent-name">Europe</p>
      </div>
    </div>
    <div class="country-info">
      <p>Capital: <span> London</span></p>
      <p>Lenguage: <span> English</span></p>
      <p>Population: <span> 500k people</span></p>
      <p>Currency: <span> Euro, dolar</span></p>
      <p>Region</p>

      <ul class="region-list">
        <li>Santa cruz</li>
        <li>Santa cruz</li>
        <li>Santa cruz</li>
        <li>Santa cruz</li>
      </ul>
    </div>
  </div>
</template>

<style>
.drawer {
  padding: 50px;
}
.img-drawer {
  width: 300px;
  border-radius: 15px;
}

.drawer-content {
  display: flex;
  padding: 20px 0;
  align-items: center;
}

.drawer-content img {
  width: 60px;
  height: 40px;
  margin-right: 20px;
}

.country-info p {
  font-size: 23px;
  font-weight: 800;
  color: #0098ff;
  margin-bottom: 15px;
}

.country-info span {
  font-weight: 500;
  color: #676767;
  margin-left: 10px;
}

.region-list {
  list-style: none;
  padding: 10px 20px;
  background-color:white;
  color: #676767;
  box-shadow:  1px 1px 6px 1px #757575; 
  
}

.region-list li{
  margin: 8px 0;
  color: #757575;
  font-size: 18px;
  font-weight: 500;
}
</style>
