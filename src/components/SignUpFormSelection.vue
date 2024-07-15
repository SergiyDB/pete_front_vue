<template>
  <div class="column q-pa-md q-gutter-y-md" style="width: 500px; max-width: 800px">

    <q-avatar size="120px">
      <img src="/assets/images/logos/robo_logo.jpg">
    </q-avatar>

    <div class="text-h3 text-weight-bold">Sign Up</div>

    <div class="text-body1">Already have an account? <span style="cursor: pointer" class="text-blue text-weight-bold" @click="navToSignIn">Sign In</span></div>
    <q-tabs
      active-color="white"
      active-bg-color="primary"
      shrink
    >
      <q-route-tab
        label="Through School"
        to="/auth/sign-up/school"
        exact
      />
      <q-route-tab
        label="Through Company"
        to="/auth/sign-up/company"
        exact
      />
      <q-route-tab
        label="As Tutor"
        to="/auth/sign-up/tutor"
        exact
      />
    </q-tabs>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import { useQuasar } from 'quasar'
// import { ref } from 'vue'

// const $q = useQuasar()
const router = useRouter();

// const email = ref(null)
// const password = ref(null)
// const rememberMe = ref(false)

// const onSubmit = () => {
//   if (accept.value !== true) {
//     $q.notify({
//       color: 'red-5',
//       textColor: 'white',
//       icon: 'warning',
//       message: 'You need to accept the license and terms first'
//     })
//   }
//   else {
//     $q.notify({
//       color: 'green-4',
//       textColor: 'white',
//       icon: 'cloud_done',
//       message: 'Submitted'
//     })
//   }
// };

// const onReset = () => {
//   email.value = null
//   password.value = null
//   rememberMe.value = false
// }

const navToSignIn = () => {
  router.push('/auth/sign-in')
}
</script>
