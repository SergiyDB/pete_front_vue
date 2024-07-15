<template>
  <q-card flat bordered class="my-card bordered self-stretch">

    <q-card-section>
      <q-avatar size="120px">
        <img :src="data.avatar">
      </q-avatar>
    </q-card-section>

    <q-card-section>
      <div class="text-h6">{{ data.name }}</div>
      <div class="text-subtitle2">{{ data.title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption">{{ data.email }}</div>
      <div class="text-caption">{{ data.phone }}</div>
    </q-card-section>

    <!-- <q-separator />

    <q-card-actions align="right">
      <q-btn flat @click="onMail">Email</q-btn>
    </q-card-actions> -->

  </q-card>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  personData: { type: Object, required: true },
});

const data = computed({
  get: () => props?.personData
});

// const onMail = () => {
//   console.log('SENDED');
// }




</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

</style>