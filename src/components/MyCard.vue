<template>
    <q-card class="card" flat bordered>
      <div v-if="withInfo" class="text-h5 text-bold text-deep-purple q-ma-md">Title</div>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="row justify-between">
            <div>
                <div class="text-h5 text-deep-purple">Title</div>
                <div class="text-subtitle1">Subtitle</div>
            </div>
            <div>
                <div class="text-h6 text-green">Title</div>
                <q-btn v-if="!withInfo"
                    color="grey-10"
                    round
                    flat
                    dense
                    icon="arrow_right"
                /> 
            </div>
        </div>

        <div v-if="withInfo" class="row no-wrap justify-between items-end">
            <div class="text-caption text-grey-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <q-btn 
                color="grey-10"
                round
                flat
                dense
                icon="arrow_right"
            />   
        </div>
              
      </q-card-section>

    </q-card>
</template>

<script setup>
const props = defineProps({
    withInfo: {
        type: Boolean,
        require: false
    }
})
</script>

<style scoped>
.card {
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.1));
    border-radius: 12px;
}

</style>