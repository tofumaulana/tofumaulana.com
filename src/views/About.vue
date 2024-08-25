<template>
  <div class="min-h-screen my-5 px-4 md:px-0">
    <div class="w-full md:w-5/6 mx-auto flex flex-col md:flex-row md:space-x-20">
      <!-- Profile Section -->
      <div class="md:flex-1">
        <div>
          <h1 class="font-semibold text-lg md:text-xl md:text-left text-center">PERSONAL PROFILE</h1>
          <h4 class="text-xs md:text-sm md:text-left text-center">Detail profile of Tofu Maulana.</h4>
        </div>
        <img class="w-full max-w-sm h-auto my-3 md:mx-0 mx-auto" src="/image/foto.jpeg" alt="Profile Picture" />
        <h4 class="font-semibold text-lg md:text-xl md:text-left text-center">TOFU MAULANA</h4>
        <p class="text-sm md:text-base my-3 text-center md:text-left mx-auto md:mx-0 max-w-md">
          "I am a fresh graduate majoring in Computer and Network Engineering (TKJ) from SMK N 1 AROSBAYA. I have experience participating in several coding and programming bootcamps, as well as experience in assisting with website design."
        </p>
        <div class="grid grid-cols-1 gap-3 max-w-md mx-auto md:mx-0">
          <div class="flex items-start space-x-3">
            <img class="w-5 h-5" src="/image/pendidikan.svg" alt="Education Icon" />
            <p class="text-sm text-gray-800">SMK N 1 Arosbaya</p>
          </div>
          <div class="flex items-start space-x-3">
            <img class="w-4 h-5" src="/image/email.svg" alt="Email Icon" />
            <p class="text-sm text-gray-800">tofumaulana222@gmail.com</p>
          </div>
          <div class="flex items-start space-x-3">
            <img class="w-4 h-5" src="/image/lokasi.svg" alt="Location Icon" />
            <p class="text-sm text-gray-800">Kota Malang</p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="md:flex-1 my-5 md:my-auto">
        <h1 class="text-center font-bold text-2xl md:text-3xl">My Skills</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5">
          <div class="text-center">
            <img class="mx-auto w-10 h-12 md:w-14 md:h-16 mt-2.5" src="/image/logo-html.png" alt="HTML Logo" />
            <h1 class="font-semibold text-sm md:text-xl md:pt-1">HTML</h1>
          </div>
          <div class="text-center">
            <img class="mx-auto w-16 h-16 md:w-20 md:h-20" src="/image/logo-css.png" alt="CSS Logo" />
            <h1 class="font-semibold text-sm md:text-xl">CSS</h1>
          </div>
          <div class="text-center">
            <img class="mx-auto w-16 h-16 md:w-20 md:h-20" src="/image/logo-bootstrap.png" alt="Bootstrap Logo" />
            <h1 class="font-semibold text-sm md:text-xl">Bootstrap</h1>
          </div>
          <div class="text-center">
            <img class="mx-auto w-16 h-11 md:w-20 md:h-14 mt-4" src="/image/logo-tailwind.png" alt="Tailwind Logo" />
            <h1 class="font-semibold text-sm md:text-xl md:pt-2">Tailwind</h1>
          </div>
          <div class="text-center">
            <img class="mx-auto w-16 h-14 md:w-20 md:h-16 mt-3" src="/image/logo-vuejs.png" alt="Vue Js Logo" />
            <h1 class="font-semibold text-sm md:text-xl md:pt-1">Vue Js</h1>
          </div>
          <div class="text-center">
            <img class="mx-auto w-16 h-16 md:w-20 md:h-20" src="/image/logo-js.webp" alt="JavaScript Logo" />
            <h1 class="font-semibold text-sm md:text-xl">JavaScript</h1>
          </div>
          <div class="text-center">
            <img class="mx-auto w-16 h-16 md:w-24 md:h-20" src="/image/Laravel-Logo.wine.png" alt="Laravel Logo" />
            <h1 class="font-semibold text-sm md:text-xl">Laravel</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
