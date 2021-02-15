<template>
  <footer>
    <div class="footer__container">
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
footer {
  width: 100%;
  font-size: 2.8rem;
}
.footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1440px;
  padding: 10.6rem 50px;
  padding-left: 150px;
}
a {
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
  text-decoration: none;
}
</style>
