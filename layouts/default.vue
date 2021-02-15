<template>
  <div>
    <navbar class="navbar"/>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: absolute;
  z-index: 1000;
}
.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 10.6rem 50px;
  padding-left: 150px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
}
</style>
