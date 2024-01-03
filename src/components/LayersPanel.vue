<template>
    <div class="panel">
        <div class="section">
            <h1>Layers</h1>
            <ul class="nodeList">
                <li class="node" v-for="node in nodeList" :key="node.id" :class="{ 'node--selected': isSelected(node) }" @click="selectNode(node)">
                    [{{ node.tag }}] {{ node.id }}
                </li>
            </ul>    
        </div>

    </div>
</template>

<script setup lang="ts">
import type { LayoutNodeType } from '@/types';
import { useNodeListStore } from '../stores/nodeListStore'
import { storeToRefs } from 'pinia'

const nodeStore =  useNodeListStore()
const { nodeList, selectedNode } = storeToRefs(nodeStore)
const { selectNode } = nodeStore

function isSelected(node: LayoutNodeType) {
    if(selectedNode.value) {
        if(selectedNode.value.id === node.id) {
            return true
        }
    }

    return false
}

</script>

<style scoped>

    .nodeList {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .node {
        padding: 5px;
    }

    .node:hover {
        background-color: rgb(165, 242, 255);
    }

    .node.node--selected {
        border: 1px solid blue;
    }
</style>