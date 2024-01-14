<template>
    <svg
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
import { computed, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
import type { Point } from '@/types';

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

const { toRelative, toAbsolute } = canvasStore

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
    if(dragInfo.value.isDragging) {
        dragInfo.value.isDragging = false

        // const deltaX = e.offsetX - dragInfo.value.start.x
        // const deltaY = e.offsetY - dragInfo.value.start.y
        // viewportX.value -= deltaX
        // viewportY.value -= deltaY
        // console.log('U', e.offsetX, e.offsetY, deltaX, deltaY)

        // dragInfo.value.start = {
        //     x: 0,
        //     y: 0,
        // }
        // dragInfo.value.end = {
        //     x: 0,
        //     y: 0,
        // }
    }
}

function handleMouseMove(e: MouseEvent) {
    if(dragInfo.value.isDragging) {
        // console.log('M', e.offsetX, e.offsetY, e.movementX, e.movementY)
        dragInfo.value.end = {
            x: e.offsetX,
            y: e.offsetY,
        }

        // const deltaX = e.offsetX - dragInfo.value.start.x
        // const deltaY = e.offsetY - dragInfo.value.start.y
        viewportX.value -= e.movementX * (( 1 / zoom.value) * 100)
        viewportY.value -= e.movementY * (( 1 / zoom.value) * 100)
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

function handleWheel(event: WheelEvent) {
    const rotationOrigin = toRelative({ x: width.value/2, y: height.value/2 })
    // screenCenter.value = toRelative({ x: width.value/2, y: height.value/2 })
    console.log('rotatioOrigin', rotationOrigin)
    // mousePointerInfo.value = toRelative({ x: event.offsetX, y: event.offsetY })

    // event.preventDefault();
    // console.log(event.offsetX, event.offsetY)
    zoom.value += event.deltaY * -0.01

    // Restrict scale
    zoom.value = Math.min(Math.max(1, zoom.value), 300);

    screenTopLeft.value = toRelative({ x: 0, y: 0 })
    screenCenter.value = toRelative({ x: width.value/2, y: height.value/2 })
    mousePointerInfo.value = toRelative({ x: event.offsetX, y: event.offsetY })



    // mousePointerInfo.value = {
    //     x: (event.offsetX  * ( 1 / zoom.value) * 100) + viewportX.value,
    //     y: (event.offsetY * ( 1 / zoom.value) * 100) + viewportY.value,
    // }
    // mousePointerInfo.value = {
    //     x: (width.value/2  * ( 1 / zoom.value) * 100) + viewportX.value,
    //     y: (height.value/2 * ( 1 / zoom.value) * 100) + viewportY.value,
    // }

    // viewportX.value = -( (width.value / 2)  * 100/zoom.value ) + 25
    // viewportY.value = -( (height.value / 2)  * 100/zoom.value ) + 105

    viewportX.value = screenTopLeft.value.x
    viewportY.value = screenTopLeft.value.y
}

onMounted(() => {
    addEventListener("wheel", handleWheel)
})

onUnmounted(() => {
    // @ts-ignore
    removeEventListener("whell", handleWheel)
})


const svgCanvas = ref()
const mousePointerInfo = ref({
    x: 0,
    y: 0,
})

function canvasMouseMove(event: MouseEvent) {
    screenTopLeft.value = toRelative({ x: 0, y: 0 })
    screenCenter.value = toRelative({ x: width.value/2, y: height.value/2 })
    mousePointerInfo.value = toRelative({ x: event.offsetX, y: event.offsetY })

    // const absolutePos = toAbsolute({ x: 170, y: 47 })
    // console.log(absolutePos)
    // console.log('move', e.offsetX, e.offsetY, mousePointerInfo.value.x, mousePointerInfo.value.y)
}

onMounted(() => {
    svgCanvas.value.addEventListener('mousemove', canvasMouseMove)
})

onBeforeUnmount(() => {
    svgCanvas.value.removeEventListener('mousemove', canvasMouseMove)
})

</script>
<style>
svg {
    background-color: antiquewhite;
}
</style>
