<template>
    <q-layout>
        <MyHeader :title="'Расходы'"></MyHeader>
        <q-page-container class="q-mx-sm">
            <MySearch class="q-my-md"></MySearch>
            <q-list class="list">
                <MyItem></MyItem>
                <MyItem></MyItem>
                <MyItem></MyItem>
            </q-list>
            <MyButton class="q-my-lg q-mx-sm" :type="'create'" :label="'Создать'" @btn-click="btnCreate"></MyButton>
        </q-page-container>
        <MyFooter></MyFooter>
    </q-layout>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import MySearch from '@/components/MySearch.vue';
import MyItem from '@/components/MyItem.vue';
import MyButton from '@/components/MyButton.vue';

const btnCreate = () => {
    
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    margin-top: 10px;
}
</style>