<template>
<div class="list">
<form @submit.prevent="postMessage" class="form">
    <!-- <select v-model="to" id="to" class="input"> -->
    <!-- </select> -->
    <input id="message" class="input" v-model="message"/>
    <button><font-awesome-icon icon="plus" /></button>
  </form>
<hr>
 

 <ul>
      <li v-for="(msg, i) in messages" :key="i">
        <h2 v-if="msg.from" :title="msg.from.email" class="title">{{ msg.from.first_name }} - {{ msg.from.last_name }}</h2>
        <p>
          {{ msg.message }}
        </p>
        <span>{{ msg.date }}</span>
        <button><font-awesome-icon icon="minus" /></button>
      </li>
    </ul>

</div>
</template>

<script>
export default {

}
</script>

<style>
.list{
    width: 190px;
    margin: 10px;
    padding: 15px;
    border: 1px solid black;
}
</style>