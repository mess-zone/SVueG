<template>
    <g v-if="selectedNode">
        <Rect :shape="rectShape" />
        <Circle :shape="topLeft" />
        <Circle :shape="topRight" />
        <Circle :shape="bottomLeft" />
        <Circle :shape="bottomRight" />
    </g>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { useNodeListStore } from "../stores/nodeListStore";
import { storeToRefs } from "pinia";

import Rect from "./basicShapes/Rect.vue";
import Circle from "./basicShapes/Circle.vue";

import { createRectShape } from "@/factories/RectShapeFactory";
import { createCircleShape } from "@/factories/CircleShapeFactory";

import type { RectShape, CircleShape } from "@/types";
import type { ShapeStyle } from "@/types";

const nodeStore = useNodeListStore();
const { selectedNode, selectedBB: selectedBoundingBox, selectedCenter } =
    storeToRefs(nodeStore);

const rectShape = ref<RectShape>(
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

const topLeft = ref<CircleShape>(
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

const topRight = ref<CircleShape>(
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

const bottomLeft = ref<CircleShape>(
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

const bottomRight = ref<CircleShape>(
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
    
            const origin = {
                x: shapeStyle.rotation.origin.x == 'auto' ? selectedCenter.value.x : shapeStyle.rotation.origin.x,
                y: shapeStyle.rotation.origin.y == 'auto' ? selectedCenter.value.y : shapeStyle.rotation.origin.y,
            }
    
            rectShape.value.topLeft = {
                x: selectedBoundingBox.value.x,
                y: selectedBoundingBox.value.y,
            };
            rectShape.value.size = {
                x: selectedBoundingBox.value.width,
                y: selectedBoundingBox.value.height,
            };
    
            rectShape.value.rotation.origin = origin
            rectShape.value.rotation.angle = nodeRotationAngle;
    
            topLeft.value.center = {
                x: selectedBoundingBox.value.x,
                y: selectedBoundingBox.value.y,
            };
            topLeft.value.rotation.origin = origin;
            topLeft.value.rotation.angle = nodeRotationAngle;
    
            topRight.value.center = {
                x: selectedBoundingBox.value.x + selectedBoundingBox.value.width,
                y: selectedBoundingBox.value.y,
            };
            topRight.value.rotation.origin = origin;
            topRight.value.rotation.angle = nodeRotationAngle;
    
            bottomLeft.value.center = {
                x: selectedBoundingBox.value.x,
                y: selectedBoundingBox.value.y + selectedBoundingBox.value.height,
            };
            bottomLeft.value.rotation.origin = origin;
            bottomLeft.value.rotation.angle = nodeRotationAngle;
    
            bottomRight.value.center = {
                x: selectedBoundingBox.value.x + selectedBoundingBox.value.width,
                y: selectedBoundingBox.value.y + selectedBoundingBox.value.height,
            };
            bottomRight.value.rotation.origin = origin;
            bottomRight.value.rotation.angle = nodeRotationAngle;
        }
    }

});
</script>
