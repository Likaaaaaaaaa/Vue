<template>
  <table class="v-table">
    <thead class="v-table-header">
    <tr>
      <th class="v-table-element" v-for="item in headers" :key="item">{{ item }}</th>
    </tr>
    </thead>
    <tbody class="v-table-content">
    <tr v-for="row in content" :key="row">
      <td class="v-table-element" v-for="item in row" :key="item">{{ item }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableI",
  props:['headers','content']
}
</script>

<style scoped>
th,
td {
  border: 1px solid #C2ADB7;
  background-color: #C2ADB7;
  color: #413748;
}
.v-table {
  width: 95%;
  border: 1px solid #C2ADB7;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: #413748;
}
.v-table-header {
  border-bottom: 1px solid #C2ADB7;
  background-color: #C2ADB7;

}
.v-table-element {
  padding: 10px;
  background-color: #C2ADB7;
}
</style>