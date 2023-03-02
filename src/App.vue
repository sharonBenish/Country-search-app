<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <div class="font-body bg-light-bg h-100 dark:bg-dark-bg dark:text-white">
    <header class="flex justify-between p-5 bg-white dark:bg-dark-blue shadow-md font-extrabold lg:text-xl">
      <h1 class="">Where in the world</h1>
      <div class="flex hover:cursor-pointer" @click="toggleDark()">
        <span class="mr-2">
          <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
         </svg>

        </span>
        {{ isDark?'Light Mode':'Dark Mode' }}
      </div>
    </header>
    <div>
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<style scoped>
</style>
