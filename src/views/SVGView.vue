<template>
    <div class="page-container">
        <LayersPanel />
        <CanvasPanel />
        <PropertiesPanel />
    </div>
</template>
<script setup lang="ts">
import CanvasPanel from "@/components/CanvasPanel.vue";
import LayersPanel from '@/components/LayersPanel.vue'
import PropertiesPanel from '@/components/PropertiesPanel.vue'
</script>

<style scoped>
.page-container {
    display: flex;
    margin: 20px;
}
</style>
