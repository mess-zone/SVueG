import { readonly, ref } from "vue";

export function usePan() {
    const viewportX = ref(0);
    const viewportY = ref(0);

    function absoluteDeltaPan(offsetX: number, offsetY: number, zoomLevel: number) {
        deltaPan(offsetX / zoomLevel, offsetY / zoomLevel)
    }

    function deltaPan(offsetX: number, offsetY: number) {
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
        absoluteDeltaPan,
        deltaPan,
        panTo,
    }
}