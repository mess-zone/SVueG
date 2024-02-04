<template>
    <g v-if="selectedNode"
        :transform="`rotate(${nodeRotationAngle})`"
        style="transform-box: fill-box; transform-origin: 50% 50%"
    >
        <Rect :node="rectShape" />
        <Circle :node="topLeft" />
        <Circle :node="topRight" />
        <Circle :node="bottomLeft" />
        <Circle :node="bottomRight" />
    </g>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { useNodeListStore } from "../stores/nodeListStore";
import { useCanvasStore } from "@/stores/canvasStore";
import { storeToRefs } from "pinia";

import Rect from "./basicShapes/Rect.vue";
import Circle from "./basicShapes/Circle.vue";

import { RectShapeObj, createRectShape } from "@/factories/RectShapeFactory";
import { CircleShapeObj, createCircleShape } from "@/factories/CircleShapeFactory";

const canvasStore = useCanvasStore()
const { toAbsolute } = canvasStore

const nodeStore = useNodeListStore();
const { selectedNode } =
    storeToRefs(nodeStore);

const rectShape = ref<RectShapeObj>(
    createRectShape({
        topLeft: { x: 0, y: 0 },
        size: { x: 0, y: 0 },
        round: { x: 0, y: 0 },
        rotation: 0,
        stroke: "blue",
        fill: "transparent",
        strokeWidth: 2,
    })
);

const topLeft = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: 0,
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

const topRight = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: 0,
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

const bottomLeft = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: 0,
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

const bottomRight = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: 0,
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

const nodeRotationAngle = ref(0)

watchEffect(() => {
    if(selectedNode.value) {
        const bb = selectedNode.value.boundingBox
    
        nodeRotationAngle.value = selectedNode.value.rotation;

        // TODO doesnot work
        // const vectors = getBoundingPoly(selectedNode.value.boundingBox, selectedNode.value.rotation)
        // console.log(vectors.map(relativePoint => toAbsolute(relativePoint)))


        const tl = toAbsolute({
            x: bb.x,
            y: bb.y,
        })
        topLeft.value.center = tl

        const tr = toAbsolute({
            x: bb.x + bb.width,
            y: bb.y,
        })
        topRight.value.center = tr
        const bl = toAbsolute({
            x: bb.x,
            y: bb.y + bb.height,
        })
        bottomLeft.value.center = bl

        const br = toAbsolute({
            x: bb.x + bb.width,
            y: bb.y + bb.height,
        })
        bottomRight.value.center = br

        rectShape.value.x =  tl.x
        rectShape.value.y = tl.y

        rectShape.value.width =  br.x - tl.x
        rectShape.value.height = br.y - tl.y
    }

});
</script>
