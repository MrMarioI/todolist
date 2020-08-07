<template>
   <div>
      <h1>Your Lists</h1>

      <div class="todo">
      <ul>
      <li v-for="(pok, i) in todos" :key="i">HEY</li>
      </ul>
      <TodoList/>
      </div>
  </div>
</template>

<script>
import TodoList from "./../components/TodoList";

export default {
name: "Todo",
components:{
    TodoList,
}
}
</script>

<style>

</style>