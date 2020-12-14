<template>
  <ion-img :src="memory.image" :alt="memory.title"></ion-img>
  <h2 class="ion-text-center">{{ memory.title }}</h2>
  <p class="ion-text-center">{{ memory.description }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonImg } from "@ionic/vue";

export default defineComponent({
  props: ["memory"],
  components: {
    IonImg,
  },
});
</script>
