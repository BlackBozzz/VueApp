<template>
  <q-layout view="lHh Lpr lFf">
    <MyHeader></MyHeader>

    <q-page-container>
      <HelloWorld />
    </q-page-container>

    <MyFooter></MyFooter>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

</script>
