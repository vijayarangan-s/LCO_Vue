<template>
  <div class="d-flex justify-content-center row">
    <div class="bg-dark text-white p-5 mt-5 col-sm-5 d-flex justify-content-center">
      <div >
        <i class="fas fa-star fa-6x" 
        v-bind:class="rating >= 1 ? color : rating == 1 ? 'text-light' : null"
        @click="setRating(1)"></i>
      </div>
      <div >
        <i class="fas fa-star fa-6x" 
        v-bind:class="rating >= 2 ? color : rating == 2 ? 'text-light' : null"
        @click="setRating(2)"></i>
      </div>
      <div >
        <i class="fas fa-star fa-6x" 
        v-bind:class="rating >= 3 ? color : rating == 3 ? 'text-light' : null"
         @click="setRating(3)"></i>
      </div>
      <div >
        <i class="fas fa-star fa-6x" 
        v-bind:class="rating >= 4 ? color : rating == 4 ? 'text-light' : null"
        @click="setRating(4)"></i>
      </div>
      <div >
        <i class="fas fa-star fa-6x" 
        v-bind:class="rating >= 5 ? color : rating == 5 ? 'text-light' : null"
        @click="setRating(5)"></i>
      </div>
      
    </div>
    <div  class="mt-3 col-md-8">
      <h1 class="text-success border border-success mt4 d-flex justify-content-center p-3" v-if="rating==1">
        Sorry to hear that
      </h1>
      <h1 class="text-success border border-success mt4 d-flex justify-content-center p-3" v-if="rating==2">
        Not Bad
      </h1>
      <h1 class="text-success border border-success mt4 d-flex justify-content-center p-3" v-if="rating==3">
        Okay
      </h1>
      <h1 class="text-success border border-success mt4 d-flex justify-content-center p-3" v-if="rating==4">
        Good
      </h1>
      <h1 class="text-success border border-success mt4 d-flex justify-content-center p-3" v-if="rating==5">
       Wow!
      </h1>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      rating: null,
      color: null
    }
  },
  methods:{
    setRating(rating){
      console.log({rating}, this.rating)
      this.rating = rating != this.rating ? rating : null
      this.color = rating == this.rating ? 'text-warning' : rating == 5 ? 'text-white' : null
    }
  }
  
}
</script>

<style>
body{
  background: #333;
}
</style>
