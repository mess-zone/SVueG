<template>
    <div class="section">
        <h1>Ellipse</h1>
        <div class="form-group">
            <label for="ellipseX">x</label>
            <PropertyInputNumber
                id="ellipseX"
                v-model="positionXInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseY">y</label>
            <PropertyInputNumber
                id="ellipseY"
                v-model="positionYInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseWidth">width</label>
            <PropertyInputNumber
                id="ellipseWidth"
                v-model="widthInput"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseHeight">height</label>
            <PropertyInputNumber
                id="ellipseHeight"
                v-model="heightInput"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusX">radius x</label>
            <PropertyInputNumber
                id="ellipseRadiusX"
                v-model="ellipseShape.radius.x"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusY">radius y</label>
            <PropertyInputNumber
                id="ellipseRadiusY"
                v-model="ellipseShape.radius.y"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseRotation">rotation</label>
            <PropertyInputNumber
                id="ellipseRotation"
                v-model="ellipseShape.rotation.angle"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { EllipseShape, NodeShapeI } from "@/types";
import { computed, ref } from "vue";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();

const ellipseShape = ref(node as EllipseShape)

const { boundingBox } = useSVGBounding(ellipseShape)

const positionXInput = computed({
    get() {
        return boundingBox.x
    },
    set(newValue) {
        ellipseShape.value.center.x = newValue + ellipseShape.value.radius.x
    }
})

const positionYInput = computed({
    get() {
        return boundingBox.y
    },
    set(newValue) {
        ellipseShape.value.center.y = newValue + ellipseShape.value.radius.y
    }
})

const widthInput = computed({
    get() {
        return boundingBox.width
    },
    set(newValue) {
        ellipseShape.value.radius.x = newValue/2
    }
})

const heightInput = computed({
    get() {
        return boundingBox.height
    },
    set(newValue) {
        ellipseShape.value.radius.y = newValue/2
    }
})
</script>
