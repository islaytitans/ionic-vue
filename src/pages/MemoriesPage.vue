<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>All Memories</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>New York</ion-item>
                <ion-item>Canada</ion-item>
                <ion-item>Egypt</ion-item>
                <ion-item>Cambodia</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem
    }
});
</script>
