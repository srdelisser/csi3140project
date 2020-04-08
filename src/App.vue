<template>
  <div id="app">
    <div>
      <h2 >Add your recipe!</h2>\
      <input type="textarea" v-model="newtitle" placeholder="Recipe Name" @keyup.enter="addarecipe" />
      <br />
      <br />
      <input
        type="textarea"
        v-model="newprepTime"
        placeholder="Preparation Time"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newcookTime"
        placeholder="Cook Time"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newreadyTime"
        placeholder="Ready Time (estimative)"
        @keyup.enter="addarecipe"
      />
      <br />
      <br />
      <input
        type="textarea"
        v-model="newingredient1"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient2"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient2"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient3"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient4"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient5"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient6"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient7"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient8"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient9"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient10"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <input
        type="textarea"
        v-model="newingredient10"
        placeholder="Add Ingredient"
        @keyup.enter="addarecipe"
      />
      <br />
      <br />
      <input
        type="text"
        v-model="newingredient10"
        placeholder="Procedure"
        @keyup.enter="addarecipe"
      />
      <button @click="addarecipe" class="button">Add recipe</button>
    </div>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "app",
  data() {
    return {
      recipes: [],
      newtitle: "",
      newcookTime: "",
      newreadyTime: "",
      newprepTime: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      ingredient6: "",
      ingredient7: "",
      ingredient8: "",
      ingredient9: "",
      ingredient10: "",
      ingredient11: "",
      procedure: ""
    };
  },
  firestore() {
    return {
      recipes: db.collection("recipes")
    };
  },
  methods: {
    addarecipe: function() {
      this.$firestore.recipes.add({
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
        ingredient11: this.newingredient11,
        procedure: this.procedure,
        timestamp: new Date()
      });
      (this.newtitle = ""),
        (this.newcookTime = ""),
        (this.newreadyTime = ""),
        (this.newprepTime = ""),
        (this.newingredient1 = ""),
        (this.newingredient2 = ""),
        (this.newingredient3 = ""),
        (this.newingredient4 = ""),
        (this.newingredient5 = ""),
        (this.newingredient6 = ""),
        (this.newingredient7 = ""),
        (this.newingredient8 = ""),
        (this.newingredient9 = ""),
        (this.newingredient10 = ""),
        (this.newingredient11 = ""),
        (procedure = "");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

