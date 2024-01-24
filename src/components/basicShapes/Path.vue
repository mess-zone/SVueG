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
import type { PathShapeObj } from "@/factories/PathShapeFactory";
import { type NodeShapeI } from '@/types'
import { computed, ref } from 'vue';

interface Props {
    node: NodeShapeI,
}

const { node } = defineProps<Props>();

const shape = ref(node as PathShapeObj);

const stringCommands = computed(() => {
    return shape.value.commands.map(command => `${command.letter} ${command.args?.join(' ') || '' }`).join(' ')
})

const { origin } = useSVGBounding(shape)
</script>
