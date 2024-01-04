<template>
        <div class="panel">
            <CanvasPropertiesPanel v-if="!selectedNode" />
            <LinePropertiesPanel v-else-if="selectedNode.tag === 'Line'" :node="(selectedNode as LineShape)"/>
            <EllipsePropertiesPanel v-else-if="selectedNode.tag === 'Ellipse'" :node="(selectedNode as EllipseShape)"/>
            <CirclePropertiesPanel v-else-if="selectedNode.tag === 'Circle'" :node="(selectedNode as CircleShape)"/>
            <RectPropertiesPanel v-else-if="selectedNode.tag === 'Rect'" :node="(selectedNode as RectShape)"/>
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
import type { RectShape, CircleShape, EllipseShape, LineShape } from "@/types";

const nodeStore =  useNodeListStore()
const { selectedNode } = storeToRefs(nodeStore)
</script>

<style scoped>

</style>