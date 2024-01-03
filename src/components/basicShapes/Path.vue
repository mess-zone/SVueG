<template>
    <path
        :data-node-id="shape.id"
        :d="stringCommands"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
    />
</template>
<script setup lang="ts">
import { type PathShape } from '@/types'
import { computed } from 'vue';

interface Props {
    shape: PathShape,
}

const { shape } = defineProps<Props>();

const stringCommands = computed(() => {
    return shape.commands.map(command => `${command.letter} ${command.args?.join(' ') || '' }`).join(' ')
})
</script>
