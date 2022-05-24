<template>
  <div class="Table">
    <h1>Сведенья об оплате</h1>
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
        "ID", "Дата проведения операции", "Сумма"],
      tableContent: [
        [0, '04.05.1999', '37000'],
        [1, '09.01.1987', '45900'],
        [2, '11.12.1983', '24000'],
        [3, '16.10.1992', '37500'],
        [4, '04.08.1994', '12000'],
        [5, '29.03.1984', '41000']
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