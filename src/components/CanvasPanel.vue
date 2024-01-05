<template>
    <svg
        :width="width"
        :height="height"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
    >
        <!-- Origin coordinate system-->
        <circle cx="0" cy="0" r="2" fill="gray" />
 
        <component
            v-for="node in nodeList"
            :key="node.id"
            :is="supportedShapes.get(node.tag)"
            :shape="node"
        />

        <BoundingBox /> 
    </svg>
</template>

<script setup lang="ts">
import { useNodeListStore } from '../stores/nodeListStore'
import { useCanvasStore } from "../stores/canvasStore";
import { storeToRefs } from "pinia";
import BoundingBox from "@/components/BoundingBox.vue";
import Rect from "@/components/basicShapes/Rect.vue";
import Circle from "@/components/basicShapes/Circle.vue";
import Ellipse from "@/components/basicShapes/Ellipse.vue";
import Line from "@/components/basicShapes/Line.vue";
import Polyline from "@/components/basicShapes/Polyline.vue";
import Polygon from "@/components/basicShapes/Polygon.vue";
import Path from "@/components/basicShapes/Path.vue";

const canvasStore = useCanvasStore();
const {
    width,
    height,
    aspectRatio,
    viewportWidth,
    viewportHeight,
    viewportX,
    viewportY,
    zoom,
} = storeToRefs(canvasStore);

const nodeStore =  useNodeListStore()
const { nodeList } = storeToRefs(nodeStore)


const supportedShapes = new Map()
supportedShapes.set('Line', Line)
supportedShapes.set('Polyline', Polyline)
supportedShapes.set('Rect', Rect)
supportedShapes.set('Circle', Circle)
supportedShapes.set('Ellipse', Ellipse)
supportedShapes.set('Polygon', Polygon)
supportedShapes.set('Path', Path)

</script>
<style>
svg {
    background-color: antiquewhite;
    border: 1px solid orange;
}
</style>
