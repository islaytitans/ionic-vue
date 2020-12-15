<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea type="text" rows="5" required v-model="enteredDescription" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image Url</ion-label>
        <ion-input type="url" required v-model="enteredImage"/>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="full">Save</ion-button>
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
import Memory from "@/interfaces/Memory";

export default defineComponent({
  emits: ['save-memory'],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredImage: ''
    }
  },
  methods: {
    submitForm() {
      const memoryData: Memory = {
        title: this.enteredTitle,
        description: this.enteredDescription,
        image: this.enteredImage,
      };
      this.$emit('save-memory', memoryData);
    }
  }
});
</script>