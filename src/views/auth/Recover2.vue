<script setup>
import AnimatedInput from "/src/components/auth/AnimatedInput.vue";
import useRecover from "/src/composables/auth/useRecover.js";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const {
  password,
  error,
  token_id,
  recover2,
  success
} = useRecover();

onMounted(() => {
  token_id.value = route.params.token_id;
});
</script>

<template>
  <div class="relative">
    <router-link to="/auth/recover" class="cursor-pointer absolute top-10 -left-2/3">
      <img src="/src/assets/icons/auth/back-arrow.svg" alt="back arrow"/>
    </router-link>

    <form method="post" @submit.prevent="recover2" class="flex flex-col items-center">
      <h1 class="mb-5 lg:mb-14 text-lg lg:text-3xl font-semibold">ახალი პაროლი</h1>

      <animated-input placeholder="პაროლი" v-model="password" show-password-toggle/>

      <div v-if="success" class="flex items-center w-full justify-start gap-x-2 mt-4 lg:mt-5">
        <span class="text-sm text-price" v-text="success"/>
      </div>

      <div v-if="error" class="flex items-center w-full justify-start gap-x-1.5 mt-4 lg:mt-5">
        <img class="max-lg:w-2" src="../../assets/icons/auth/error.svg" alt="alert error icon">

        <span class="text-xs lg:text-sm text-error" v-text="error"/>
      </div>

      <button class="mt-4 lg:mt-10 max-lg:text-xs w-full rounded-[5px] lg:rounded-md font-medium text-white transition bg-primary py-2 lg:py-3.5 hover:shadow-xl">შეცვლა</button>
    </form>
  </div>
</template>