import { readonly, ref } from "vue";

export function usePan() {
    const viewportX = ref(0);
    const viewportY = ref(0);

    function absolutePan(offsetX: number, offsetY: number, zoomLevel: number) {
        relativePan(offsetX / zoomLevel, offsetY / zoomLevel)
    }

    function relativePan(offsetX: number, offsetY: number) {
        viewportX.value -= offsetX 
        viewportY.value -= offsetY
    }

    function panTo(x: number, y: number) {
        viewportX.value = x 
        viewportY.value = y
    }

    return {
        viewportX: readonly(viewportX),
        viewportY: readonly(viewportY),
        absolutePan,
        relativePan,
        panTo,
    }
}