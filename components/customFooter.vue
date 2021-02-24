<template>
  <footer class="footer__container flex flex-row justify-between px-40 my-56">
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
</style>
