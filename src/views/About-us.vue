
<template>
  <card-quienes-somos></card-quienes-somos>
  <v-row>
    <v-col xs="12" md="4" class="cart">
      <div class="contenedor">
        <h1>Mision</h1>
        <img src="../assets/mision.png" width="200" />
        <h2 class="texto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          odit voluptatibus quasi numquam in! Fugiat quia maiores cum neque,
          repudiandae, magnam distinctio similique ratione doloremque autem
          tenetur, molestias quidem accusantium?
        </h2>
      </div>
    </v-col>
    <v-col xs="12" md="4" class="cart">
      <div class="contenedor">
        <h1>Vision</h1>
        <img src="../assets/vision.png" width="200" />
        <h2 class="texto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          odit voluptatibus quasi numquam in! Fugiat quia maiores cum neque,
          repudiandae, magnam distinctio similique ratione doloremque autem
          tenetur, molestias quidem accusantium?
        </h2>
      </div>
    </v-col>
    <v-col xs="12" md="4" class="cart">
      <div class="contenedor">
        <h1>Valores</h1>
        <img src="../assets/valores.png" width="200" />
        <h2 class="texto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          odit voluptatibus quasi numquam in! Fugiat quia maiores cum neque,
          repudiandae, magnam distinctio similique ratione doloremque autem
          tenetur, molestias quidem accusantium?
        </h2>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CardQuienesSomos from '../components/CardQuienesSomos.vue';
 export default {
     components: {
      CardQuienesSomos,
      
    },
 }
 </script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
.cart {
  background-color: rgb(36, 38, 54);
}
.texto {
  text-align: center;
}
.contenedor {
  position: relative;
  text-align: center;
}
h1 {
  font-family: "Lato", sans-serif;
  font-size: 48px;
  color: rgb(247, 159, 27);
}
h2 {
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: rgb(247, 159, 27);
}
</style>