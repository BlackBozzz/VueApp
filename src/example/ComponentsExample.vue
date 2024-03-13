<template>
    <q-layout>
        <q-page-container class="my">
            <MyInput :type="'placeholder'"></MyInput>
            <MyInput></MyInput>
            <MyInput :type="'filled'"></MyInput>
            <MyInput :type="'borderless'"></MyInput>
            <MyInput :type="'textarea'"></MyInput>

            <div>
                <MyButton :type="'create'" :label="'create'"></MyButton>
                <MyButton :type="'edit'"></MyButton>
                <MyButton :type="'close'"></MyButton>
                <MyButton :label="'default'"></MyButton>
                <MyButton :icon-name="'edit'" :label="'Label'"></MyButton>
                <MyButton :label="'border'" :type="'cancel'"></MyButton>
            </div>
            
            <MySearch></MySearch>
            <MyToggle></MyToggle>
            <MySelect :options="options"></MySelect>
            <MyTabs></MyTabs>

            <MyDialog></MyDialog>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import MyInput from '@/components/MyInput.vue';
import MyButton from '@/components/MyButton.vue';
import MySearch from '@/components/MySearch.vue';
import MyToggle from '@/components/MyToggle.vue';
import MySelect from '@/components/MySelect.vue';
import MyTabs from '@/components/MyTabs.vue';
import MyDialog from '@/components/MyDialog.vue';


const options = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

</script>

<style scoped>
.my{
    display: flex;
    flex-direction: column;
    gap: 10px
}
</style>