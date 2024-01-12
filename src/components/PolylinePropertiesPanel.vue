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

const widthInput = computed({
    get() {
        return boundingBox.width
    },
    set(newValue) {
        const delta = (newValue - boundingBox.width) / boundingBox.width
        polylineShape.value.points.forEach(p => { p.x += p.x * delta })
        polylineShape.value.points[0].x = boundingBox.x
    }
})

const heightInput = computed({
    get() {
        return boundingBox.height
    },
    set(newValue) {
        const delta = (newValue - boundingBox.height) / boundingBox.height
        polylineShape.value.points.forEach(p => { p.y += p.y * delta })
        polylineShape.value.points[0].y = boundingBox.y
    }
})

</script>
