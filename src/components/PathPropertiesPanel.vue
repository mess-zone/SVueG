<template>
    <div class="section">
        <h1>Path</h1> {{ boundingBox }}
        <div class="form-group">
            <label for="positionX">x</label>
            <input
                id="positionX"
                type="number"
                v-model="positionXInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="positionY">y</label>
            <input
                id="positionY"
                type="number"
                v-model="positionYInput"
                required
            />
        </div>
        <div class="form-group">
            <label for="pathRotation">rotation</label>
            <input
                id="pathRotation"
                type="number"
                v-model="pathShape.rotation.angle"
                required
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { NodeShapeI, PathShape } from "@/types";
import { computed, ref } from "vue";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const pathShape = ref(node as PathShape)

const { boundingBox } = useSVGBounding(pathShape)

const positionXInput = computed({
    get() {
        return boundingBox.x
    },
    set(newValue) {
        const delta = newValue - boundingBox.x

        pathShape.value.commands
            .filter(c => ['M', 'L', 'H'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[0] += delta
                }
            })

        pathShape.value.commands
            .filter(c => ['T'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[0] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['Q', 'S'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[0] += delta
                    c.args[2] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['C'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[0] += delta
                    c.args[2] += delta
                    c.args[4] += delta
                }
            })
    }
})

const positionYInput = computed({
    get() {
        return boundingBox.y
    },
    set(newValue) {
        const delta = newValue - boundingBox.y

        pathShape.value.commands
            .filter(c => ['V'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[0] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['M', 'L'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[1] += delta
                }
            })

        pathShape.value.commands
            .filter(c => ['T'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[1] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['Q', 'S'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[1] += delta
                    c.args[3] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['C'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    c.args[1] += delta
                    c.args[3] += delta
                    c.args[5] += delta
                }
            })
    }
})
</script>
