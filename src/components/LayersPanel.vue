<template>
    <div class="panel">
        <div class="section">
            <h1>Layers</h1>
            <ul class="nodeList">
                <li class="node" v-for="node in nodeList" :key="node.id" >
                    [{{ node.tag }}] {{ node.id }}
                </li>
            </ul>    
        </div>

    </div>
</template>

<script setup lang="ts">
import { useNodeListStore } from '../stores/nodeListStore'
import { storeToRefs } from 'pinia'

const nodeStore =  useNodeListStore()
const { nodeList } = storeToRefs(nodeStore)

</script>

<style scoped>

    .nodeList {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .nodeList .node {
        padding: 5px;
    }

    .nodeList .node:hover {
        background-color: rgb(165, 242, 255);
    }
</style>