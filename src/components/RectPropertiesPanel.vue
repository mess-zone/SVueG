<template>
    <div class="section">
        <h1>Rect</h1>
        <div class="form-group">
            <label for="rectX">x {{ rectShape.x }}</label>
            <PropertyInputNumber
                id="rectX"
                v-model="topPosition"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectY">y {{ rectShape.y }}</label>
            <PropertyInputNumber
                id="rectY"
                v-model="leftPosition"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectWidth">width</label>
            <PropertyInputNumber
                id="rectWidth"
                v-model="rectShape.width"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectHeight">height</label>
            <PropertyInputNumber
                id="rectHeight"
                v-model="rectShape.height"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectRoundX">round x</label>
            <PropertyInputNumber
                id="rectRoundX"
                v-model="rectShape.round.x"
                required
                min="0"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectRoundY">round y</label>
            <PropertyInputNumber
                id="rectRoundY"
                v-model="rectShape.round.y"
                required
                min="0"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectRotation">rotation</label>
            <PropertyInputNumber
                id="rectRotation"
                v-model="rectShape.rotation"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI } from "@/types";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { RectShapeObj } from "@/factories/RectShapeFactory";
import { computed } from "vue";
import { getBoundingPoly, rotateAroundOrigin } from "@/helpers/math";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const rectShape = node as RectShapeObj

// TODO refactor
const topPosition = computed({
    get() { 
        const vectors = getBoundingPoly(rectShape.boundingBox, rectShape.rotation)
        return vectors[0].x
    },
    set(newValue) {
        const shapeCenter = {
            x: rectShape.boundingBox.width/2 + rectShape.boundingBox.x,
            y: rectShape.boundingBox.height/2 + rectShape.boundingBox.y,
        }

        // invert rotation to get new boundingBox position
        const tl = rotateAroundOrigin({
            x: newValue,
            y: leftPosition.value,
        }, shapeCenter, -rectShape.rotation)

        rectShape.x = tl.x
    }
})

// TODO refactor
const leftPosition = computed({
    get() { 
        const vectors = getBoundingPoly(rectShape.boundingBox, rectShape.rotation)
        return vectors[0].y
    },
    set(newValue) {
        const shapeCenter = {
            x: rectShape.boundingBox.width/2 + rectShape.boundingBox.x,
            y: rectShape.boundingBox.height/2 + rectShape.boundingBox.y,
        }

        // invert rotation to get new boundingBox position
        const tl = rotateAroundOrigin({
            x: topPosition.value,
            y: newValue,
        }, shapeCenter, -rectShape.rotation)

        rectShape.y = tl.y
    }
})
</script>
