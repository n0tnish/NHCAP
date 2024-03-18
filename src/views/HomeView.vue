<template>
  <NavBarComp/>
  <div class="home">
    <h1>Welcome to Nurul Huda</h1>
  </div>
  <h2>Beauty through modesty for the sake of Allah.</h2>
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/css/Screenshot 2024-03-18 021431.png" class="d-block w-100" alt="hadith1" loading="eager">
    </div>
    <div class="carousel-item">
      <img src="../assets/css/Screenshot 2024-03-18 023708.png" class="d-block w-100" alt="hadith2" loading="eager">
    </div>
    <div class="carousel-item">
      <img src="../assets/css/Screenshot 2024-03-18 025253.png" class="d-block w-100" alt="hadith3" loading="eager">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
// @ is an alias to /src

import NavBarComp from '@/components/NavBarComp.vue';


export default {
  name: 'HomeView',
  components: {
  NavBarComp
  },
};
</script>

<style>
.home {
  text-align: center;
  padding: 2rem 0;
}

#carouselExampleAutoplaying {
  max-width: 600px;
  margin: 0 auto;
}

.carousel-item {
  height: 300px;
  overflow: hidden;
}

.carousel-item img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>