import { onMounted, onUnmounted, ref } from "vue"

export function useWindowResize() {

    const width = ref(800)
    const height = ref(600)

    onMounted(() => {
        handleResize()
        addEventListener("resize", handleResize)
    })
    
    onUnmounted(() => {
        // @ts-ignore
        removeEventListener("resize", handleResize)
    })
    
    function handleResize() {
        width.value = window.innerWidth
        height.value = window.innerHeight
    }

    return {
        width,
        height,
    }
}