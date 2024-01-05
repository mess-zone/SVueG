<template>
        <div class="panel">
            <CanvasPropertiesPanel v-if="!selectedNode" />
            <component v-else :is="suportedPanels.get(selectedNode.tag)"  :node="selectedNode" :key="selectedNode.id" ></component>
        </div>
</template>

<script setup lang="ts">
import CanvasPropertiesPanel from "./CanvasPropertiesPanel.vue";
import LinePropertiesPanel from "./LinePropertiesPanel.vue";
import EllipsePropertiesPanel from "./EllipsePropertiesPanel.vue";
import CirclePropertiesPanel from "./CirclePropertiesPanel.vue";
import RectPropertiesPanel from "./RectPropertiesPanel.vue";

import { useNodeListStore } from '../stores/nodeListStore'
import { storeToRefs } from "pinia";

const suportedPanels = new Map()
suportedPanels.set('Line', LinePropertiesPanel)
suportedPanels.set('Rect', RectPropertiesPanel)
suportedPanels.set('Circle', CirclePropertiesPanel)
suportedPanels.set('Ellipse', EllipsePropertiesPanel)


const nodeStore =  useNodeListStore()
const { selectedNode } = storeToRefs(nodeStore)
</script>

<style scoped>

</style>