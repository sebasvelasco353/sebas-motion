<template>
  <footer class="flex flex-col justify-between mb-4 md:flex-row footer__container">
    <div class="footer__inner">
      <div class="left">
        <p>Sebastian Lopez</p>
        <p>{{ new Date().getFullYear() }}</p>
      </div>
      <div class="right">
         <p>sebas@motion.com</p>
         <p>+57 1234567890</p>
        <p><a href="https://www.instagram.com/sebas_motion/">Instagram: @Sebas_motion</a></p>
      </div>
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
  @apply flex;
  @apply w-full;
  @apply py-6;
  @apply px-8;
}
.footer__inner {
  max-width:  1440px;
  @apply mx-auto text-left flex flex-col w-full justify-between;
  @apply md:flex-row md:pl-20;
}
.left, .right {
  flex: 1;
}
p, a {
  @apply text-center;
  @apply md:text-left;
  margin: 0.5rem 0;
  @apply text-3xl;
  @apply md:text-3xl;
}
</style>
