<template>
  <footer>
    <div class="footer__container">
      <div class="left">
        <p>Sebastian Lopez</p>
        <p>{{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
};
</script>

<style>
footer {
  width: 100%;
}
.footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 1440px;
  margin: 0 auto;
  height: 40rem;
  padding: 5rem;
}
</style>
