<template>
    <div class="section">
        <h1>Line</h1>
        <div class="form-group">
            <label for="linePositionX">x</label>
            <input
                id="linePositionX"
                type="number"
                v-model="positionXInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="linePositionY">y</label>
            <input
                id="linePositionY"
                type="number"
                v-model="positionYInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="width">width</label>
            <input
                id="width"
                type="number"
                v-model="widthInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <input
                id="height"
                type="number"
                v-model="heightInput"
                required
            />
        </div>

        <div class="form-group">
            <label for="lineX1">x1</label>
            <input
                id="lineX1"
                type="number"
                v-model="lineShape.start.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineY1">y1</label>
            <input
                id="lineY1"
                type="number"
                v-model="lineShape.start.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineX2">x2</label>
            <input
                id="lineX2"
                type="number"
                v-model="lineShape.end.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineY2">y2</label>
            <input
                id="lineY2"
                type="number"
                v-model="lineShape.end.y"
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
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { LineShape, NodeShapeI } from '@/types';
import { computed, ref } from 'vue';

interface Props {
  node: NodeShapeI
}

const { node } = defineProps<Props>()

const lineShape = ref(node as LineShape)

const { boundingBox } = useSVGBounding(lineShape)

const positionXInput = computed({
    get() {
        return boundingBox.x
    },
    set(newValue) {
        lineShape.value.start.x = newValue
        lineShape.value.end.x = newValue + boundingBox.width
    }
})

const positionYInput = computed({
    get() {
        return boundingBox.y
    },
    set(newValue) {
        lineShape.value.start.y = newValue
        lineShape.value.end.y = newValue + boundingBox.height
    }
})

const widthInput = computed({
    get() {
        return boundingBox.width
    },
    set(newValue) {
        lineShape.value.end.x = boundingBox.x + newValue
    }
})

const heightInput = computed({
    get() {
        return boundingBox.height
    },
    set(newValue) {
        lineShape.value.end.y = boundingBox.y + newValue
    }
})

</script>
