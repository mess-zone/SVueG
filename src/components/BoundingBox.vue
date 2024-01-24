<template>
    <g v-if="selectedNode">
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
import { storeToRefs } from "pinia";

import Rect from "./basicShapes/Rect.vue";
import Circle from "./basicShapes/Circle.vue";

import { RectShapeObj, createRectShape } from "@/factories/RectShapeFactory";
import { CircleShapeObj, createCircleShape } from "@/factories/CircleShapeFactory";

import type { ShapeStyle } from "@/types";

const nodeStore = useNodeListStore();
const { selectedNode, selectedBB: selectedBoundingBox, selectedOrigin } =
    storeToRefs(nodeStore);

const rectShape = ref<RectShapeObj>(
    createRectShape({
        topLeft: { x: 0, y: 0 },
        size: { x: 0, y: 0 },
        round: { x: 0, y: 0 },
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
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
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
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
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
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
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
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
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

watchEffect(() => {
    // console.log("BB selectedBoundBox", selectedBoundingBox.value, selectedCenter);

    const shapeStyle = selectedNode.value as unknown as ShapeStyle

    if(shapeStyle) {
        if (selectedBoundingBox.value) {
            const nodeRotationAngle = shapeStyle.rotation.angle || 0;
    
            rectShape.value.x = selectedBoundingBox.value.x
            rectShape.value.y = selectedBoundingBox.value.y

            rectShape.value.width = selectedBoundingBox.value.width
            rectShape.value.height = selectedBoundingBox.value.height
  
            rectShape.value.rotation.origin = selectedOrigin.value
            rectShape.value.rotation.angle = nodeRotationAngle;
    
            topLeft.value.center = {
                x: selectedBoundingBox.value.x,
                y: selectedBoundingBox.value.y,
            };
            topLeft.value.rotation.origin = selectedOrigin.value;
            topLeft.value.rotation.angle = nodeRotationAngle;
    
            topRight.value.center = {
                x: selectedBoundingBox.value.x + selectedBoundingBox.value.width,
                y: selectedBoundingBox.value.y,
            };
            topRight.value.rotation.origin = selectedOrigin.value;
            topRight.value.rotation.angle = nodeRotationAngle;
    
            bottomLeft.value.center = {
                x: selectedBoundingBox.value.x,
                y: selectedBoundingBox.value.y + selectedBoundingBox.value.height,
            };
            bottomLeft.value.rotation.origin = selectedOrigin.value;
            bottomLeft.value.rotation.angle = nodeRotationAngle;
    
            bottomRight.value.center = {
                x: selectedBoundingBox.value.x + selectedBoundingBox.value.width,
                y: selectedBoundingBox.value.y + selectedBoundingBox.value.height,
            };
            bottomRight.value.rotation.origin = selectedOrigin.value;
            bottomRight.value.rotation.angle = nodeRotationAngle;
        }
    }

});
</script>
