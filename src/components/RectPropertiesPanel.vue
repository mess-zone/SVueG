<template>
    <div class="section">
        <h1>Rect</h1>
        <div class="form-group">
            <label for="rectX">x</label>
            <PropertyInputNumber
                id="rectX"
                v-model="rectShape.topLeft.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectY">y</label>
            <PropertyInputNumber
                id="rectY"
                v-model="rectShape.topLeft.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectWidth">width</label>
            <PropertyInputNumber
                id="rectWidth"
                v-model="rectShape.size.x"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="rectHeight">height</label>
            <PropertyInputNumber
                id="rectHeight"
                v-model="rectShape.size.y"
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
                v-model="rectShape.rotation.angle"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI, RectShape } from "@/types";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const rectShape = node as RectShape
</script>
