<template>
    <div class="section">
        <h1>Polyline</h1>
        <div class="form-group">
            <label for="lineRotation">rotation</label>
            <input
                id="lineRotation"
                type="number"
                v-model="polylineShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI, PolylineShape } from '@/types';

interface Props {
  node: NodeShapeI
}

const { node } = defineProps<Props>()

const polylineShape = node as PolylineShape

</script>
