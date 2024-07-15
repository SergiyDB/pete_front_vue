<template>
  <q-layout>

    <q-header elevated>
      <q-toolbar>
        <q-btn size="lg" @click="navigateBack" flat round dense icon="arrow_back" class="q-mr-sm" />
        <q-toolbar-title>
          Student Summary
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-lg q-gutter-y-lg">

        <section class="column items-center justify-center">

          <q-avatar size="200px">
            <img :src="data['imageSrc']">
          </q-avatar>

          <div class="text-h6">Student</div>
          <div class="text-body1">{{ data.name }}</div>
          <div class="text-body1">Grade: 11C</div>
          <div class="text-body1">Teacher: {{ data.teacher }}</div>

        </section>

        <section class="row q-col-gutter-md q-mb-lg">
          <div v-for="(elem, idx) in data['averageIndicatorsData']" :key="idx" class="col-12 col-md-3">
            <AverageIndicatorCard
              :data="elem"
            />
          </div>
        </section>

        <section class="row q-mb-lg q-col-gutter-md">

          <div class="col-12 col-md-8">
            <q-card class="full-height bg-white bordered rounded-borders">

              <q-card-section class="row">
                <div class="col-12 col-md-6">
                  <div class="text-center text-subtitle1 text-weight-bold">Skill Distribution</div>
                  <PolarAreaChart
                    :labels="['Speaking', 'Reading', 'Listening', 'Writing']"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <div class="text-center text-subtitle1 text-weight-bold">Linguistic Competence</div>
                  <RadarChart />
                </div>
              </q-card-section>

            </q-card>
          </div>

          <div class="col-12 col-md-4 q-gutter-y-sm">

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'weekly'"
                :dataset="data['progressTrendLineData']['weekly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'monthly'"
                :dataset="data['progressTrendLineData']['monthly']"
              />
            </div>

            <div class="row">
              <TrendLineWidgetCard
                :timescale="'quarterly'"
                :dataset="data['progressTrendLineData']['quarterly']"
              />
            </div>

          </div>
        </section>

      </q-page>
    </q-page-container>

  </q-layout>


</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

import AverageIndicatorCard from 'src/components/AverageIndicatorCard.vue';
import PolarAreaChart from 'src/components/PolarAreaChart.vue';
import RadarChart from 'src/components/RadarChart.vue';
import TrendLineWidgetCard from 'src/components/TrendLineWidgetCard.vue';

import { studentSummaryData } from 'src/mock/data.ts';

const props = defineProps({
  id: String
});

const router = useRouter();

const navigateBack = () => {router.go(-1);}

const data = computed(() => {
  return studentSummaryData.filter(elem => elem['id'] === props.id)[0]
});

</script>

<style lang="scss" scoped>

</style>