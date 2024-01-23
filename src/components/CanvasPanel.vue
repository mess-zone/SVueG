<template>
    <svg
        id="svgCanvas"
        ref="svgCanvas"
        :width="width"
        :height="height"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
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

        <circle :cx="mousePointerInfo.x" :cy="mousePointerInfo.y" r="2" fill="magenta" />
        <line :x1="screenTopLeft.x" :y1="screenTopLeft.y" :x2="screenCenter.x" :y2="screenCenter.y" stroke="cyan" stroke-width="2" />
        <circle :cx="screenCenter.x" :cy="screenCenter.y" r="5" fill="cyan" />
        <circle :cx="screenTopLeft.x" :cy="screenTopLeft.y" r="10" fill="cyan" />
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
import { onBeforeUnmount, onMounted, onUnmounted, ref, watch } from 'vue';
import type { Point } from '@/types';
import { useMouse } from '@/composables/useMouse';

const canvasStore = useCanvasStore();
const {
    width,
    height,
    aspectRatio,
    viewportWidth,
    viewportHeight,
    viewportX,
    viewportY,
    zoomLevel,
} = storeToRefs(canvasStore);

const { toRelative, absolutePan } = canvasStore

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


function handleMouseDown(e: MouseEvent) {
    isDragging.value = true
    dragStart.value = {
        x: e.offsetX,
        y: e.offsetY,
    }
}

function handleMouseUp(e: MouseEvent) {
    if(isDragging.value) {
        isDragging.value = false
    }
}

function handleMouseMove(e: MouseEvent) {
    if(isDragging.value) {
        dragEnd.value = {
            x: e.offsetX,
            y: e.offsetY,
        }

        absolutePan(e.movementX, e.movementY, zoomLevel.value)
        // const deltaX = e.offsetX - dragInfo.value.start.x
        // const deltaY = e.offsetY - dragInfo.value.start.y
    }
}

const screenCenter = ref<Point>({
    x: 0,
    y: 0,
})

const screenTopLeft = ref<Point>({
    x: 0,
    y: 0,
})

watch(zoomLevel, updatePoints)
watch(width, updatePoints)
watch(height, updatePoints)

const svgCanvas = ref()
const mousePointerInfo = ref({
    x: 0,
    y: 0,
})

const { 
    cursorPosition,
    isDragging,
    dragStart,
    dragEnd,
} = useMouse(svgCanvas)

watch(cursorPosition, updatePoints)

function updatePoints() {
    screenTopLeft.value = toRelative({ x: 0, y: 0 })
    screenCenter.value = toRelative({ x: width.value/2, y: height.value/2 })
    mousePointerInfo.value = toRelative(cursorPosition.value)
}



</script>
<style scoped>
svg {
    background-color: antiquewhite;
}
</style>
