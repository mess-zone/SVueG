import { computed, onMounted, onUnmounted, ref, type Ref } from "vue"

export function useZoom(width: Ref<number>, height: Ref<number>, relativePan: (offsetX: number, offsetY: number) => void) {

    // TODO zoom should be a decimal value
    const zoom = ref(100);
    const viewportWidth = computed(() => ((width.value * 1) / zoom.value) * 100);
    const viewportHeight = computed(() => ((height.value * 1) / zoom.value) * 100);

    function doZoom(delta: number) {
        // zoom.value += delta * -0.01
        zoom.value += delta

        // Restrict scale
        zoom.value = Math.min(Math.max(10, zoom.value), 300);
    }

    function handleWheel(event: WheelEvent) {
        const viewportBefore = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }

        // zoom.value += event.deltaY * -0.10
        // zoom.value = Math.min(Math.max(10, zoom.value), 300);
        doZoom(event.deltaY * -0.10)

        const viewportAfter = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }
    
        const viewportOffset = {
            x: (viewportAfter.x - viewportBefore.x) / 2,
            y: (viewportAfter.y - viewportBefore.y) / 2,
        }
    
        relativePan(viewportOffset.x, viewportOffset.y)
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
    }
}