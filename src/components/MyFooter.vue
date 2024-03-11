<template>
    <q-footer class="bg-teal text-white" style="height: 70px">
      <q-toolbar>
        <q-tabs no-caps v-model="tab" class="justify-between" active-color="teal-10">
            <q-route-tab to="/main" name="main" icon="home" label="Главная" />
            <q-tab name="expenses" icon="receipt" label="Расходы" />
            <q-tab name="charts" icon="leaderboard" label="Аналитика" />
            <q-tab name="profile" icon="perm_identity" label="Профиль" />
        </q-tabs>
      </q-toolbar>
    </q-footer>
</template>

<script setup>

</script>

<style scoped>

</style>