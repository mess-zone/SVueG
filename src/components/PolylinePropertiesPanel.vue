<template>
    <div class="section">
        <h1>Polyline</h1>
        <div class="form-group">
            <label for="positionX">x</label>
            <input
                id="positionX"
                type="number"
                v-model="positionXInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="positionY">y</label>
            <input
                id="positionY"
                type="number"
                v-model="positionYInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineRotation">rotation</label>
            <input
                id="lineRotation"
                type="number"
                v-model="polylineShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { NodeShapeI, PolylineShape } from '@/types';
import { computed, ref } from 'vue';

interface Props {
  node: NodeShapeI
}

const { node } = defineProps<Props>()

const polylineShape = ref(node as PolylineShape)

const { boundingBox } = useSVGBounding(polylineShape)

const positionXInput = computed({
    get() {
        return boundingBox.x
    },
    set(newValue) {
        const delta = newValue - boundingBox.x
        polylineShape.value.points.forEach(p => { p.x += delta })
    }
})

const positionYInput = computed({
    get() {
        return boundingBox.y
    },
    set(newValue) {
        const delta = newValue - boundingBox.y
        polylineShape.value.points.forEach(p => { p.y += delta })
    }
})

</script>
