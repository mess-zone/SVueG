import { readonly, ref } from "vue";

export function usePan() {
    const viewportX = ref(0);
    const viewportY = ref(0);

    // TODO create panTo para ser usado pelo painel lateral de propriedades do canvas

    function absolutePan(offsetX: number, offsetY: number, zoom: number) {
        relativePan(offsetX * (( 1 / zoom) * 100), offsetY * (( 1 / zoom) * 100))
    }

    function relativePan(offsetX: number, offsetY: number) {
        viewportX.value -= offsetX 
        viewportY.value -= offsetY
    }

    return {
        viewportX: readonly(viewportX),
        viewportY: readonly(viewportY),
        absolutePan,
        relativePan,
    }
}