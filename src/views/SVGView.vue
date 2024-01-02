<template>
    <div class="page-container">
        <svg
            :width="width"
            :height="height"
            xmlns="http://www.w3.org/2000/svg"
            :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
        >
            <!-- Origin coordinate system-->
            <circle cx="0" cy="0" r="2" fill="gray" />

            <Point :cx="pointX" :cy="pointY" :r="10" :fill="`black`"/>

            <Rect
                :x="rectX"
                :y="rectY"
                :rx="rectRoundX"
                :ry="rectRoundY"
                :width="rectWidth"
                :height="rectHeight"
                :stroke="`black`"
                :fill="`transparent`"
                :stroke-width="5"
            />

            <Circle
                :cx="circleX"
                :cy="circleY"
                :r="circleRadius"
                :stroke="`red`"
                :fill="`transparent`"
                :stroke-width="5"
            />
            <Ellipse
                :cx="ellipseCX"
                :cy="ellipseCY"
                :rx="ellipseRadiusX"
                :ry="ellipseRadiusY"
                :stroke="`red`"
                :fill="`transparent`"
                :stroke-width="5"
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

        </svg>
        <div class="panel">
            <div class="section">
                <h1>Screen</h1>
                <div class="form-group">
                    <label for="width">width</label>
                    <input
                        id="width"
                        type="number"
                        v-model="width"
                        required
                        min="0"
                    />
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
            </div>

            <div class="section">
                <h1>Point</h1>
                <div class="form-group">
                    <label for="pointX">x</label>
                    <input id="pointX" type="number" v-model="pointX" required />
                </div>
                <div class="form-group">
                    <label for="pointY">y</label>
                    <input id="pointY" type="number" v-model="pointY" required />
                </div>
            </div>

            <div class="section">
                <h1>Ellipse</h1>
                <div class="form-group">
                    <label for="ellipseCX">x</label>
                    <input id="ellipseCX" type="number" v-model="ellipseCX" required />
                </div>
                <div class="form-group">
                    <label for="ellipseCY">y</label>
                    <input id="ellipseCY" type="number" v-model="ellipseCY" required />
                </div>
                <div class="form-group">
                    <label for="ellipseRadiusX">radius x</label>
                    <input id="ellipseRadiusX" type="number" v-model="ellipseRadiusX" required />
                </div>
                <div class="form-group">
                    <label for="ellipseRadiusY">radius y</label>
                    <input id="ellipseRadiusY" type="number" v-model="ellipseRadiusY" required />
                </div>
            </div>

            <div class="section">
                <h1>Circle</h1>
                <div class="form-group">
                    <label for="circleX">x</label>
                    <input id="circleX" type="number" v-model="circleX" required />
                </div>
                <div class="form-group">
                    <label for="circleY">y</label>
                    <input id="circleY" type="number" v-model="circleY" required />
                </div>
                <div class="form-group">
                    <label for="circleRadius">radius</label>
                    <input id="circleRadius" type="number" v-model="circleRadius" required />
                </div>
            </div>

            <div class="section">
                <h1>Rect</h1>
                <div class="form-group">
                    <label for="rectX">x</label>
                    <input id="rectX" type="number" v-model="rectX" required />
                </div>
                <div class="form-group">
                    <label for="rectY">y</label>
                    <input id="rectY" type="number" v-model="rectY" required />
                </div>
                <div class="form-group">
                    <label for="rectWidth">width</label>
                    <input id="rectWidth" type="number" v-model="rectWidth" required />
                </div>
                <div class="form-group">
                    <label for="rectHeight">height</label>
                    <input id="rectHeight" type="number" v-model="rectHeight" required />
                </div>
                <div class="form-group">
                    <label for="rectRoundX">round x</label>
                    <input id="rectRoundX" type="number" v-model="rectRoundX" required />
                </div>
                <div class="form-group">
                    <label for="rectRoundY">round y</label>
                    <input id="rectRoundY" type="number" v-model="rectRoundY" required />
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import Point from '../components/basicShapes/Point.vue'
import Rect from '../components/basicShapes/Rect.vue'
import Circle from '../components/basicShapes/Circle.vue'
import Ellipse from '../components/basicShapes/Ellipse.vue'

const width = ref(300);
const height = ref(400);
const aspectRatio = computed(() => (width.value / height.value).toFixed(2));

const viewportWidth = computed(() => ((width.value * 1) / zoom.value) * 100);
const viewportHeight = computed(() => ((height.value * 1) / zoom.value) * 100);
const viewportX = ref(0);
const viewportY = ref(0);
const zoom = ref(100);


// point
const pointX = ref(10);
const pointY = ref(20);


// rect
const rectX = ref(0);
const rectY = ref(0);
const rectWidth = ref(100);
const rectHeight = ref(100);
const rectRoundX = ref(0);
const rectRoundY = ref(0);

// circle
const circleX = ref(20);
const circleY = ref(20);
const circleRadius = ref(100);

// Ellipse
const ellipseCX = ref(75);
const ellipseCY = ref(75);
const ellipseRadiusX = ref(20);
const ellipseRadiusY = ref(5);
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
    /* width: 300px; */
    display: flex;
    flex-wrap: wrap;
}

.panel .section {
    border: 1px solid red;
    padding: 20px;
}

.form-group {
    display: flex;
    padding: 20px 0;
    gap: 10px;
    justify-content: space-around;
    align-items: stretch;
}
</style>
