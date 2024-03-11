import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'


export const useFavStore = defineStore('favStore', () => {
    const image = ref('')
    
    return {
        image
    }
})