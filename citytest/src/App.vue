<template>
  <v-app>
    <v-content class="blue lighten-2">
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: "App",

  components: {
    Home
  }
};
</script>
