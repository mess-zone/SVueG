<template>
    <div class="section">
        <h1>Circle</h1>
        <div class="form-group">
            <label for="circleX">x</label>
            <input
                id="circleX"
                type="number"
                v-model="circleShape.center.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="circleY">y</label>
            <input
                id="circleY"
                type="number"
                v-model="circleShape.center.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="circleRadius">radius</label>
            <input
                id="circleRadius"
                type="number"
                v-model="circleShape.radius"
                required
            />
        </div>
        <div class="form-group">
            <label for="circleRotation">rotation</label>
            <input
                id="circleRotation"
                type="number"
                v-model="circleShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { CircleShape, NodeShapeI } from "@/types";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const circleShape = node as CircleShape
</script>
