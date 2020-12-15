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
        <ion-thumbnail slot="start">
          <img src="" alt="" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take a photo
        </ion-button>
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
  IonThumbnail,
  IonIcon
} from "@ionic/vue";
import { CameraPhoto, CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { camera } from 'ionicons/icons';
import Memory from "@/interfaces/Memory";

const { Camera } = Plugins;

export default defineComponent({
  emits: ['save-memory'],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon
  },
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredImage: '',
      previewImageUrl: '',
      camera
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
    },
    async takePhoto() {
      const photo: CameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        quality: 60
      });

      if (photo.webPath) {
        this.previewImageUrl = photo.webPath.toString();
      }
    }
  }
});
</script>