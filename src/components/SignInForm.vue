<template>
  <div class="column q-pa-md q-gutter-y-md" style="width: 500px; max-width: 800px">

    <q-avatar size="120px">
      <img src="/assets/images/logos/robo_logo.jpg">
    </q-avatar>

    <div class="text-h3 text-weight-bold">Sign In</div>
    <div class="text-body1">Don't have an account? <span @click="navToSignUp" style="cursor: pointer" class="text-blue text-weight-bold">Sign Up</span></div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-sm"
    >
      <q-input
        filled
        type="email"
        v-model="email"
        label="Email address *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please enter your password',
          // val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <div class="row justify-between items-center">
        <q-checkbox class="text-body1" size="lg" dense v-model="rememberMe">Remember Me</q-checkbox>
        <div><a style="text-decoration: none" class="text-body1 text-weight-bold" href="">Forgot password</a></div>
      </div>

      <div class="q-py-md">
        <q-btn class="full-width" size="1rem" label="sign in" type="submit" color="primary"/>
        <!-- <q-btn size="1rem" label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
      </div>
    </q-form>

  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import AuthService from 'src/services/auth_service';
import { getState, setUser } from 'src/app_state/app_state';


const $q = useQuasar()
const router = useRouter();

const authService = new AuthService();

const email = ref(null)
const password = ref(null)
const rememberMe = ref(false)

const onSubmit = async () => {

  try {
    const result = await authService.signIn(email.value.trim(), password.value.trim())

    if (result.status === 'ok') {

      setUser(result.user);

      const { user } = getState();
      const userType = user?.user_type;

      if (userType === 'school') {
        router.push('/school');
      } else if (userType === 'company') {
        router.push('/company');
      } else {
        router.push('/');
      }

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      });

      // router.push({ path: '/' });
    } else {

      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Invalid email or password'
      });

      onReset();

    }

  } catch (error) {
    console.error(error)
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: error.message,
    });

    onReset();

  }


  // if (accept.value !== true) {
  //   $q.notify({
  //     color: 'red-5',
  //     textColor: 'white',
  //     icon: 'warning',
  //     message: 'You need to accept the license and terms first'
  //   })
  // }
  // else {
  //   $q.notify({
  //     color: 'green-4',
  //     textColor: 'white',
  //     icon: 'cloud_done',
  //     message: 'Submitted'
  //   })
  // }
};

const onReset = () => {
  email.value = null
  password.value = null
  rememberMe.value = false
}

const navToSignUp = () => {
  router.push('sign-up')
}

</script>
