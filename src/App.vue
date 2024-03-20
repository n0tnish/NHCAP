

<template>
  <NavBarComp></NavBarComp>
  <router-view/>
  <FooterComp></FooterComp>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

#app {
  text-align: center;
  color: #2c3e50;
  font-family: 'Playfair', serif;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: purple;
}
</style>
