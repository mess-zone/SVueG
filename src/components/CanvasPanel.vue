<template>
    <svg
        :width="width"
        :height="height"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseLeave"
    >
        <!-- Origin coordinate system-->
        <circle cx="0" cy="0" r="2" fill="gray" />
 
        <component
            v-for="node in nodeList"
            :key="node.id"
            :is="supportedShapes.get(node.tag)"
            :node="node"
        />

        <BoundingBox /> 

        <line  
            v-if="dragInfo.isDragging"       
            :x1="dragInfo.start.x"
            :y1="dragInfo.start.y"
            :x2="dragInfo.end.x"
            :y2="dragInfo.end.y"
            stroke="magenta"
            stroke-width="2"
        />
    </svg>
    {{dragInfo}}
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
import { ref } from 'vue';

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




const handTool = ref(true)

const dragInfo = ref({
    isDragging: false,
    start: {
        x: 0,
        y: 0,
    },
    end: {
        x: 0,
        y: 0,
    },
})



function handleMouseDown(e: MouseEvent) {
    dragInfo.value.isDragging = true
    dragInfo.value.start = {
        x: e.offsetX,
        y: e.offsetY,
    }
    // console.log('D', e.offsetX, e.offsetY, e.movementX, e.movementY)
}

function handleMouseUp(e: MouseEvent) {
    dragInfo.value.isDragging = false
    // console.log('U', e.offsetX, e.offsetY, e.movementX, e.movementY)
    // dragInfo.value.start = {
    //     x: 0,
    //     y: 0,
    // }
    // dragInfo.value.end = {
    //     x: 0,
    //     y: 0,
    // }
}

function handleMouseMove(e: MouseEvent) {
    // console.log('M', e.offsetX, e.offsetY, e.movementX, e.movementY)
    dragInfo.value.end = {
        x: e.offsetX,
        y: e.offsetY,
    }
}

function handleMouseLeave(e: MouseEvent) {
    dragInfo.value.isDragging = false
    // console.log('L', e.offsetX, e.offsetY, e.movementX, e.movementY)
    // dragInfo.value.start = {
    //     x: 0,
    //     y: 0,
    // }
    // dragInfo.value.end = {
    //     x: 0,
    //     y: 0,
    // }
}

</script>
<style>
svg {
    background-color: antiquewhite;
    border: 1px solid orange;
}
</style>
