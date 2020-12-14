<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default defineComponent({
  props: ["memory"],
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
});
</script>
