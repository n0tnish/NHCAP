<template>
  <NavBarComp/>
  <div class="home">
    <h1>Welcome to Nurul Huda</h1>
  </div>
  <h2>Beauty through modesty for the sake of Allah.</h2>
</template>

<script>
// @ is an alias to /src

import NavBarComp from '@/components/NavBarComp.vue';

export default {
  name: 'HomeView',
  components: {
  NavBarComp
  }
}
</script>
