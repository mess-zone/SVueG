<template>
    <div class="section">
        <h1>Ellipse</h1>
        <div class="form-group">
            <label for="ellipseCX">x</label>
            <input
                id="ellipseCX"
                type="number"
                v-model="ellipseShape.center.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseCY">y</label>
            <input
                id="ellipseCY"
                type="number"
                v-model="ellipseShape.center.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusX">radius x</label>
            <input
                id="ellipseRadiusX"
                type="number"
                v-model="ellipseShape.radius.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRadiusY">radius y</label>
            <input
                id="ellipseRadiusY"
                type="number"
                v-model="ellipseShape.radius.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="ellipseRotation">rotation</label>
            <input
                id="ellipseRotation"
                type="number"
                v-model="ellipseShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { EllipseShape, NodeShapeI } from "@/types";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();

const ellipseShape = node as EllipseShape
</script>
