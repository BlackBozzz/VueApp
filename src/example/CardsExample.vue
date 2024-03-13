<template>
    <q-layout>
        <q-page-container class="my">
            <MyCard :with-info="true"></MyCard>
            <MyCard></MyCard>
        </q-page-container>
    </q-layout>
        
</template>

<script setup>
import MyCard from '@/components/MyCard.vue';


</script>

<style scoped>
.my{
    display: flex;
    flex-direction: column;
    gap: 10px
}
</style>