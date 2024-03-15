<template>
    <q-layout>
        <MyHeader :title="'Профиль'"></MyHeader>
        <q-page-container>
            <MyTabs @change-tab="tabUpdate"></MyTabs>
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="profile">
                    <div class="text-h6">profile</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="categories">
                    <div class="text-h6">categories</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="trips">
                    <div class="text-h6">trips</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
            </q-tab-panels>
        </q-page-container>
        <MyFooter></MyFooter>
    </q-layout>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyTabs from '@/components/MyTabs.vue';

import { ref } from 'vue'
const tab = ref('profile')

const tabUpdate = (value) => {
    tab.value = value
}
</script>

<style scoped>

</style>