<template>
    <div class="page-container">
        <svg
            :width="width"
            :height="height"
            xmlns="http://www.w3.org/2000/svg"
            :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
        >
            <!-- Origin coordinate system-->
            <circle cx="0" cy="y" r="2" fill="gray" />

            <rect
                x="10"
                y="10"
                width="30"
                height="30"
                stroke="black"
                fill="transparent"
                stroke-width="5"
            />
            <rect
                x="60"
                y="10"
                rx="10"
                ry="10"
                width="30"
                height="30"
                stroke="black"
                fill="transparent"
                stroke-width="5"
            />

            <circle
                cx="25"
                cy="75"
                r="20"
                stroke="red"
                fill="transparent"
                stroke-width="5"
            />
            <ellipse
                cx="75"
                cy="75"
                rx="20"
                ry="5"
                stroke="red"
                fill="transparent"
                stroke-width="5"
            />

            <line
                x1="10"
                x2="50"
                y1="110"
                y2="150"
                stroke="orange"
                stroke-width="5"
            />
            <polyline
                points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
                stroke="orange"
                fill="transparent"
                stroke-width="5"
            />

            <polygon
                points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                stroke="green"
                fill="transparent"
                stroke-width="5"
            />

            <path
                d="M20,230 Q40,205 50,230 T90,230"
                fill="none"
                stroke="blue"
                stroke-width="5"
            />

            <circle :cx="x" :cy="y" r="5" fill="orange" />
        </svg>
        <div class="panel">
            <div class="form-group">
                <label for="width">width</label>
                <input id="width" type="number" v-model="width" required min="0"/>
            </div>
            <div class="form-group">
                <label for="height">height</label>
                <input id="height" type="number" v-model="height" required min="0"/>
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
                <input
                    id="zoom"
                    type="number"
                    v-model="zoom"
                    required
                    min="1"
                />
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
                <input
                    id="viewportX"
                    type="number"
                    v-model="viewportX"
                    required
                />
            </div>
            <div class="form-group">
                <label for="viewportY">viewportY</label>
                <input
                    id="viewportY"
                    type="number"
                    v-model="viewportY"
                    required
                />
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
import { computed, ref } from "vue";

const width = ref(300);
const height = ref(400);
const aspectRatio = computed(() => (width.value / height.value).toFixed(2));

const viewportWidth = computed(() => width.value * 1/zoom.value*100)
const viewportHeight = computed(() => height.value * 1/zoom.value*100)
const viewportX = ref(0);
const viewportY = ref(0);
const zoom = ref(100)

const x = ref(10);
const y = ref(20);
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
