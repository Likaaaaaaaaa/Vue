<template>
  <form class="form">
    <div class="mb-2">
      <label class="form-label">Логин</label>
      <input type="text">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="button">
      <button type="button" class="btn btn-outline-light" @click="$router.push('/AviaTicket')">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.form{
  background-color: #C2ADB7;
  width: 700px;
  height: 300px;
  margin-top: 15%;
  margin-left: 32%;
  border-radius: 15px;
  border: 3px solid #413748;
}
.mb-2{
  padding-top: 8%;
  margin-left: 27%;
}
.mb-3{
  padding-top: 8%;
  margin-left: 27%;
}
.mb-2 label{
  padding: 20px;
  font-size: 25px;
}
.mb-3 label{
  padding: 20px;
  margin-left: -12px;
  font-size: 25px;
}
button{
  border-radius: 5px;
  width: 100px;
  margin-top: 10%;
  margin-left: 45%;
  background-color: #413748;
  color: #C2ADB7;
  height: 30px;
  font-size: 17px;
}
</style>
