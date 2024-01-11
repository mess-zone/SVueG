<template>
    <div class="section">
        <h1>Ellipse</h1>
        <div class="form-group">
            <label for="ellipseX">x</label>
            <input
                id="ellipseX"
                type="number"
                v-model="positionXInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseY">y</label>
            <input
                id="ellipseY"
                type="number"
                v-model="positionYInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseWidth">width</label>
            <input
                id="ellipseWidth"
                type="number"
                v-model="widthInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseHeight">height</label>
            <input
                id="ellipseHeight"
                type="number"
                v-model="heightInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusX">radius x</label>
            <input
                id="ellipseRadiusX"
                type="number"
                v-model="ellipseShape.radius.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusY">radius y</label>
            <input
                id="ellipseRadiusY"
                type="number"
                v-model="ellipseShape.radius.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRotation">rotation</label>
            <input
                id="ellipseRotation"
                type="number"
                v-model="ellipseShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { EllipseShape, NodeShapeI } from "@/types";
import { computed, ref } from "vue";

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
