<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nurul Huda</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AboutView">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="../views/ContactView.vue"></router-link>
          </li>
         <li class="nav-item">
          <router-link class="nav-link" to="../views/CollectionsView.vue"></router-link>
         </li>
         <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Admin</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="../views/SignUpRegister.vue">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="../views/SigninLogin.vue">Login</router-link>
          </li>
        </ul>
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  background-color: rgb(118, 178, 118);
}
</style>