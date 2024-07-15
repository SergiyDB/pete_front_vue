<template>
  <q-card class="bg-white bordered">
    <q-card-section>
      <div class="title text-body1 text-weight-bold">
        <span>{{ data.title }}</span>
      </div>
    </q-card-section>

    <q-card-section class="value text-center">
      <div class="text-center text-h4">
        <span>{{ data.value }}</span><span v-if="data.unit">&nbsp;{{ data.unit }}</span>
      </div>
    </q-card-section>

    <q-card-section v-if="data.additionalText" class="additional">
      <div class=" text-body2 text-center">
        <span v-if="data.additionalText">{{ data.additionalText }}</span>
        <span v-if="data.additionalValue">:&nbsp;{{ data.additionalValue }}</span>
        <span v-if="data.additionalUnit">&nbsp;{{ data.additionalUnit }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { AverageIndicatorData } from 'src/interfaces/app_interfaces';

defineProps<{ data: AverageIndicatorData }>();

</script>

<style lang="scss">

</style>