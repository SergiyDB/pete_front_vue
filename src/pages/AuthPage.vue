<template>
  <div class="fullscreen row">
    <div style="padding-top: 5vh" class="col-12 col-md-6 column items-center">
      <router-view />
    </div>
    <div style="padding-top: 30vh" class="col-12 col-md-6 covered column q-px-xl">
      <p class="text-h2 text-white text-bold">Welcome to</p>
      <p class="text-h4 text-white text-bold">P3T3's Learning Management System</p>
      <p class="text-h6 text-white text-uppercase">AI-personalized language learning</p>
    </div>
  </div>
</template>

<script setup>

defineOptions({
  name: 'AuthPage',
});

</script>

<style lang="scss" scoped>
.covered {
  background-color: #133f3e;
}
</style>