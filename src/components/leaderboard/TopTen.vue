<template>
  <section class="rounded-2xl">
    <Splide :options="mainOptions" :has-track="false">
      <div class="flex flex-col items-center gap-y-7">
        <h1 class="text-3xl font-bold">ტოპ მასწავლებლები</h1>

        <div class="lg:w-full w-screen">
          <SplideTrack>
            <SplideSlide class="flex items-center justify-center" v-for="(teacher, index) in topTenTeachers">
              <div class="flex flex-col items-center h-fit rounded-lg transition-all cursor-pointer">
                <img v-if="index===0" class="ml-20 w-10 h-16 rotate-[30deg]"
                     src="/src/assets/icons/topTeachers/goldenCrown.svg"
                     alt="">
                <img v-if="index===1" class="ml-20 w-10 h-16 rotate-[30deg]"
                     src="/src/assets/icons/topTeachers/silverCrown.svg"
                     alt="">
                <img v-if="index===2" class="ml-20 w-10 h-16 rotate-[30deg]"
                     src="/src/assets/icons/topTeachers/bronzeCrown.svg"
                     alt="">
                <span v-if="index > 2" class="w-10 h-16"/>

                <router-link :to="`/user/listings/${teacher.id}`"
                             class="relative flex flex-col items-center justify-center">
                  <img v-if="teacher?.profile_pic" class="hover:scale-105 transition w-24 h-24 object-cover rounded-full"
                       :src="teacher.profile_pic" alt="">
                  <img v-else class="hover:scale-105 w-24 h-24 object-cover rounded-full"
                       src="/src/assets/images/default-teacher.png"
                       alt="default teacher icon"/>
                  <div class="absolute rounded-lg  px-4 flex -bottom-3 bg-primary text-white gap-2">
                    <img class="w-4 aspect-square" src="../.././assets/icons/leaderboard/star-icon.svg" alt="">
                    <p class="font-bold">{{teacher._score}}</p>

                  </div>
                </router-link>
                <div class="flex flex-col items-center justify-center mt-4 w-1/2 gap-2">
                  <p class="font-bold text-lg">{{ teacher.first_name }}</p>
                </div>

              </div>
            </SplideSlide>
          </SplideTrack>
        </div>

        <!-- Custom arrows -->
        <div class="splide__arrows relative">
          <button class="absolute splide__arrow splide__arrow--prev" @click="prevSlide">
            <img class="rotate-90" src="../../assets/icons/courses/down-arrow.svg" alt="">
          </button>
          <button class="absolute left-16 splide__arrow splide__arrow--next" @click="nextSlide">
            <img class="-rotate-90" src="../../assets/icons/courses/down-arrow.svg" alt="">

          </button>
        </div>
      </div>
    </Splide>
  </section>
</template>

<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import forSpecificData from '../../composables/forSpecificData.js';
import { onMounted } from 'vue';

const { topTenTeachers, getTopTenTeachers } = forSpecificData();

const mainOptions = {
  perMove: 3,
  type: 'slide',
  rewindByDrag: true,
  perPage: 5.5,
  pagination: false,
  focus: 'first',
  arrows: true,
  gap: '1rem',
  breakpoints: {
    768: {
      perPage: 2.5,
      arrows: false,
      gap: '0rem',
      perMove: 1,
    },
  },
};

const prevSlide = () => {
  // Handle previous slide logic
  // For example: splideInstance.go('-3'); // Move to the previous three slides
};

const nextSlide = () => {
  // Handle next slide logic
  // For example: splideInstance.go('+3'); // Move to the next three slides
};

onMounted(async () => {
  await getTopTenTeachers();
});
</script>

<style scoped>
/* Add your custom arrow styles here */
.splide__arrows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  z-index: 1;
}

.splide__arrow {
  background-color: darkgray; /* Set background color for arrows */
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}


.splide__arrow img {
  width: 20px; /* Set width for arrow icon/image */
  height: 20px; /* Set height for arrow icon/image */
}
</style>
