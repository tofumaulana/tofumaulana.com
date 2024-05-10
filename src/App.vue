<template>
  <div class=""><Navbar /></div>

  <div class="h-auto min-h-full">
    <RouterView />
  </div>
  <div class="">
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
