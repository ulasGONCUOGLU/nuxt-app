<!-- chatgpt yazdığı alan -->
 
<template>
  <v-container
    class="d-flex align-center justify-center fill-height"
    fluid
  >
    <v-card class="pa-6" width="100%" max-width="500">
      <v-card-title class="justify-center">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="redirectToConfirm">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn
            class="mt-4"
            color="primary"
            block
            :loading="loading"
            type="submit"
          >
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('admin@gmail.com');
const password = ref('12345');
const loading = ref(false);
const router = useRouter();

const redirectToConfirm = () => {
  loading.value = true;
  router.push({
    path: '/confirm',
    query: {
      email: email.value,
      password: password.value,
    },
  });
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
