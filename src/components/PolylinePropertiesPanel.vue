<template>
    <div class="section">
        <h1>Polyline</h1>
        <div class="form-group">
            <label for="positionX">x</label>
            <PropertyInputNumber
                id="positionX"
                v-model="polylineShape.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="positionY">y</label>
            <PropertyInputNumber
                id="positionY"
                v-model="polylineShape.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="width">width</label>
            <PropertyInputNumber
                id="width"
                v-model="polylineShape.width"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <PropertyInputNumber
                id="height"
                v-model="polylineShape.height"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineRotation">rotation</label>
            <PropertyInputNumber
                id="lineRotation"
                type="number"
                v-model="polylineShape.rotation.angle"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI } from '@/types';
import { ref } from 'vue';
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { PolylineShapeObj } from "@/factories/PolylineShapeFactory";

interface Props {
  node: NodeShapeI
}

const { node } = defineProps<Props>()

const polylineShape = ref(node as PolylineShapeObj)

</script>
