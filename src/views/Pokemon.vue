<template>
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
  <div class="mx-auto py-5 px-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-6 xl:col-span-2">
    <img class="aspect-[3/2] w-full rounded-xl object-cover border-2" src="/image/pokemon.png" alt="" />
    <img class="aspect-[3/2] w-full rounded-xl object-cover border-2" src="/image/pokemon1.png" alt="" />
  </div>
  <div class="px-10 py-10">
    <h1 class="text-2xl font-bold">Pokemon</h1>
    <p class="py-5"><span class="font-semibold">Year :</span> 2024</p>
    <p><span class="font-semibold">Tech Stacks :</span> Vue Js & PokeAPI</p>
    <h1 class="text-2xl font-bold py-5">Overview</h1>
    <p class="md:w-full">
      An overview of Pokémon can be summarized as a highly successful media franchise first introduced by Nintendo in 1996. The franchise, initially created by Satoshi Tajiri and Ken Sugimori, has evolved into one of the most iconic in the
      entertainment world. In the Pokémon world, trainers, known as "Pokémon Trainers," capture and train fictional creatures called Pokémon to battle each other. Pokémon come in various types, elements, and strengths, and trainers compete
      in Pokémon battles to win championships and collect achievements. Beyond video games, Pokémon exists in various other media, including trading card games, television series, animated films, and various merchandise. The Pokémon
      television series, which first aired in 1997, has become one of the most popular worldwide, following the adventures of the main character, Ash Ketchum, and his friends as they explore the Pokémon world. The Pokémon franchise
      continues to expand with the release of new video games, television shows, movies, and other products, making it one of the most influential and iconic in global popular culture.
    </p>
  </div>
</template>
