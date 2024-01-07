<template>
    <path
        :data-node-id="shape.id"
        :d="stringCommands"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation.angle}, ${origin.x}, ${origin.y})`"
    />
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import { type NodeShapeI, type PathShape } from '@/types'
import { computed, ref } from 'vue';

interface Props {
    shape: PathShape,
}

const { shape } = defineProps<Props>();

const stringCommands = computed(() => {
    return shape.commands.map(command => `${command.letter} ${command.args?.join(' ') || '' }`).join(' ')
})

const node = ref(shape as NodeShapeI);

const { origin } = useSVGBounding(node)
</script>
