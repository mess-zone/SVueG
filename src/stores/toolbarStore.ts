import { defineStore } from "pinia";
import { ref } from "vue";

export const useToobarStore = defineStore('toolbar', () => {

    const selectedTool = ref('select')



    return {
        selectedTool,
    }
})