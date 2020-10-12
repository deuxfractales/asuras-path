<template>
  <form id="registration" @submit="sendForm">
    <input v-model="username" placeholder="enter username" />
    <input v-model="email" placeholder="enter email" />
    <input v-model="password" placeholder="enter password" />
    <button type="submit">Submit</button>
  </form>
</template>
<style></style>
<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "Register",
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    function sendForm() {
      axios
        .post("http://127.0.0.1:3000/auth/register", {
          username: `${username.value}`,
          email: `${email.value}`,
          password: `${password.value}`
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }

    return {
      username,
      email,
      password,
      sendForm
    };
  }
};
</script>
