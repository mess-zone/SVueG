<template>
    <div class="section">
        <h1>Rect</h1>
        <div class="form-group">
            <label for="rectX">x</label>
            <input
                id="rectX"
                type="number"
                v-model="node.topLeft.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectY">y</label>
            <input
                id="rectY"
                type="number"
                v-model="node.topLeft.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectWidth">width</label>
            <input
                id="rectWidth"
                type="number"
                v-model="node.size.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectHeight">height</label>
            <input
                id="rectHeight"
                type="number"
                v-model="node.size.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectRoundX">round x</label>
            <input
                id="rectRoundX"
                type="number"
                v-model="node.round.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="rectRoundY">round y</label>
            <input
                id="rectRoundY"
                type="number"
                v-model="node.round.y"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { RectShape } from "@/types";

interface Props {
    node: RectShape;
}

const { node } = defineProps<Props>();
</script>
