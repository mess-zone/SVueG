<template>
    <div class="page-container">
        <svg
            width="600"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle :cx="x" :cy="y" r="5" fill="orange" />
        </svg>
        <div class="panel">
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
import { ref } from 'vue';


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
