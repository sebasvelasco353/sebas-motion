<template>
  <div class="nav">
    <a href="/">Logo</a>
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
  width: 100%;
  display: flex;
  position: fixed;
  padding: 30px 40px;
  flex-direction: row;
  justify-content: space-between;

  font-size: 2rem;
  color: rgb(115, 251, 253);

  background-image: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));
}
a {
  margin: 0 5px;
  font-weight: 800;
  text-decoration: none;
  color: rgb(115, 251, 253);
}
</style>
