<template>
  <q-layout>
    <MyHeader title="Главная"></MyHeader>
    <q-page-container class="flex flex-center">
      <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px">
    </q-page-container>
    <MyFooter></MyFooter>
  </q-layout>
</template>
  
<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

</script>

<style>

</style>