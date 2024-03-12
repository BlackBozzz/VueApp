<template>
    <q-layout>
        <q-page-container>
            <MyInput :type="'placeholder'"></MyInput>
            <MyInput></MyInput>
            <MyInput :type="'filled'"></MyInput>
            <MyInput :type="'borderless'"></MyInput>
            <MyButton></MyButton>
            <MySearch></MySearch>
            <MyToggle></MyToggle>
            <MySelect :options="options"></MySelect>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import MyInput from '@/components/MyInput.vue';
import MyButton from '@/components/MyButton.vue';
import MySearch from '@/components/MySearch.vue';
import MyToggle from '@/components/MyToggle.vue';
import MySelect from '@/components/MySelect.vue';


const options = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

</script>

<style scoped>

</style>