<template>
  <div id="app">
    <NavMain/>
      <router-view />
        <Todo/>

  </div>
</template>

<script>
import NavMain from '@/components/NavMain.vue';
import Todo from './views/Todo';
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'App',
  components: {
    NavMain,
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
