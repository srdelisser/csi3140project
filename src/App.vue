<template>
  <div id="app">
    <div>
      <input type="text"
        v-model="newtitle"
        placeholder="The title of the recipe"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newprepTime"
        placeholder="Preparation Time"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newcookTime"
        placeholder="Cook Time"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newreadyTime"
        placeholder="Ready Time (estimative)"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient1"
        placeholder="Ingredient 1"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient2"
        placeholder="Ingredient 2"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient2"
        placeholder="Ingredient 2"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient3"
        placeholder="Ingredient 3"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient4"
        placeholder="Ingredient 4"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient5"
        placeholder="Ingredient 5"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient6"
        placeholder="Ingredient 6"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient7"
        placeholder="Ingredient 7"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient8"
        placeholder="Ingredient 8"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient9"
        placeholder="Ingredient 9"
        @keyup.enter="addarecipe">
        <input type="text"
        v-model="newingredient10"
        placeholder="Ingredient 10"
        @keyup.enter="addarecipe">
      <button  @click="addarecipe">
        Add a recipe
      </button>
    </div>
  </div>
</template>

<script>
  import { db } from './firebase';

  export default {
    name: 'app',
    data() {
      return {
        recipes: [],
        newtitle: '',
        newcookTime: '',
        newreadyTime: '',
        newprepTime: '',
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
        ingredient5: '',
        ingredient6: '',
        ingredient7: '',
        ingredient8: '',
        ingredient9: '',
        ingredient10: ''
      }
    },
    firestore() {
      return {
        recipes: db.collection('recipes'),
      }
    },
methods: {
      addarecipe: function() {
        this.$firestore.recipes.add(
          {
            title: this.newtitle,
            prepTime: this.newprepTime,
            cookTime: this.newcookTime,
            readyTime: this.newreadyTime,
            ingredient1: this.newingredient1,
            ingredient2: this.newingredient2,
            ingredient3: this.newingredient3,
            ingredient4: this.newingredient4,
            ingredient5: this.newingredient5,
            ingredient6: this.newingredient6,
            ingredient7: this.newingredient7,
            ingredient8: this.newingredient8,
            ingredient9: this.newingredient9,
            ingredient10: this.newingredient10,
            timestamp: new Date()
          }
        );
        this.newtitle = '',
        this.newcookTime = '',
        this.newreadyTime = '',
        this.newprepTime = '',
        this.newingredient1 = '',
        this.newingredient2 = '',
        this.newingredient3 =  '',
        this.newingredient4 =  '',
        this.newingredient5 =  '',
        this.newingredient6 = '',
        this.newingredient7 = '',
        this.newingredient8 = '',
        this.newingredient9 = '',
        this.newingredient10 =  ''
        
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .reptileList {
    list-style: none;
  }
</style>

