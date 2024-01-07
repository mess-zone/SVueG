<template>
    <div class="section">
        <h1>Path</h1>
        <div class="form-group">
            <label for="pathRotation">rotation</label>
            <input
                id="pathRotation"
                type="number"
                v-model="pathShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI, PathShape } from "@/types";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const pathShape = node as PathShape
</script>
