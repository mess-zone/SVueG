<template>
    <g v-if="hoveredNode">
        <Polygon :node="polygonShape" />
    </g>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useNodeListStore } from "../stores/nodeListStore";
import { useCanvasStore } from "@/stores/canvasStore";
import { storeToRefs } from "pinia";
import Polygon from "./basicShapes/Polygon.vue";
import { getBoundingPoly } from '../helpers/math.js'
import { PolygonShapeObj, createPolygonShape } from "@/factories/PolygonShapeFactory";

const canvasStore = useCanvasStore()
const { toAbsolute } = canvasStore

const nodeStore = useNodeListStore();
const { hoveredNode } = storeToRefs(nodeStore);

const polygonShape = ref<PolygonShapeObj>(
    createPolygonShape({
        points: [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
        ],
        rotation: 0,
        stroke: "transparent",
        strokeWidth: 0,
        fill: "#00ffff54",
    })
)

watchEffect(() => {
    if(hoveredNode.value) {
        const points = getBoundingPoly(hoveredNode.value.boundingBox, hoveredNode.value.rotation)

        polygonShape.value.points = points.map(relativePoint => toAbsolute(relativePoint))
    }
});
</script>
