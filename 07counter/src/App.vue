<template>
  <div class="body">
    <h1 class="flex">Counter App</h1>
    <h2>{{count}}</h2>
    <button class="flex" @click="increment">Increment</button>
    <button class="flex" @click="decrement">Decrement</button>
    <button class="flex" @click="reset">Reset</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        count : 0
      }
    },
    methods:{
       increment() {
        return this.count >= 0 ? this.count++ : 0
      },
      decrement() {
        return this.count > 0 ? this.count-- : 0
      }, 
       reset() {
        return this.count = 0
      }
    }
  }
</script>

<style>
  .body{
    top:0px;
    margin: 0%;
    display: flex;
    justify-content: center;
    background: #242B2E;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    color: #ffff;
  }
  .flex{
    display: flex;
    flex-direction: row;
  }
</style>