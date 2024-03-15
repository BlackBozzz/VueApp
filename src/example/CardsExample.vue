<template>
    <q-layout>
        <q-page-container class="my">
            <MyCard :with-info="true"></MyCard>
            <MyCard></MyCard>
            <MyCarousel></MyCarousel>
        </q-page-container>
    </q-layout>
        
</template>

<script setup>
import MyCard from '@/components/MyCard.vue';
import MyCarousel from '@/components/MyCarousel.vue';



</script>

<style scoped>
.my{
    display: flex;
    flex-direction: column;
    gap: 10px
}
</style>