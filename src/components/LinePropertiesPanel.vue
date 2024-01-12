<template>
    <div class="section">
        <h1>Line</h1>
        <div class="form-group">
            <label for="linePositionX">x</label>
            <PropertyInputNumber
                id="linePositionX"
                v-model="positionXInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="linePositionY">y</label>
            <PropertyInputNumber
                id="linePositionY"
                v-model="positionYInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="width">width</label>
            <PropertyInputNumber
                id="width"
                v-model="widthInput"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <PropertyInputNumber
                id="height"
                v-model="heightInput"
                required
                min="1"
                step="any"
            />
        </div>

        <div class="form-group">
            <label for="lineX1">x1</label>
            <PropertyInputNumber
                id="lineX1"
                v-model="lineShape.start.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineY1">y1</label>
            <PropertyInputNumber
                id="lineY1"
                v-model="lineShape.start.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineX2">x2</label>
            <PropertyInputNumber
                id="lineX2"
                v-model="lineShape.end.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineY2">y2</label>
            <PropertyInputNumber
                id="lineY2"
                v-model="lineShape.end.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineRotation">rotation</label>
            <PropertyInputNumber
                id="lineRotation"
                v-model="lineShape.rotation.angle"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { LineShape, NodeShapeI } from '@/types';
import { computed, ref } from 'vue';
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";

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
