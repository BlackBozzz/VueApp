<template>
    <q-layout view="lHh lpr lFf">
        <MyHeader :title="'Профиль'"></MyHeader>
        <q-page-container>
            <MyTabs @change-tab="tabUpdate"></MyTabs>
            <q-tab-panels v-model="tab" animated>
                <ProfileTab name="profile"></ProfileTab>
                <CategoriesTab name="categories"></CategoriesTab>
                <TripsTab name="trips"></TripsTab>
            </q-tab-panels>
        </q-page-container>
        <MyFooter></MyFooter>
    </q-layout>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyTabs from '@/components/MyTabs.vue'
import ProfileTab from '@/pages/ProfileTab.vue'
import CategoriesTab from '@/pages/CategoriesTab.vue'
import TripsTab from './TripsTab.vue'


import { ref } from 'vue'
const tab = ref('profile')

const tabUpdate = (value) => {
    tab.value = value
}
</script>

<style scoped>

</style>