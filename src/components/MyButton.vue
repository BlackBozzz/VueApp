<template>
    <q-btn v-if="type=='close'"
        round
        unelevated
        color="teal-5"
        text-color="white"
        icon="close"
    />
    <q-btn v-else-if="type=='edit'"
        rounded
        unelevated
        color="deep-purple-1"
        text-color="deep-purple-10"
        icon="edit"
    />
    <q-btn v-else-if="type=='create'"
        no-caps 
        rounded 
        unelevated
        color="teal-1"
        text-color="deep-purple"
        icon="add"
        :label="label" 
    />
    <q-btn v-else-if="type=='cancel'"
        no-caps 
        rounded 
        unelevated
        outline
        color="white"
        text-color="deep-purple"
        :label="label" 
    />
    <q-btn v-else
        no-caps 
        rounded 
        unelevated
        color="teal"
        :label="label" 
        :icon="iconName"
    />
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        require: false
    },
    iconName: {
        type: String,
        require: false
    },
    label: {
        type: String,
        require: false
    },
})
</script>

<style scoped>

</style>