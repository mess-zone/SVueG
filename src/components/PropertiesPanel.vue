<template>
        <div class="panel">
            <CanvasPropertiesPanel v-if="!selectedNode" />
            <component v-else :is="supportedPanels.get(selectedNode.tag)"  :node="selectedNode" :key="selectedNode.id" ></component>
        </div>
</template>

<script setup lang="ts">
import CanvasPropertiesPanel from "./CanvasPropertiesPanel.vue";
import LinePropertiesPanel from "./LinePropertiesPanel.vue";
import EllipsePropertiesPanel from "./EllipsePropertiesPanel.vue";
import CirclePropertiesPanel from "./CirclePropertiesPanel.vue";
import RectPropertiesPanel from "./RectPropertiesPanel.vue";
import PolygonPropertiesPanel from "./PolygonPropertiesPanel.vue";

import { useNodeListStore } from '../stores/nodeListStore'
import { storeToRefs } from "pinia";

const supportedPanels = new Map()
supportedPanels.set('Line', LinePropertiesPanel)
supportedPanels.set('Rect', RectPropertiesPanel)
supportedPanels.set('Circle', CirclePropertiesPanel)
supportedPanels.set('Ellipse', EllipsePropertiesPanel)
supportedPanels.set('Polygon', PolygonPropertiesPanel)


const nodeStore =  useNodeListStore()
const { selectedNode } = storeToRefs(nodeStore)
</script>

<style scoped>

</style>