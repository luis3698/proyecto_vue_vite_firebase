<template>
  <div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
          <input type="email" placeholder="email" v-model.trim="email" />
          <input type="password" placeholder="password" v-model.trim="password"/>
          <button type="submit" :disabled="userStore.loadingUser">iniciar</button>
      </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
//import {useRouter} from "vue-router"


const userStore = useUserStore();
//const router = useRouter()

const email = ref("luisgerardo3698@gmail.com");
const password = ref("123123");

const handleSubmit  = async () => {
if (!email.value || password.value.length < 6) {
      alert("ingresa los campos");
    }
    await userStore.loginUser(email.value, password.value)
    //router.push("/");
};
</script>

<style scoped>
h1 {
  font-size: 3em;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 300px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2em;
  border-radius: 10px;
  border: 1px solid #ccc;
}
button {
  padding: 10px;
  font-size: 1.2em;
  background: #1c87c9;
  color: #fff;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}
</style>