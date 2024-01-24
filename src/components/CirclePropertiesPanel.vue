<template>
    <div class="section">
        <h1>Circle</h1>
        <div class="form-group">
            <label for="circleX">x</label>
            <PropertyInputNumber
                id="circleX"
                v-model="circleShape.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleY">y</label>
            <PropertyInputNumber
                id="circleY"
                v-model="circleShape.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleWidth">width</label>
            <PropertyInputNumber
                id="circleWidth"
                v-model="circleShape.width"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="circleHeight">height</label>
            <PropertyInputNumber
                id="circleHeight"
                v-model="circleShape.height"
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
import type { NodeShapeI } from "@/types";
import { ref } from "vue";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { CircleShapeObj } from "@/factories/CircleShapeFactory";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const circleShape = ref(node as CircleShapeObj)

</script>
