<template>
  <nav class="nav-bar">
    <ul>
      <li>
        <router-link to="/" v-if="userStore.userData">Home</router-link>
      </li>
      <li>
        <router-link  to="/About-us">Sobre nosotros</router-link>
      </li>
      <li>
        <router-link  to="/contacts">contactos</router-link>
      </li>
      <li>
        <router-link to="/login" v-if="!userStore.userData">Login</router-link>
      </li>
      <li>
        <router-link  to="/register" v-if="!userStore.userData">Registro</router-link>
      </li>
      
        <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
      
    </ul>
  </nav>

  <router-view />
</template>

<script setup>
import { useUserStore } from "./stores/user";
const userStore = useUserStore();

//funcion para esconder la barra de navegacion
window.onscroll = function() {
            let navbar = document.querySelector('.nav-bar');
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 100) {
                navbar.classList.add('hide');
            } else {
                navbar.classList.remove('hide');
            }
        }
</script>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #242424;
  z-index: 9999;
  transition: all 0.5s ease;
}
.nav-bar.hide {
  top: -150px;
}
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 5px;
    margin-top: 20px;
    display: inline-block;
  }
  a {

    text-decoration: none;
    color: rgb(255, 255, 255);
    padding: 8px 16px;
  }
  @media (max-width: 480px) {
    nav {
      flex-direction: column;
    }
    li {
      margin: 8px 0;
    }
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
  @media (max-width: px) {
    button {
      width: 100%;
    }
  }
</style>