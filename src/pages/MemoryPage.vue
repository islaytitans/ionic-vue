<template>
    <base-layout :page-title="memory?.title" page-default-back-link="/memories">
        <h2 v-if="!memory">Could not find your memory</h2>
        <memory-overview :memory="memory" ></memory-overview>
    </base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Memory from "@/interfaces/Memory";
import MemoryOverview from "@/components/memories/MemoryOverview.vue";

export default defineComponent({
    data() {
        return {
            memoryId: this.$route.params.id
        };
    },
    computed: {
        memory(): Memory {
            const id = Number(this.memoryId);
            return this.$store.getters.memory(id);
        }
    },
    components: {
        MemoryOverview
    }
});
</script>