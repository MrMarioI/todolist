<template>
   <div>
      <h1>Your Todo Lists</h1>

      <div class="todo">
      <ul>
      <li v-for="(list, i) in todos" :key="i"></li>
      </ul>
      </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>