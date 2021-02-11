<template>
  <div class="nav">
    <div class="nav__container">
       <a href="/">
        <img src="@/assets/logo.svg" alt="Sebas.Motion Logo">
      </a>
      <div class="links">
        <a href="/work">Work</a>
        <a href="/about">About</a>
      </div>
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  padding: 30px 50px;
  font-size: 3.6rem;
  background-image: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));
}
.nav__container {
  display: flex;
  width: 100%;
  margin:  0 auto;
  max-width: 1440px;
  flex-direction: row;
  justify-content: space-between;
}
a {
  margin: 0 5px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(115, 251, 253);
}
</style>
