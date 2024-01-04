<template>
    <div class="section">
        <h1>Circle</h1>
        <div class="form-group">
            <label for="circleX">x</label>
            <input
                id="circleX"
                type="number"
                v-model="node.center.x"
                required
            />
        </div>
        <div class="form-group">
            <label for="circleY">y</label>
            <input
                id="circleY"
                type="number"
                v-model="node.center.y"
                required
            />
        </div>
        <div class="form-group">
            <label for="circleRadius">radius</label>
            <input
                id="circleRadius"
                type="number"
                v-model="node.radius"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { CircleShape } from "@/types";

interface Props {
    node: CircleShape;
}

const { node } = defineProps<Props>();
</script>
