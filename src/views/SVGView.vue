<template>
    <div class="page-container">
        <LayersPanel />
        <svg
            :width="width"
            :height="height"
            xmlns="http://www.w3.org/2000/svg"
            :viewBox="`${viewportX} ${viewportY} ${viewportWidth} ${viewportHeight}`"
        >
            <!-- Origin coordinate system-->
            <circle cx="0" cy="0" r="2" fill="gray" />

            <Point :cx="pointX" :cy="pointY" :r="10" :fill="`black`" />

            <component
                v-for="node in nodeList"
                :key="node.id"
                :is="suportedShapes.get(node.tag)"
                :shape="node"
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
                    <input
                        id="pointX"
                        type="number"
                        v-model="pointX"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="pointY">y</label>
                    <input
                        id="pointY"
                        type="number"
                        v-model="pointY"
                        required
                    />
                </div>
            </div>

            <div class="section">
                <h1>Line</h1>
                <div class="form-group">
                    <label for="lineX1">x1</label>
                    <input
                        id="lineX1"
                        type="number"
                        v-model="lineShape.start.x"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="lineY1">y1</label>
                    <input
                        id="lineY1"
                        type="number"
                        v-model="lineShape.start.y"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="lineX2">x2</label>
                    <input
                        id="lineX2"
                        type="number"
                        v-model="lineShape.end.x"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="lineY2">y2</label>
                    <input
                        id="lineY2"
                        type="number"
                        v-model="lineShape.end.y"
                        required
                    />
                </div>
            </div>

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
            </div>

            <div class="section">
                <h1>Circle</h1>
                <div class="form-group">
                    <label for="circleX">x</label>
                    <input
                        id="circleX"
                        type="number"
                        v-model="circleShape.center.x"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="circleY">y</label>
                    <input
                        id="circleY"
                        type="number"
                        v-model="circleShape.center.y"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="circleRadius">radius</label>
                    <input
                        id="circleRadius"
                        type="number"
                        v-model="circleShape.radius"
                        required
                    />
                </div>
            </div>

            <div class="section">
                <h1>Rect</h1>
                <div class="form-group">
                    <label for="rectX">x</label>
                    <input
                        id="rectX"
                        type="number"
                        v-model="rectShape.topLeft.x"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="rectY">y</label>
                    <input
                        id="rectY"
                        type="number"
                        v-model="rectShape.topLeft.y"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="rectWidth">width</label>
                    <input
                        id="rectWidth"
                        type="number"
                        v-model="rectShape.size.x"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="rectHeight">height</label>
                    <input
                        id="rectHeight"
                        type="number"
                        v-model="rectShape.size.y"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="rectRoundX">round x</label>
                    <input
                        id="rectRoundX"
                        type="number"
                        v-model="rectShape.round.x"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="rectRoundY">round y</label>
                    <input
                        id="rectRoundY"
                        type="number"
                        v-model="rectShape.round.y"
                        required
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import Point from "../components/basicShapes/Point.vue";
import Rect from "../components/basicShapes/Rect.vue";
import Circle from "../components/basicShapes/Circle.vue";
import Ellipse from "../components/basicShapes/Ellipse.vue";
import Line from "../components/basicShapes/Line.vue";
import Polyline from "../components/basicShapes/Polyline.vue";
import Polygon from "../components/basicShapes/Polygon.vue";
import Path from "../components/basicShapes/Path.vue";
// import BoundingBox from "../components/BoundingBox.vue";
import { useNodeListStore } from '../stores/nodeListStore'
import { storeToRefs } from 'pinia'
import LayersPanel from '../components/LayersPanel.vue'
import type { CircleShape, EllipseShape, LineShape, RectShape } from "@/types";

const suportedShapes = new Map()
suportedShapes.set('Line', Line)
suportedShapes.set('Polyline', Polyline)
suportedShapes.set('Rect', Rect)
suportedShapes.set('Circle', Circle)
suportedShapes.set('Ellipse', Ellipse)
suportedShapes.set('Polygon', Polygon)
suportedShapes.set('Path', Path)

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

const rectShape: RectShape = {
    id: '23143',
    tag: "Rect",
    topLeft: { x: 30, y: 30 },
    size: { x: 100, y: 50 },
    round: { x: 0, y: 0 },
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
};

const circleShape: CircleShape = {
    id: 'dsfksdfj',
    tag: "Circle",
    center: { x: 170, y: 47 },
    radius: 20,
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
};

const ellipseShape: EllipseShape = {
    id: 'sdkfjsfdf',
    tag: "Ellipse",
    center: { x: 245, y: 47 },
    radius: { x: 20, y: 30 },
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
};

const lineShape: LineShape = {
    id: 'kalsjdasd',
    tag: 'Line',
    start: { x: 25, y: 105 },
    end: { x: 83, y: 151 },
    stroke: "black",
    strokeWidth: 5,
};

const nodeStore =  useNodeListStore()
const { nodeList } = storeToRefs(nodeStore)

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
</style>
