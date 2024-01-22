import { computed, onMounted, onUnmounted, ref, type Ref } from "vue"

export function useZoom(width: Ref<number>, height: Ref<number>) {

    const zoom = ref(100);
    const viewportWidth = computed(() => ((width.value * 1) / zoom.value) * 100);
    const viewportHeight = computed(() => ((height.value * 1) / zoom.value) * 100);
    const viewportX = ref(0);
    const viewportY = ref(0);

    function handleWheel(event: WheelEvent) {
        const viewportBefore = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }
    
        // zoom.value += event.deltaY * -0.01
        zoom.value += event.deltaY * -0.10
    
        // Restrict scale
        zoom.value = Math.min(Math.max(10, zoom.value), 300);
    
        const viewportAfter = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }
    
        const viewportMargin = {
            x: (viewportAfter.x - viewportBefore.x) / 2,
            y: (viewportAfter.y - viewportBefore.y) / 2,
        }
    
        viewportX.value -= viewportMargin.x
        viewportY.value -= viewportMargin.y
    
    }
    
    onMounted(() => {
        addEventListener("wheel", handleWheel)
    })
    
    onUnmounted(() => {
        // @ts-ignore
        removeEventListener("whell", handleWheel)
    })

    return {
        zoom,
        viewportWidth,
        viewportHeight,
        viewportX,
        viewportY,
    }
}