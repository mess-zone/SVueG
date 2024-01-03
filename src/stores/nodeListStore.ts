import type { LayoutNodeType } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNodeListStore = defineStore('nodeList', () => {
    const nodeList = ref<LayoutNodeType[]>([])

    const addNode = (node: LayoutNodeType) => {
        nodeList.value.push(node);
    }

    return {
        nodeList,
        addNode
    }
})