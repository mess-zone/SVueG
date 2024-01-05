<template>
    <div class="section">
        <h1>Line</h1>
        <div class="form-group">
            <label for="lineX1">x1</label>
            <input
                id="lineX1"
                type="number"
                v-model="lineShape.start.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineY1">y1</label>
            <input
                id="lineY1"
                type="number"
                v-model="lineShape.start.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineX2">x2</label>
            <input
                id="lineX2"
                type="number"
                v-model="lineShape.end.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="lineY2">y2</label>
            <input
                id="lineY2"
                type="number"
                v-model="lineShape.end.y"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { LineShape, NodeShapeI } from '@/types';

interface Props {
  node: NodeShapeI
}

const { node } = defineProps<Props>()

const lineShape = node as LineShape

</script>
