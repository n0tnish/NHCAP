<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div>
          <label>Username: </label>
          <input v-model="username" type="text" />
        </div>
        <div>
          <label>Email: </label>
          <input v-model="email" type="email" />
        </div>
        <div>
          <label>Password: </label>
          <input v-model="password" type="password" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post("http://localhost:3000/api/users/register", {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error.response.data);
        }
      },
    },
  };
  </script>