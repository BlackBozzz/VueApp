<template>
  <q-layout view="lHh Lpr lFf" style="padding: 10px;">
    <nav style="margin: 10px;">
      <router-link to="/ComponentsExample">ComponentsExample</router-link> |
      <router-link to="/CardsExample">CardsExample</router-link> | 
      <router-link to="/ItemsExample">ItemsExample</router-link>
    </nav>
    <router-view/>
  </q-layout>
</template>

<script setup>
import ComponentsExample from '@/example/ComponentsExample.vue'
import CardsExample from '@/example/CardsExample.vue'
import ItemsExample from '@/example/ItemsExample.vue'

</script>

<style>
* {
  box-sizing: border-box;
}
</style>
