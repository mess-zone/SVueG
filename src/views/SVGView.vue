<template>
    <div class="page-container">
        <CanvasPanel class="canvas-panel"/>
        <LayersPanel class="layers-panel"/>
        <PropertiesPanel class="properties-panel"/>
    </div>
</template>
<script setup lang="ts">
import CanvasPanel from "@/components/CanvasPanel.vue";
import LayersPanel from '@/components/LayersPanel.vue'
import PropertiesPanel from '@/components/PropertiesPanel.vue'
</script>

<style scoped>
.page-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.canvas-panel {
    position: absolute;
    z-index: 1;
}
.layers-panel {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
}
.properties-panel {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
}
</style>
