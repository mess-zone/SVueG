<template>
    <div class="section">
        <h1>Path</h1>
        <div class="form-group">
            <label for="positionX">x</label>
            <PropertyInputNumber
                id="positionX"
                v-model="positionXInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="positionY">y</label>
            <PropertyInputNumber
                id="positionY"
                v-model="positionYInput"
                required
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="width">width</label>
            <PropertyInputNumber
                id="width"
                v-model="widthInput"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="height">height</label>
            <PropertyInputNumber
                id="height"
                v-model="heightInput"
                required
                min="1"
                step="any"
            />
        </div>
        <div class="form-group">
            <label for="pathRotation">rotation</label>
            <PropertyInputNumber
                id="pathRotation"
                type="number"
                v-model="pathShape.rotation.angle"
                required
                step="any"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { NodeShapeI } from "@/types";
import { computed, ref } from "vue";
import PropertyInputNumber from "@/components/PropertyInputNumber.vue";
import type { PathShapeObj } from "@/factories/PathShapeFactory";

interface Props {
    node: NodeShapeI;
}

const { node } = defineProps<Props>();
const pathShape = ref(node as PathShapeObj)

const { boundingBox } = useSVGBounding(pathShape)

const positionXInput = computed({
    get() {
        return pathShape.value.x
    },
    set(newValue) {
        const delta = newValue - boundingBox.x

        pathShape.value.commands
            .filter(c => ['M', 'L', 'H'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                }
            })

        pathShape.value.commands
            .filter(c => ['T'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['Q', 'S'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['C'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                    // @ts-ignore
                    c.args[4] += delta
                }
            })
    }
})

const positionYInput = computed({
    get() {
        return pathShape.value.y
    },
    set(newValue) {
        const delta = newValue - boundingBox.y

        pathShape.value.commands
            .filter(c => ['V'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['M', 'L'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                }
            })

        pathShape.value.commands
            .filter(c => ['T'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['Q', 'S'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['C'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                    // @ts-ignore
                    c.args[5] += delta
                }
            })
    }
})

const widthInput = computed({
    get() {
        return boundingBox.width
    },
    set(newValue) {
        const delta = (newValue - boundingBox.width) / boundingBox.width
        pathShape.value.commands
            .filter(c => ['M', 'm', 'L', 'l', 'H', 'h'].includes(c.letter))
            .forEach(c => { 
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += c.args[0] * delta 
                }
            })

        pathShape.value.commands
            .filter(c => ['T', 't'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['Q', 'q', 'S', 's'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['C', 'c'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                    // @ts-ignore
                    c.args[4] += delta
                }
            })
    }
})

const heightInput = computed({
    get() {
        return boundingBox.height
    },
    set(newValue) {
        const delta = (newValue - boundingBox.height) / boundingBox.height
        pathShape.value.commands
            .filter(c => ['V', 'v'].includes(c.letter))
            .forEach(c => { 
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += c.args[1] * delta 
                }
            })
        pathShape.value.commands
            .filter(c => ['M', 'm', 'L', 'l'].includes(c.letter))
            .forEach(c => { 
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += c.args[1] * delta 
                }
            })


        pathShape.value.commands
            .filter(c => ['T', 't'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['Q', 'q', 'S', 's'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                }
            })
        pathShape.value.commands
            .filter(c => ['C', 'c'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                    // @ts-ignore
                    c.args[5] += delta
                }
            })

    }
})
</script>
