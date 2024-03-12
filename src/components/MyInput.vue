<template>
    <q-input v-if="type=='placeholder'"
        color="deep-purple" 
        label-color="deep-purple" 
        rounded
        outlined 
        v-model="text"
        label="Label" 
        placeholder="Placeholder"
    />
    <q-input v-else-if="type=='filled'"
        color="deep-purple" 
        label-color="deep-purple" 
        bg-color="teal-1"
        rounded
        outlined 
        v-model="text"
        stack-label
        label="Label" 
    />
    <q-input v-else-if="type=='borderless'"
        color="deep-purple" 
        label-color="deep-purple" 
        v-model="text"
        label="Label" 
    />
    <q-input v-else
        color="deep-purple" 
        label-color="deep-purple" 
        rounded
        outlined 
        v-model="text"
        label="Label" 
    />
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    type: {
        type: String,
        require: true
    }
})
const text = ref('')

</script>

<style scoped>
.q-field.row.no-wrap.items-start.q-field--outlined.q-input.q-field--rounded.q-field--labeled ::before {
    border: 1px solid teal;
    border-radius: 50px;
}

.q-field.row.no-wrap.items-start.q-field--outlined.q-input.q-field--rounded.q-field--float.q-field--labeled ::before {
    border: 0.1px solid teal;
    border-radius: 50px;
}

.q-field.row.no-wrap.items-start.q-field--standard.q-input.q-field--labeled ::before {
    border-bottom: 1px solid #673ab7;
}
</style>