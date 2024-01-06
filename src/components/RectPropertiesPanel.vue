<template>
    <div class="section">
        <h1>Rect</h1>
        <div class="form-group">
            <label for="rectX">x</label>
            <input
                id="rectX"
                type="number"
                v-model="rectShape.topLeft.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectY">y</label>
            <input
                id="rectY"
                type="number"
                v-model="rectShape.topLeft.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectWidth">width</label>
            <input
                id="rectWidth"
                type="number"
                v-model="rectShape.size.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectHeight">height</label>
            <input
                id="rectHeight"
                type="number"
                v-model="rectShape.size.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectRoundX">round x</label>
            <input
                id="rectRoundX"
                type="number"
                v-model="rectShape.round.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectRoundY">round y</label>
            <input
                id="rectRoundY"
                type="number"
                v-model="rectShape.round.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectRotation">rotation</label>
            <input
                id="rectRotation"
                type="number"
                v-model="rectShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI, RectShape } from "@/types";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const rectShape = node as RectShape
</script>
