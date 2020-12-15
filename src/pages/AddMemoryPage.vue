<template>
  <base-layout page-title="Add a memory" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateMemoryForm from "@/components/memories/CreateMemoryForm.vue";
import Memory from "@/interfaces/Memory";

export default defineComponent({
  components: {
    CreateMemoryForm
  },
  methods: {
      saveMemory(memoryData: Memory) {
          this.$store.dispatch('createMemory', memoryData);
          this.$router.replace('/memories');
      }
  }
});
</script>
