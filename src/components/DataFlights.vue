<template>
  <div class="Table">
    <h1>Сведенья о маршрутах</h1>
    <TableI :headers="tableHeaders" :content="tableContent" />
  </div>
  <button class="but">Изменить</button>
  <button class="but1">Удалить</button>
</template>

<script>
import TableI from "@/components/TableI";

export default {
  components: {
    TableI
  },
  data() {
    return {
      tableHeaders: [
        "ID", "Дата вылета", "Пункт отправления", "Пункт прибытия"],
      tableContent: [
        [0, '04.05.1999', 'Франция', 'Россия'],
        [1, '09.01.1987', 'Россия', 'США'],
        [2, '11.12.1983', 'Италия', 'Украина'],
        [3, '16.10.1992', 'Болгария', 'Чехия'],
        [4, '04.08.1994', 'Канада', 'Россия'],
        [5, '29.03.1984', 'Россия', 'Китай']
      ]
    }
  }
}</script>


<style scoped>
.Table{
  margin-left: 3%;
  margin-top: 5%;
}
h1{
  color: #413748;
  font-size: 30px;
}
.but{
  border-radius: 5px;
  width: 200px;
  margin-left: 22%;
  background-color: #413748;
  color: #C2ADB7;
  height: 50px;
  font-size: 20px;
  margin-top: 20px;
}
.but1{
  border-radius: 5px;
  width: 200px;
  margin-top: 20px;
  margin-left: 35%;
  background-color: #413748;
  color: #C2ADB7;
  height: 50px;
  font-size: 20px;
}
</style>