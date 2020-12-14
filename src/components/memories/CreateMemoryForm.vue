<template>
  <form class="ion-padding">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea type="text" rows="5" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image Url</ion-label>
        <ion-input type="url" required />
      </ion-item>
    </ion-list>
    <ion-button expand="full">Save</ion-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
});
</script>