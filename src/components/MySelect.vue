<template>
    <q-select 
        clearable 
        rounded
        outlined 
        color="deep-purple" 
        label-color="deep=purple"
        v-model="model" 
        :options="options" 
        label="Label" 
        transition-show="jump-up"
        transition-hide="jump-up"
    />
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    options: {
        type: Array,
        require: true
    }
})
const model = ref(null)
</script>

<style scoped>
.q-field.row.no-wrap.items-start.q-field--outlined.q-select.q-field--auto-height.q-select--without-input.q-select--without-chips.q-select--single.q-field--rounded.q-field--labeled {
    border: 1px solid teal;
    border-radius: 50px;
}
</style>