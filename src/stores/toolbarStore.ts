
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useToobarStore = defineStore('toolbar', () => {

    const toolsMap = new Map()
    toolsMap.set('select', 'select') 
    toolsMap.set('hand', 'hand') 

    const selectedTool = ref('select')

    const cursor = ref('select-tool')

    watch(selectedTool, () => {
        if(selectedTool.value == toolsMap.get('select')) {
            cursor.value = 'select-tool'
        }
        else if(selectedTool.value == toolsMap.get('hand')) {
            cursor.value = 'hand-tool'
        }
    })


    return {
        selectedTool,
        cursor,
    }
})