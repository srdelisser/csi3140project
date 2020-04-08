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
            Email:
            <br />
            <input type="text" name="email" v-model="email" />
            Password:
            <br />
            <input type ="text" name="password"><br>
            <button type="button" class="button" @click="signUser">Sign In</button>
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
      email: '',
      password: '',
    };
  },
  firestore() {
    return {
      users: db.collection("users")
    };
  },
  methods: {
    signUser: function() {
      for (user of users) {
          if ((user.email == this.email) && (user.passeword == this.passeword)) {
              this.$store.state.user.email = this.email
              this.$store.state.user.firstName = user.firstName
          }
      }
      this.email = '';
      this.password = '';
    }
  }
};
</script>