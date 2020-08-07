<template>
   <nav id="nav-main">
<HelloWorld msg="Guerillos List"/>
    <router-link to="/">Home</router-link> |
    <router-link to="/create">Create a list</router-link> |
        <hr>
  </nav>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
    name: 'App',
components: {
    HelloWorld,
}
}
</script>

<style>
#nav-main{
    align-content: center;
    justify-content: space-between;
}

</style>