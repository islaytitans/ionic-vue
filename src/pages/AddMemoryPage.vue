<template>
  <base-layout page-title="Add a memory" page-default-back-link="/memories">
    <create-memory-form></create-memory-form>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateMemoryForm from "@/components/memories/CreateMemoryForm.vue"
export default defineComponent({
  components: {
    CreateMemoryForm
  }
});
</script>
