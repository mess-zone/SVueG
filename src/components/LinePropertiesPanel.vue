<template>
    <div class="section">
        <h1>Line</h1>
        <div class="form-group">
            <label for="linePositionX">x</label>
            <PropertyInputNumber
                id="linePositionX"
                v-model="lineShape.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="linePositionY">y</label>
            <PropertyInputNumber
                id="linePositionY"
                v-model="lineShape.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="width">width</label>
            <PropertyInputNumber
                id="width"
                v-model="lineShape.width"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <PropertyInputNumber
                id="height"
                v-model="lineShape.height"
                required
                min="0"
                step="any"
            />
        </div>

        <div class="form-group">
            <label for="lineX1">x1</label>
            <PropertyInputNumber
                id="lineX1"
                v-model="lineShape.start.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineY1">y1</label>
            <PropertyInputNumber
                id="lineY1"
                v-model="lineShape.start.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineX2">x2</label>
            <PropertyInputNumber
                id="lineX2"
                v-model="lineShape.end.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineY2">y2</label>
            <PropertyInputNumber
                id="lineY2"
                v-model="lineShape.end.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="lineRotation">rotation</label>
            <PropertyInputNumber
                id="lineRotation"
                v-model="lineShape.rotation.angle"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI } from '@/types';
import { ref } from 'vue';
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { LineShapeObj } from "@/factories/LineShapeFactory";

interface Props {
  node: NodeShapeI
}

const { node } = defineProps<Props>()

const lineShape = ref(node as LineShapeObj)

</script>
