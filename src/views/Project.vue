<template>
  <div class="bg-white py-10 md:py-10 lg:py-10 min-h-screen">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Projects</h2>
      <p class="py-10 text-lg leading-8 text-gray-600">My project management skills enable me to efficiently handle various tasks and achieve project goals on time.</p>
    </div>
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
      <ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
        <li>
          <img class="aspect-[3/2] w-full rounded-xl object-cover border-2" src="/image/screenshot-1718714367378.png" alt="" />
          <div class="mt-6 -my-6" v-for="user in users">
            <RouterLink :to="'/project/' + user.params1 + '/books'">
              <span class="text-lg font-semibold hover:border-b-2 delay-200 border-red-500 leading-8 text-gray-900">{{ user.name1 }}</span>
            </RouterLink>
          </div>
          <p class="text-base leading-7 text-gray-600">2024</p>
          <p class="mt-4 text-base leading-7 text-gray-600">create a (findbooks) Using Vue js & findbooksApi and Tailwind CSS</p>
        </li>
        <li>
          <img class="aspect-[3/2] w-full rounded-xl object-cover border-2" src="/image/pokemon.png" alt="" />
          <div class="mt-6" v-for="user in users">
            <RouterLink :to="'/project/' + user.params + '/pokemon'">
              <span class="text-lg font-semibold leading-8 text-gray-900 hover:border-b-2 delay-200 border-red-500">{{ user.name }}</span>
            </RouterLink>
          </div>
          <p class="text-base leading-7 text-gray-600">2024</p>
          <p class="mt-4 text-base leading-7 text-gray-600">Creating a Pokedex (Pokemon) Using Vue & PokeAPI | Vue Consumption API</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name1: 'FindBooks', params1: 'Books' },
        { name: 'Pokemon', params: 'Pokemon' },
      ],
    };
  },
};
</script>
