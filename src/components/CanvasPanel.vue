<template>
    <div>
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
            :class="cursor"
        >
            <!-- Origin coordinate system-->
            <circle cx="0" cy="0" r="2" fill="gray" />
    
            <component
                v-for="node in nodeList"
                :key="node.id"
                :is="supportedShapes.get(node.tag)"
                :node="node"
            />
    

            <!-- <BoundingBox />  -->
    
            <circle :cx="mousePointerInfo.x" :cy="mousePointerInfo.y" r="2" fill="magenta" />
            <line :x1="screenTopLeft.x" :y1="screenTopLeft.y" :x2="screenCenter.x" :y2="screenCenter.y" stroke="cyan" stroke-width="2" />
            <circle :cx="screenCenter.x" :cy="screenCenter.y" r="5" fill="cyan" />
            <circle :cx="screenTopLeft.x" :cy="screenTopLeft.y" r="10" fill="cyan" />
        </svg>
        <svg 
            id="svgCanvasMarks"             
            ref="svgCanvasMarks"
            :width="width"
            :height="height"
            :viewBox="`0 0 ${width} ${height}`"
            xmlns="http://www.w3.org/2000/svg">

            <HoveredBoundingBox />
            <SelectedBoundingBox />
            <circle :cx="cursorPosition.x" :cy="cursorPosition.y" r="2" fill="green" />

        </svg>
    </div>
</template>

<script setup lang="ts">
import { useNodeListStore } from '../stores/nodeListStore'
import { useCanvasStore } from "../stores/canvasStore";
import { storeToRefs } from "pinia";
import HoveredBoundingBox from "@/components/HoveredBoundingBox.vue";
import SelectedBoundingBox from "@/components/SelectedBoundingBox.vue";
import Rect from "@/components/basicShapes/Rect.vue";
import Circle from "@/components/basicShapes/Circle.vue";
import Ellipse from "@/components/basicShapes/Ellipse.vue";
import Line from "@/components/basicShapes/Line.vue";
import Polyline from "@/components/basicShapes/Polyline.vue";
import Polygon from "@/components/basicShapes/Polygon.vue";
import Path from "@/components/basicShapes/Path.vue";
import { onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
import type { BoundingBoxType, NodeShapeI, Point } from '@/types';
import { useMouse } from '@/composables/useMouse';
import { useToobarStore } from '@/stores/toolbarStore';

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

const toolbarStore = useToobarStore()
const { selectedTool, cursor } = storeToRefs(toolbarStore)

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

const { toRelative, absoluteDeltaPan, centerDeltaZoom } = canvasStore

const nodeStore =  useNodeListStore()
const { nodeList, nodeStack, hoveredNode } = storeToRefs(nodeStore)


const supportedShapes = new Map()
supportedShapes.set('Line', Line)
supportedShapes.set('Polyline', Polyline)
supportedShapes.set('Rect', Rect)
supportedShapes.set('Circle', Circle)
supportedShapes.set('Ellipse', Ellipse)
supportedShapes.set('Polygon', Polygon)
supportedShapes.set('Path', Path)


function handleMouseDown(e: MouseEvent) {
    e.preventDefault()
    isDragging.value = true
    dragStart.value = {
        x: e.offsetX,
        y: e.offsetY,
    }
}

function handleMouseUp(e: MouseEvent) {
    e.preventDefault()
    // if(isDragging.value) {
        isDragging.value = false
    // }
}

function handleMouseMove(e: MouseEvent) {
    e.preventDefault()
    const point = {
        x: e.offsetX,
        y: e.offsetY,
    }

    if(isDragging.value) {
        dragEnd.value = point

        if(selectedTool.value == 'hand') {
            hoveredNode.value = null
            absoluteDeltaPan(e.movementX, e.movementY, zoomLevel.value)
            // const deltaX = e.offsetX - dragInfo.value.start.x
            // const deltaY = e.offsetY - dragInfo.value.start.y
        } 
    } else {
        if(selectedTool.value == 'select') {
            const relativePoint = toRelative(point)
            hoveredNode.value = null
            for(const node of nodeStack.value) {
                if(hasCollision(relativePoint, node.boundingBox)) {
                    hoveredNode.value = node
                    return
                }
            }
        }
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



function updatePoints() {
    screenTopLeft.value = toRelative({ x: 0, y: 0 })
    screenCenter.value = toRelative({ x: width.value/2, y: height.value/2 })
    mousePointerInfo.value = toRelative(cursorPosition.value)
}

function hasCollision(point: Point, box: BoundingBoxType) {
    if( point.x >= box.x && // right of the left edge
        point.x <= box.x + box.width && // left of the right edge
        point.y >= box.y && // bellow the top
        point.y <= box.y + box.height) { // above the bottom
            return true
    }
    return false
}

// handle wheel events

function handleWheel(event: WheelEvent) {
    if(svgCanvas.value.contains(event.target as Node)) {
        centerDeltaZoom(event.deltaY * -0.001)
    }
}

onMounted(() => {
    addEventListener("wheel", handleWheel)
})

onUnmounted(() => {
    // @ts-ignore
    removeEventListener("whell", handleWheel)
})


</script>
<style scoped>
#svgCanvas {
    background-color: antiquewhite;
    position: absolute;
    top: 0;
    left: 0;
}

#svgCanvas.select-tool {
    cursor: default;
}
#svgCanvas.hand-tool {
    cursor: grab;
}

#svgCanvas.hand-tool:active {
    cursor: grabbing;
}


#svgCanvasMarks {
    /* background-color: rgba(137, 43, 226, 0.692); */
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
}
</style>
