<template>
    <div class="section">
        <h1>Polygon</h1>
        <div class="form-group">
            <label for="positionX">x</label>
            <PropertyInputNumber
                id="positionX"
                v-model="polygonShape.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="positionY">y</label>
            <PropertyInputNumber
                id="positionY"
                v-model="polygonShape.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="width">width</label>
            <PropertyInputNumber
                id="width"
                v-model="polygonShape.width"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <PropertyInputNumber
                id="height"
                v-model="polygonShape.height"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="polygonRotation">rotation</label>
            <PropertyInputNumber
                id="polygonRotation"
                v-model="polygonShape.rotation"
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
import type { PolygonShapeObj } from "@/factories/PolygonShapeFactory";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const polygonShape = ref(node as PolygonShapeObj)

</script>
