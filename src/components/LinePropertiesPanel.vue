<template>
    <div class="section">
        <h1>Line</h1>
        <div class="form-group">
            <label for="linePositionX">x</label>
            <input
                id="linePositionX"
                type="number"
                v-model="positionInput.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="linePositionY">y</label>
            <input
                id="linePositionY"
                type="number"
                v-model="positionInput.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineX1">x1</label>
            <input
                id="lineX1"
                type="number"
                v-model="startInput.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineY1">y1</label>
            <input
                id="lineY1"
                type="number"
                v-model="startInput.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineX2">x2</label>
            <input
                id="lineX2"
                type="number"
                v-model="endInput.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineY2">y2</label>
            <input
                id="lineY2"
                type="number"
                v-model="endInput.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineRotation">rotation</label>
            <input
                id="lineRotation"
                type="number"
                v-model="lineShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { LineShape, NodeShapeI } from '@/types';
import { ref, watch, watchEffect } from 'vue';

interface Props {
  node: NodeShapeI
}

const { node } = defineProps<Props>()

const lineShape = node as LineShape

const positionInput = ref({
    x: lineShape.position.x,
    y: lineShape.position.y
})

const startInput = ref({
    x: lineShape.start.x,
    y: lineShape.start.y,
})

const endInput = ref({
    x: lineShape.end.x,
    y: lineShape.end.y,
})

watchEffect(() => {
    lineShape.start.x = startInput.value.x + positionInput.value.x 
    lineShape.start.y = startInput.value.y + positionInput.value.y

    lineShape.end.x = endInput.value.x + positionInput.value.x 
    lineShape.end.y = endInput.value.y + positionInput.value.y
})

</script>
