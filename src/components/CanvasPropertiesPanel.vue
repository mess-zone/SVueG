<template>
    <div class="section">
        <h1>Screen</h1>
        <div class="form-group">
            <label for="width">width</label>
            <input id="width" type="number" v-model="width" required min="0" />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <input
                id="height"
                type="number"
                v-model="height"
                required
                min="0"
            />
        </div>
        <div class="form-group">
            <label for="aspectRatio">aspectRatio</label>
            <input
                id="aspectRatio"
                type="number"
                v-model="aspectRatio"
                required
                disabled
            />
        </div>
        <div class="form-group">
            <label for="zoom">zoom (%)</label>
            <input id="zoom" type="number" v-model="zoom" required min="1" />
        </div>
        <div class="form-group">
            <label for="viewportWidth">viewportWidth</label>
            <input
                id="viewportWidth"
                type="number"
                v-model="viewportWidth"
                required
                disabled
            />
        </div>
        <div class="form-group">
            <label for="viewportHeight">viewportHeight</label>
            <input
                id="viewportHeight"
                type="number"
                v-model="viewportHeight"
                required
                disabled
            />
        </div>
        <div class="form-group">
            <label for="viewportX">viewportX</label>
            <input id="viewportX" type="number" v-model="viewportX" required />
        </div>
        <div class="form-group">
            <label for="viewportY">viewportY</label>
            <input id="viewportY" type="number" v-model="viewportY" required />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from "../stores/canvasStore";
import { storeToRefs } from "pinia";

const canvasStore = useCanvasStore();
const {
    width,
    height,
    aspectRatio,
    viewportWidth,
    viewportHeight,
    viewportX,
    viewportY,
    zoom,
} = storeToRefs(canvasStore);
</script>
