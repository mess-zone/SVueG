<template>
    <div class="section">
        <h1>Circle</h1> {{ circleShape.center }}
        <div class="form-group">
            <label for="circleX">x</label>
            <input
                id="circleX"
                type="number"
                v-model="positionXInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="circleY">y</label>
            <input
                id="circleY"
                type="number"
                v-model="positionYInput"
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
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { CircleShape, NodeShapeI } from "@/types";
import { computed, ref } from "vue";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const circleShape = ref(node as CircleShape)

const { boundingBox } = useSVGBounding(circleShape)

const positionXInput = computed({
    get() {
        return boundingBox.x
    },
    set(newValue) {
        circleShape.value.center.x = newValue + circleShape.value.radius
    }
})

const positionYInput = computed({
    get() {
        return boundingBox.y
    },
    set(newValue) {
        circleShape.value.center.y = newValue + circleShape.value.radius
    }
})
</script>
