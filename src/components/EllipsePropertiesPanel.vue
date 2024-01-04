<template>
    <div class="section">
        <h1>Ellipse</h1>
        <div class="form-group">
            <label for="ellipseCX">x</label>
            <input
                id="ellipseCX"
                type="number"
                v-model="node.center.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseCY">y</label>
            <input
                id="ellipseCY"
                type="number"
                v-model="node.center.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusX">radius x</label>
            <input
                id="ellipseRadiusX"
                type="number"
                v-model="node.radius.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusY">radius y</label>
            <input
                id="ellipseRadiusY"
                type="number"
                v-model="node.radius.y"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { EllipseShape } from "@/types";

interface Props {
    node: EllipseShape;
}

const { node } = defineProps<Props>();
</script>
