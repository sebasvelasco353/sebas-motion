<template>
  <footer class="flex flex-col justify-between mb-4 md:flex-row footer__container">
    <div class="left">
      <p>Sebastian Lopez</p>
      <p>{{ new Date().getFullYear() }}</p>
    </div>
    <div class="right">
       <p>sebas@motion.com</p>
       <p>+57 1234567890</p>
      <p><a href="https://www.instagram.com/sebas_motion/">Instagram: @Sebas_motion</a></p>
    </div>
  </footer>
</template>

<script>
export default {
};
</script>

<style scoped>
.footer__container {
  color: white;
}
p, a {
  text-align: center;
  margin: 0.5rem;
  @apply text-base;
}
</style>
