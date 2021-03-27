<template>
  <footer class="flex flex-col justify-between mb-4 md:flex-row footer__container">
    <div class="footer__inner">
      <div class="left">
        <p>Sebastian Lopez</p>
        <p>{{ new Date().getFullYear() }}</p>
      </div>
      <div class="right">
        <a href="mailto:sebaslopez9623@gmail.com" alt="Sebd me an email">sebaslopez9623@gmail.com</a>
        <div class="footer-icons">
          <a href="https://www.instagram.com/sebas_motion/">
            <img src="@/assets/images/footer_icons/instagram.png" alt="Instagram" class="w-10 h-10 align-middle">
          </a>
          <a href="https://dribbble.com/sebas_motion">
            <img src="@/assets/images/footer_icons/dribble.png" alt="Dribble" class="w-10 h-10 align-middle">
          </a>
          <a href="https://www.linkedin.com/in/sebastianlopezcastro/">
            <img src="@/assets/images/footer_icons/linkedin.png" alt="Linkedin" class="w-10 h-10 align-middle">
          </a>
          <a href="https://twitch.tv/sebas_motion">
            <img src="@/assets/images/footer_icons/twitch.png" alt="Twitch" class="w-10 h-10 align-middle">
          </a>
          <a href="https://wa.me/+573174759235">
            <img src="@/assets/images/footer_icons/whatsapp.png" alt="Whatsapp" class="w-10 h-10 align-middle">
          </a>
        </div> 
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
img {
  @apply mx-4;
}
.footer-icons {
  @apply flex flex-row align-middle;
}
</style>
