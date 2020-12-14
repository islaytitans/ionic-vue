<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item>New York</ion-item>
      <ion-item>Canada</ion-item>
      <ion-item>Egypt</ion-item>
      <ion-item>Cambodia</ion-item>
    </ion-list>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonList,
  IonItem,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonList,
    IonItem,
  },
});
</script>
