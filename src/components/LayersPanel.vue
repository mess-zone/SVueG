<template>
    <div class="panel">
        <div class="section">
            <h1>Layers</h1>
            <ul class="nodeList">
                <li class="node" v-for="node in nodeStack" :key="node.id" :class="{ 'node--selected': isSelected(node), 'node--hovered': isHovered(node) }" @click="selectNode(node)" @mouseover="handleMouseOver(node)" @mouseout="handleMouseOut">
                    [{{ node.tag }}] {{ node.id }}
                </li>
            </ul>    
        </div>

    </div>
</template>

<script setup lang="ts">
import type { NodeShapeI } from '@/types';
import { useNodeListStore } from '../stores/nodeListStore'
import { storeToRefs } from 'pinia'

const nodeStore =  useNodeListStore()
const { nodeStack, hoveredNode } = storeToRefs(nodeStore)
const { selectNode, isSelected, isHovered } = nodeStore

function clearHover() {
    hoveredNode.value = null
}

function hoverNode(node: NodeShapeI) {
    // console.log('over', node)
    hoveredNode.value = node
}

function handleMouseOver(node: NodeShapeI) {
    hoverNode(node)
}

function handleMouseOut() {
    clearHover()
}

</script>

<style scoped>

    .nodeList {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .node {
        border: 1px solid transparent;
        padding: 5px;
    }

    .node:hover,
    .node.node--hovered {
        border-color: blue;
    }

    .node.node--selected {
        background-color: rgb(165, 242, 255);
    }
</style>