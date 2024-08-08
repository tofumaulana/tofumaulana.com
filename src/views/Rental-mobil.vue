<template>
  <div class="min-h-screen">
    <div class="px-10 pt-5">
      <RouterLink :to="'/project'">
        <span class="text-lg font-semibold hover:border-b-2 delay-200 border-red-500 leading-8 text-gray-900">
          <a href="#" class="">
            <svg class="md:w-10 w-6 md:h-10 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg> </a
        ></span>
      </RouterLink>
    </div>

    <div class="flex flex-col items-center justify-center pt-10">
      <div class="relative md:w-full w-[20rem] max-w-2xl">
        <img :src="images[currentImageIndex]" alt="Slideshow Image" class="w-full md:h-[19.5rem] object-cover rounded-lg shadow-lg" />
        <button @click="prevImage" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button @click="nextImage" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="px-10 py-14">
      <h1 class="text-2xl font-bold">Rental Mobil</h1>
      <p class="py-5"><span class="font-semibold">Year :</span> 2024</p>
      <p><span class="font-semibold">Tech Stacks :</span> Laravel</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['/image/projet-laravel.png', '/image/login.png', '/image/projet-brand.png', '/image/project-type.png'],
      currentImageIndex: 0,
    };
  },
  methods: {
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },
};
</script>
