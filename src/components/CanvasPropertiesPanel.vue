<template>
    <div class="section">
        <h1>Screen</h1>
        <div class="form-group">
            <label for="width">width</label>
            <PropertyInputNumber id="width" v-model="width" required min="1" step="any" disabled />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <PropertyInputNumber id="height" v-model="height" required min="1" step="any" disabled />
        </div>
        <div class="form-group">
            <label for="aspectRatio">aspectRatio</label>
            <PropertyInputNumber id="aspectRatio" v-model="aspectRatio" required disabled step="any" />
        </div>
        <div class="form-group">
            <label for="zoom">zoom (%)</label>
            <PropertyInputNumber id="zoom" v-model="zoom" required min="1" step="any" />
        </div>
        <div class="form-group">
            <label for="viewportWidth">viewportWidth</label>
            <PropertyInputNumber id="viewportWidth" v-model="viewportWidth" required disabled step="any" />
        </div>
        <div class="form-group">
            <label for="viewportHeight">viewportHeight</label>
            <PropertyInputNumber id="viewportHeight" v-model="viewportHeight" required disabled step="any" />
        </div>
        <div class="form-group">
            <label for="viewportX">viewportX</label>
            <PropertyInputNumber id="viewportX" v-model="viewportX" required step="any" />
        </div>
        <div class="form-group">
            <label for="viewportY">viewportY</label>
            <PropertyInputNumber id="viewportY" v-model="viewportY" required step="any" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from "../stores/canvasStore";
import { storeToRefs } from "pinia";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";

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
