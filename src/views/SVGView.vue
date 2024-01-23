<template>
    <div class="page-container">
        <CanvasPanel class="canvas-panel"/>
        <Toolbar class="header" />
        <LayersPanel class="layers-panel"/>
        <PropertiesPanel class="properties-panel"/>
    </div>
</template>
<script setup lang="ts">
import CanvasPanel from "@/components/CanvasPanel.vue";
import LayersPanel from '@/components/LayersPanel.vue'
import PropertiesPanel from '@/components/PropertiesPanel.vue'
import Toolbar from "@/components/Toolbar.vue";
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
    top: 52px;
    left: 0;
}
.properties-panel {
    position: absolute;
    z-index: 5;
    top: 52px;
    right: 0;
}

.header {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 52px;
}
</style>
