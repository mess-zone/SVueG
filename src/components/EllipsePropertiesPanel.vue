<template>
    <div class="section">
        <h1>Ellipse</h1>
        <div class="form-group">
            <label for="ellipseX">x</label>
            <PropertyInputNumber
                id="ellipseX"
                v-model="ellipseShape.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseY">y</label>
            <PropertyInputNumber
                id="ellipseY"
                v-model="ellipseShape.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseWidth">width</label>
            <PropertyInputNumber
                id="ellipseWidth"
                v-model="ellipseShape.width"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="ellipseHeight">height</label>
            <PropertyInputNumber
                id="ellipseHeight"
                v-model="ellipseShape.height"
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
// import { useSVGBounding } from "@/composables/useSVGBounding";
import type { NodeShapeI } from "@/types";
import { ref } from "vue";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { EllipseShapeObj } from "@/factories/EllipseShapeFactory";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();

const ellipseShape = ref(node as EllipseShapeObj)
</script>
