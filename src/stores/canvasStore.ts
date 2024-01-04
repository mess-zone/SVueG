import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCanvasStore = defineStore('canvas', () => {
    const width = ref(300);
    const height = ref(400);
    const aspectRatio = computed(() => (width.value / height.value).toFixed(2));

    const viewportWidth = computed(() => ((width.value * 1) / zoom.value) * 100);
    const viewportHeight = computed(() => ((height.value * 1) / zoom.value) * 100);
    const viewportX = ref(0);
    const viewportY = ref(0);
    const zoom = ref(100);

    return {
        width,
        height,
        aspectRatio,
        viewportWidth,
        viewportHeight,
        viewportX,
        viewportY,
        zoom,
    }
})