<template>
    <div class="page-container">
        <svg
            :width="width"
            :height="height"
            xmlns="http://www.w3.org/2000/svg"
            :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
        >
            <rect x="0" y="0" width="100" height="100" />
            <circle :cx="x" :cy="y" r="5" fill="orange" />
        </svg>
        <div class="panel">
            <div class="form-group">
                <label for="width">width</label>
                <input id="width" type="number" v-model="width" required />
            </div>
            <div class="form-group">
                <label for="height">height</label>
                <input id="height" type="number" v-model="height" required />
            </div>
            <div class="form-group">
                <label for="aspectRatio">aspectRatio</label>
                <input id="aspectRatio" type="number" v-model="aspectRatio" required disabled />
            </div>
            <div class="form-group">
                <label for="viewportWidth">viewportWidth</label>
                <input id="viewportWidth" type="number" v-model="viewportWidth" required />
            </div>
            <div class="form-group">
                <label for="viewportHeight">viewportHeight</label>
                <input id="viewportHeight" type="number" v-model="viewportHeight" required />
            </div>
            <div class="form-group">
                <label for="viewportX">viewportX</label>
                <input id="viewportX" type="number" v-model="viewportX" required />
            </div>
            <div class="form-group">
                <label for="viewportY">viewportY</label>
                <input id="viewportY" type="number" v-model="viewportY" required />
            </div>
            <div class="form-group">
                <label for="x">x</label>
                <input id="x" type="number" v-model="x" required />
            </div>
            <div class="form-group">
                <label for="y">y</label>
                <input id="y" type="number" v-model="y" required />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const width = ref(300)
const height = ref(400)
const aspectRatio = computed(() => (width.value/height.value).toFixed(2))

const viewportWidth = ref(width.value)
const viewportHeight = ref(height.value)
const viewportX = ref(0)
const viewportY = ref(0)

const x = ref(10)
const y = ref(20)

</script>

<style scoped>

.page-container {
    display: flex;
    margin: 20px;
}

svg {
    background-color: antiquewhite;
    border: 1px solid orange;
}

.panel {
    background-color: rgb(238, 238, 238);
    width: 300px;
}

.form-group {
    display: flex;
    padding: 20px;
    gap: 10px;
    justify-content: space-around;
    align-items: stretch;
}

</style>
