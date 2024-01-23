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
            <PropertyInputNumber id="zoom" v-model="zoomLevel" required min="1" step="any" />
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
            <PropertyInputNumber id="viewportX" v-model="viewportXInput" required step="any" />
        </div>
        <div class="form-group">
            <label for="viewportY">viewportY</label>
            <PropertyInputNumber id="viewportY" v-model="viewportYInput" required step="any" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCanvasStore } from "../stores/canvasStore";
import { storeToRefs } from "pinia";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import { computed } from "vue";

const canvasStore = useCanvasStore();
const {
    width,
    height,
    aspectRatio,
    viewportWidth,
    viewportHeight,
    viewportX,
    viewportY,
    zoomLevel,
} = storeToRefs(canvasStore);

const { panTo } = canvasStore

const viewportXInput = computed({
    get() {
        return viewportX.value
    },
    set(newValue) {
        panTo(newValue, viewportY.value)
    }
})

const viewportYInput = computed({
    get() {
        return viewportY.value
    },
    set(newValue) {
        panTo(viewportX.value, newValue)
    }
})
</script>
