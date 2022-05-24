<template>
  <div class="Table">
    <h1>Данные о пассажирах</h1>
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
          "ID", "Фамилия", "Имя", "Отчество",'Дата рождения','Номер телефона'
        ],
        tableContent: [
          [0, 'Иванова', 'Надежда', 'Алексеевна','04.05.1999','89236583921'],
          [1, 'Кузнецов', 'Константин', 'Витальевич','09.01.1987','8927452856938'],
          [2, 'Воронцов', 'Семен', 'Владимирович','11.12.1983','89216489367'],
          [3, 'Сидорова', 'Оксана', 'Сергеевна','16.10.1992','89126398573'],
          [4, 'Семенов', 'Егор', 'Александровна','04.08.1994','89237121364'],
          [5, 'Алексеев', 'Виталий', 'Валентинович','29.03.1984','89236583921']
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