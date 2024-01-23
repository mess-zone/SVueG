import { ref } from "vue";

export function usePan() {

    const viewportX = ref(0);
    const viewportY = ref(0);

    function absolutePan(offsetX: number, offsetY: number, zoom: number) {
        relativePan(offsetX * (( 1 / zoom) * 100), offsetY * (( 1 / zoom) * 100))
    }

    function relativePan(offsetX: number, offsetY: number) {
        viewportX.value -= offsetX 
        viewportY.value -= offsetY
    }

    return {
        viewportX,
        viewportY,
        absolutePan,
        relativePan,
    }
}