<template>
    <div class="section">
        <h1>Polygon</h1>
        <div class="form-group">
            <label for="polygonRotation">rotation</label>
            <input
                id="polygonRotation"
                type="number"
                v-model="polygonShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI, PolygonShape } from "@/types";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const polygonShape = node as PolygonShape
</script>
