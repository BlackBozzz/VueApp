<template>
    <q-tabs
        v-model="tab"
        no-caps
        class="bg-teal-1"
        active-color="deep-purple"
        indicator-color="deep-purple"
    >
        <q-tab :ripple="false" name="profile" label="Профиль" />
        <q-tab :ripple="false" name="categories" label="Категории" />
        <q-tab :ripple="false" name="trips" label="Путешествия" />
    </q-tabs>

        <!--<q-tab-panels v-model="tab" animated class="bg-primary text-white">
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>-->

</template>

<script setup>
import { ref } from 'vue'
const tab = ref('profile')
</script>

<style lang="scss" scoped>

</style>