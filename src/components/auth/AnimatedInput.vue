<script setup>
import {ref} from "vue";

defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  showPasswordToggle: {
    type: Boolean,
    default: false,
  },
});

const showPassword = ref(false);
const value = defineModel();
const focused = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="relative w-full">
    <input
        v-model="value"
        :placeholder="!focused ? placeholder : ''"
        :type="(!showPassword && showPasswordToggle) ? 'password' : 'text'"
        class="max-lg:text-[10px] lg:h-fit h w-full border lg:border-2 border-black font-medium placeholder-black rounded-[5px] lg:rounded-lg p-2 lg:p-3 hover:border-primary hover:cursor-pointer focus:outline-primary focus:cursor-auto"
        @focusin="focused = true"
        @focusout="focused = false"
    />
    <transition>
      <label
          v-if="focused || value"
          :class="!focused && value ? '!text-black' : ''"
          class="absolute -top-2 bg-white font-bold text-primary left-2.5 px-[5px] text-[8px] lg:text-[10px]"
          v-text="placeholder"
      />
    </transition>
    <div class="max-lg:w-4 absolute top-2.5 lg:top-5 right-2 lg:right-4 hover:cursor-pointer" v-if="showPasswordToggle"
         @click="togglePasswordVisibility">
      <img
          v-if="showPassword"
          src="/src/assets/icons/auth/hide-password-icon.svg"
          alt="show password icon"
      />
      <img
          v-else
          src="/src/assets/icons/auth/show-password-icon.svg"
          alt="hide password icon"
      />
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  top: 16px;
  left: 16px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  background-color: transparent;
  padding: 0;
}
</style>