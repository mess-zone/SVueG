<template>
    <div class="section">
        <h1>Path</h1>
        <div class="form-group">
            <label for="positionX">x</label>
            <PropertyInputNumber
                id="positionX"
                v-model="pathShape.x"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="positionY">y</label>
            <PropertyInputNumber
                id="positionY"
                v-model="pathShape.y"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="width">width</label>
            <PropertyInputNumber
                id="width"
                v-model="pathShape.width"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <PropertyInputNumber
                id="height"
                v-model="pathShape.height"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="pathRotation">rotation</label>
            <PropertyInputNumber
                id="pathRotation"
                type="number"
                v-model="pathShape.rotation"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { NodeShapeI } from "@/types";
import { ref } from "vue";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { PathShapeObj } from "@/factories/PathShapeFactory";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const pathShape = ref(node as PathShapeObj)

</script>
