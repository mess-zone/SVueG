import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Point } from "@/types";
import { inverseLerp, lerp } from "@/helpers/math";
import { useWindowResize } from "@/composables/useWindowResize";
import { useZoom } from "@/composables/useZoom";
import { usePan } from "@/composables/usePan";

export const useCanvasStore = defineStore('canvas', () => {

    const { width, height } = useWindowResize()

    const aspectRatio = computed(() => (width.value / height.value).toFixed(2));

    const { viewportX, viewportY, absolutePan, relativePan, panTo } = usePan()

    const {
        zoomLevel,
        viewportWidth,
        viewportHeight,
        centerZoomTo,
    } = useZoom(width, height, relativePan)

    function toRelative(absolute: Point): Point {
        const percentX = inverseLerp(0, width.value, absolute.x)
        const relativeX = lerp(viewportX.value, viewportWidth.value + viewportX.value, percentX)

        const percentY = inverseLerp(0, height.value, absolute.y)
        const relativeY = lerp(viewportY.value, viewportHeight.value + viewportY.value, percentY)
        return {
            x: relativeX,
            y: relativeY
        }
    }

    function toAbsolute(relative: Point): Point {
        const percentX = inverseLerp(viewportX.value, viewportWidth.value + viewportX.value, relative.x)
        const absoluteX = lerp(0, width.value, percentX)

        const percentY = inverseLerp(viewportY.value, viewportHeight.value + viewportY.value, relative.y)
        const absoluteY = lerp(0, height.value, percentY)

        return { 
            x: absoluteX,
            y: absoluteY,
        }
    }

    return {
        width,
        height,
        aspectRatio,
        viewportWidth,
        viewportHeight,
        viewportX,
        viewportY,
        zoomLevel,
        centerZoomTo,
        absolutePan,
        relativePan,
        panTo,
        toRelative,
        toAbsolute,
    }
})