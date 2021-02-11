<template>
  <div class="nav">
     <a href="/">
      <img src="@/assets/logo.svg" alt="Sebas.Motion Logo">
    </a>
    <div class="links">
      <a href="/work">Work</a>
      <a href="/about">About</a>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.nav{
  top: 0;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  font-size: 3.6rem;
  background-image: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));
}
a {
  margin: 0 5px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(115, 251, 253);
}
</style>
