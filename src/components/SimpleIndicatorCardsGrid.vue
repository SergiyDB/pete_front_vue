<template>

  <div class="row">
    <div class="col-12 col-md-6 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="data['top-10']"
        :cardBgColorClass="'bg-light-blue-1'"
        :cardTextColorClass="'text-indigo-14'"
      />
    </div>
    <div class="col-12 col-md-6 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="data['bottom-30']"
        :cardBgColorClass="'bg-red-1'"
        :cardTextColorClass="'text-deep-orange-14'"
      />
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="data['fluency-92%-over']"
        :cardBgColorClass="'bg-light-green-1'"
        :cardTextColorClass="'text-green-10'"
      />
    </div>

      <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="data['fluency-87%-over']"
        :cardBgColorClass="'bg-cyan-1'"
        :cardTextColorClass="'text-cyan-10'"
      />
    </div>

    <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="data['fluency-77%-below']"
        :cardBgColorClass="'bg-amber-1'"
        :cardTextColorClass="'text-amber-10'"
      />
    </div>

    <div class="col-12 col-md-3 q-pa-sm">
      <SimpleIndicatorCard
        :cardData="data['fluency-57%-below']"
        :cardBgColorClass="'bg-deep-orange-1'"
        :cardTextColorClass="'text-deep-orange-10'"
      />
    </div>

  </div>

</template>

<script setup lang="ts">
import SimpleIndicatorCard from './SimpleIndicatorCard.vue';
import type { SimpleIndicatorData } from 'src/interfaces/app_interfaces';

defineProps<{ data: Record<string, SimpleIndicatorData>}>();



</script>

<style lang="scss" scoped>

</style>