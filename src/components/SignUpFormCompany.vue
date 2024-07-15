<template>
  <div class="column q-gutter-y-md">

    <q-form
      @submit="onSubmit"
      class="q-gutter-sm"
    >
      <q-input
        filled
        type="text"
        v-model="fullName"
        label="Full name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

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

      <q-input
        filled
        type="password"
        v-model="confirmPassword"
        label="Password confirmation *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please enter your password confirmation',
          // val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-input
        filled
        type="text"
        v-model="companyCode"
        label="Company Code *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please enter your company code',
          // val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <div class="row items-center">
        <q-checkbox class="q-mr-sm" size="lg" dense v-model="agreeTerms"/>
        <span class="text-body1 q-mr-sm">I agree with </span>
        <span @click="onShowTerms" style="cursor: pointer" class="text-body1 text-blue text-weight-bold q-mr-sm"> Terms </span>
        <span class="text-body1 q-mr-sm"> and </span>
        <span @click="onShowPrivacyPolicy" style="cursor: pointer" class="text-body1 text-blue text-weight-bold"> Privacy Policy </span>
      </div>


      <div class="q-py-md">
        <q-btn class="full-width" size="1rem" label="Create your free account" type="submit" color="primary"/>
        <!-- <q-btn size="1rem" label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
      </div>

    </q-form>

    <q-dialog v-model="showTermsText">
      <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Terms</q-toolbar-title>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding style="max-height: 50vh" class="scroll">
            <h6>1. Acceptance of Terms</h6>
            <p>By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.</p>

            <h6>2. Use of Services</h6>
            <p>You must use our services in compliance with all applicable laws and regulations. You may not use our services for any illegal or unauthorized purpose.</p>

            <h6>3. Account Responsibilities</h6>
            <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

            <h6>4. Intellectual Property</h6>
            <p>All content, trademarks, and data on this site, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of the company and are protected by law. Unauthorized use is prohibited.</p>

            <h6>5. Termination</h6>
            <p>We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.</p>

            <h6>6. Limitation of Liability</h6>
            <p>To the maximum extent permitted by applicable law, the company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use of our services, (ii) your inability to access or use our services, (iii) any unauthorized access or use of our servers and/or any personal information stored therein.</p>

            <h6>7. Changes to Terms</h6>
            <p>We reserve the right to modify these terms at any time. Any changes will be posted on this page and will be effective immediately upon posting. Your continued use of the services after any such changes constitutes your acceptance of the new terms.</p>

            <h6>8. Governing Law</h6>
            <p>These terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>

            <h6>Contact Us</h6>
            <p>If you have any questions about these Terms, please contact us at [Your Contact Information].</p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>

    <q-dialog v-model="showPrivacyPolicyText">
      <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Privacy Policy</q-toolbar-title>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding style="max-height: 50vh" class="scroll">
            <h6>1. Introduction</h6>
            <p>We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.</p>

            <h6>2. Information We Collect</h6>
            <p>We collect information that you provide to us directly, such as when you create an account, update your profile, use our services, or communicate with us. This information may include your name, email address, phone number, and payment information.</p>

            <h6>3. Use of Information</h6>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users. Specifically, we may use your information to:
                <ul>
                    <li>Provide and deliver the services you request</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, security alerts, and support messages</li>
                    <li>Communicate with you about products, services, offers, and promotions</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                    <li>Personalize and improve the services and provide advertisements, content, or features that match user profiles or interests</li>
                </ul>
            </p>

            <h6>4. Sharing of Information</h6>
            <p>We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>

            <h6>5. Data Security</h6>
            <p>We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.</p>

            <h6>6. Your Rights</h6>
            <p>You have the right to access, correct, update, or request deletion of your personal information. You can do so by contacting us using the contact details provided below. You also have the right to object to the processing of your personal data, ask us to restrict the processing of your personal data, or request portability of your personal data.</p>

            <h6>7. Changes to This Privacy Policy</h6>
            <p>We may update this Privacy Policy from time to time. If we make any changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.</p>

            <h6>Contact Us</h6>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].</p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import AuthService from 'src/services/auth_service';

const $q = useQuasar();
const router = useRouter();

const authService = new AuthService();

const fullName = ref(null);
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const companyCode = ref(null);
const agreeTerms = ref(false);
const showTermsText = ref(false);
const showPrivacyPolicyText = ref(false);

const onSubmit = async () => {

  try {
    const result = await authService.signUpCompany(
      fullName.value.trim(),
      email.value.trim(),
      password.value.trim(),
      companyCode.value.trim()
    )

    if (result.status === 'ok') {

      router.push('/company');

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Signed up successfully!'
      });

    } else {

      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Invalid registration data'
      });

      onReset();

    }

  } catch (error) {
    console.error(error);
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: error.message || 'Sign-up failed!',
    });

    onReset();

  }
}

const onReset = () => {
  fullName.value - null;
  email.value = null
  password.value = null;
  confirmPassword.value = null;
  companyCode.value = null;
  agreeTerms.value = false
}

const onShowTerms = () => {showTermsText.value = true};

const onShowPrivacyPolicy = () => {showPrivacyPolicyText.value = true}

</script>
