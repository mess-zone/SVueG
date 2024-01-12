<template>
    <input 
        ref="inputRef" 
        type="number" 
        :value="props.modelValue" 
        @blur="blurHandle" 
        @keydown.up="arrowHandle" 
        @keydown.down="arrowHandle"
        @keydown.enter="enterHandle" 
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const inputRef = ref()

function validate(event: Event) {
    if(inputRef.value.validity.valid) {
            emit('update:modelValue', (event.target as HTMLInputElement).value)
    } else {
        inputRef.value.value =  props.modelValue
    }
}

function blurHandle(event: Event) {
    validate(event)
}

function arrowHandle(event: Event) {
    validate(event)
}

function enterHandle(event: Event) {
    validate(event)

    inputRef.value.blur()
}

</script>

<style scoped>

/* input:valid {
    background-color: green;
} */

input:invalid {
    background-color: red;
}

</style>