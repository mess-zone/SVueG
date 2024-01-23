import { computed, readonly, ref, type Ref } from "vue"

export function useZoom(width: Ref<number>, height: Ref<number>, deltaPan: (offsetX: number, offsetY: number) => void) {

    const zoomLevel = ref(1);
    const viewportWidth = computed(() => width.value / zoomLevel.value);
    const viewportHeight = computed(() => height.value / zoomLevel.value);

    function zoomTo(percent: number) {
        zoomLevel.value = percent

        // Restrict scale
        zoomLevel.value = Math.min(Math.max(0.1, zoomLevel.value), 3);
    }

    function deltaZoom(delta: number) {
        zoomLevel.value += delta

        // Restrict scale
        zoomLevel.value = Math.min(Math.max(0.1, zoomLevel.value), 3);
    }

    function centerZoomTo(percent: number) {
        const viewportBefore = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }

        zoomTo(percent)

        const viewportAfter = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }
    
        const viewportOffset = {
            x: (viewportAfter.x - viewportBefore.x) / 2,
            y: (viewportAfter.y - viewportBefore.y) / 2,
        }
    
        deltaPan(viewportOffset.x, viewportOffset.y)
    }

    function centerDeltaZoom(delta: number) {
        const viewportBefore = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }

        deltaZoom(delta)

        const viewportAfter = {
            x: viewportWidth.value,
            y: viewportHeight.value
        }
    
        const viewportOffset = {
            x: (viewportAfter.x - viewportBefore.x) / 2,
            y: (viewportAfter.y - viewportBefore.y) / 2,
        }
    
        deltaPan(viewportOffset.x, viewportOffset.y)
    }

    // function handleWheel(event: WheelEvent) {
    //     // console.log(event.target, document.querySelector('#svgCanvas')?.contains(event.target as Node))
    //     if(document.querySelector('#svgCanvas')?.contains(event.target as Node)) {
    //         centerDeltaZoom(event.deltaY * -0.001)
    //     }
    // }
    
    // onMounted(() => {
    //     addEventListener("wheel", handleWheel)
    // })
    
    // onUnmounted(() => {
    //     // @ts-ignore
    //     removeEventListener("whell", handleWheel)
    // })

    return {
        zoomLevel: readonly(zoomLevel),
        viewportWidth,
        viewportHeight,
        centerZoomTo,
        centerDeltaZoom,
    }
}