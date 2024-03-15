<template>
    <q-item v-if="type=='withAvatar'" clickable v-ripple class="item">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label class="text-deep-purple">title</q-item-label>
            <q-item-label caption>text</q-item-label>
        </q-item-section>

        <q-item-section side>
            <q-icon name="arrow_right" color="grey-10"></q-icon>
        </q-item-section>   
    </q-item>
    
    <q-item v-else-if="type=='withToggle'" tag="label" v-ripple class="item">
        <q-item-section>
            <q-item-label class="text-deep-purple">title</q-item-label>
            <q-item-label caption>limit</q-item-label>
        </q-item-section>

        <q-item-section side>
            <MyToggle/>
        </q-item-section>
    </q-item>

    <q-item v-else clickable v-ripple class="item">
        <q-item-section>
            <q-item-label class="text-deep-purple">title</q-item-label>
            <q-item-label caption>date and cost</q-item-label>
        </q-item-section>
        
        <q-item-section side>
            <q-icon name="arrow_right" color="grey-10"></q-icon>
        </q-item-section>
    </q-item>
</template>

<script setup>
import { ref } from 'vue'
import MyToggle from './MyToggle.vue';
const props = defineProps({
    type: {
        type: String,
        require: false
    }
})
</script>

<style scoped>
.item {
    min-height: 88px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
}
</style>