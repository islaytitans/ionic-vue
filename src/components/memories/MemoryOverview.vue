<template>
  <!-- <ion-img :src="memory.image" :alt="memory.title"></ion-img> -->
  <ion-img :src="editedImage" :alt="memory.title" crossorigin="anonymous"></ion-img>
  <h2 class="ion-text-center">{{ memory.title }}</h2>
  <p class="ion-text-center">{{ memory.description }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonImg } from "@ionic/vue";
import mergeImages from "merge-images";

export default defineComponent({
  props: ["memory"],
  data() {
    return {
      editedImage: ''
    }
  },
  components: {
    IonImg,
  },
  methods: {
    mergeImage(): void {
      mergeImages([
        { src: this.memory.image, x: 0, y:0 },
        { src: '../../img/body.png', x: 200, y:0 },
        { src: '../../img/eyes.png', x: 200, y:0 },
        { src: '../../img/mouth.png', x: 200, y:0 }])
        .then(b64 => this.editedImage = b64)
        console.log(this.editedImage);
    }
  },
  created() {
    this.mergeImage();
  }
});
</script>
