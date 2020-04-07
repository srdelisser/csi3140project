<template>
  <div id="register">
    <nav class="navbar">
      <div class="container">
        <a class="header" href="#">
          <h2>
            <i class="ti-medall-alt"></i>
            CookBook
          </h2>
        </a>
        <div class="menu">
          <div class="menu-pages">
            <a href="index.html">
              <i class="ti-home"></i>
              Home
            </a>|
            <a  href="findrecipe.html">
              <i class="ti-search"></i>
              Find a receipe
            </a>|
            <a class="connect" href="signin.html">
              <i class="ti-lock"></i>
              Sign In
            </a>|
            <a class="active" href="signup.html">
              <i class="ti-pencil-alt"></i>
              Sign Up
            </a>|
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="transparentbox">
        <h2>
          <i class="ti-pencil-alt"></i>
        </h2>
        <h2>Sign Up</h2>
        <form class="formtext">
          First name:
          <br />
          <input type="text" name="firstname" v-model="firstName" />
          <br />Last name:
          <br />
          <input type="text" name="lastname" v-model="lastName" />
          <br />Email:
          <br />
          <input type="text" name="email" v-model="email" />
          <br />Password:
          <br />
          <input type="text" name="password" v-model="password" />
          <br />Gender:
          <br />
          <select name="Gender" v-model="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Nonbinary</option>
            <option value="Other">Other</option>
            <option value="pnts">Perfer Not To Say</option>
          </select>
          <br />
          <br />
          <button type="button" class="button" @click="addUser">Submit</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "register",
  data() {
    return {
      users: [],
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: ''
    };
  },
  firestore() {
    return {
      users: db.collection("users")
    };
  },
  methods: {
    addUser: function() {
      this.$firestore.users.add({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        gender: this.gender
      });
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
      this.gender = '';
    }
  }
};
</script>