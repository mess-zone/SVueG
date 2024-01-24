<template>
    <div class="section">
        <h1>Circle</h1>
        <div class="form-group">
            <label for="circleX">x</label>
            <PropertyInputNumber
                id="circleX"
                v-model="positionXInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleY">y</label>
            <PropertyInputNumber
                id="circleY"
                v-model="positionYInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleWidth">width</label>
            <PropertyInputNumber
                id="circleWidth"
                v-model="widthInput"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleHeight">height</label>
            <PropertyInputNumber
                id="circleHeight"
                v-model="heightInput"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleRadius">radius</label>
            <PropertyInputNumber
                id="circleRadius"
                v-model="circleShape.radius"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleRotation">rotation</label>
            <PropertyInputNumber
                id="circleRotation"
                v-model="circleShape.rotation.angle"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
// import { useSVGBounding } from "@/composables/useSVGBounding";
import type { NodeShapeI } from "@/types";
import { computed, ref } from "vue";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { CircleShapeObj } from "@/factories/CircleShapeFactory";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const circleShape = ref(node as CircleShapeObj)

// const { boundingBox } = useSVGBounding(circleShape)

// TODO a lógica de alteração dos getters deveria estar dentro da classe circleShapeObj


const positionXInput = computed({
    get() {
        return circleShape.value.boundingBox.x
    },
    set(newValue) {
        circleShape.value.center.x = newValue + circleShape.value.radius
    }
})

const positionYInput = computed({
    get() {
        return  circleShape.value.boundingBox.y
    },
    set(newValue) {
        circleShape.value.center.y = newValue + circleShape.value.radius
    }
})

const widthInput = computed({
    get() {
        return  circleShape.value.boundingBox.width
    },
    set(newValue) {
        circleShape.value.radius = newValue/2
    }
})

const heightInput = computed({
    get() {
        return  circleShape.value.boundingBox.height
    },
    set(newValue) {
        circleShape.value.radius = newValue/2
    }
})
</script>
