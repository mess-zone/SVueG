<template>
    <svg
        :width="width"
        :height="height"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
    >
        <!-- Origin coordinate system-->
        <circle cx="0" cy="0" r="2" fill="gray" />

        <Point :cx="pointX" :cy="pointY" :r="10" :fill="`black`" />
 
        <component
            v-for="node in nodeList"
            :key="node.id"
            :is="suportedShapes.get(node.tag)"
            :shape="node"
        />

        <BoundingBox /> 
    </svg>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNodeListStore } from '../stores/nodeListStore'
import { useCanvasStore } from "../stores/canvasStore";
import { storeToRefs } from "pinia";
import Point from "@/components/basicShapes/Point.vue";
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

// point
const pointX = ref(10);
const pointY = ref(20);

const suportedShapes = new Map()
suportedShapes.set('Line', Line)
suportedShapes.set('Polyline', Polyline)
suportedShapes.set('Rect', Rect)
suportedShapes.set('Circle', Circle)
suportedShapes.set('Ellipse', Ellipse)
suportedShapes.set('Polygon', Polygon)
suportedShapes.set('Path', Path)

</script>
