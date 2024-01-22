import { onMounted, onUnmounted, ref, type Ref } from "vue"

export function useMouse(target: Ref<HTMLElement>) {
    const el = ref(target)

    const cursorPosition = ref({
        x: -1,
        y: -1,
    })

    function mouseMove(event: MouseEvent) {
        cursorPosition.value = { x: event.offsetX, y: event.offsetY }
    }

    onMounted(() => {
        el.value.addEventListener('mousemove', mouseMove)
    })

    onUnmounted(() => {
        el.value.removeEventListener('mousemove', mouseMove)
    })

    return {
        el,
        cursorPosition,
    }
}