<template>
<div class="m">
  <ul class="menu">
    <a><router-link to="/DataPassenger" exact>Данные о пассажирах</router-link></a>
    <a><router-link to="/DataFlights" exact>Сведенья о маршрутах</router-link></a>
    <a><router-link to="/PaymentInf" exact>Сведенья об оплате</router-link></a>
    <a><router-link to="/tables" exact>Авторизация</router-link></a>
  </ul>
</div>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
  }

</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.menu{
  list-style: none;
  text-decoration: none;
  background-color: #C2ADB7;
  height: 40px;
  width: 70%;
  margin-top: -7px;
  margin-left: 15%;
  border: 2px solid #413748;
  border-radius: 10px;
}
a{
  text-decoration: none;
  padding: 30px;
  font-size: 25px;
  color: #413748;
  text-align: center;
}




</style>
