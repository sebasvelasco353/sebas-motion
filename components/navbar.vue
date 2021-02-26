<template>
  <header class="flex flex-row justify-between w-full pt-5 pb-32 px-11 space-x-4 nav__container">
    <a class="w-24 m-0" href="/">
      <img class="align-middle" src="@/assets/logo.svg" alt="Sebas.Motion Logo">
    </a>
    <nav class="flex flex-row content-center text-center align-middle space-x-4">
      <a class="hover:underline m-0" href="/work">Work</a>
      <a class="hover:underline m-0" href="/about">About</a>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style scoped>
header{
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.666667) 48.44%, rgba(0, 0, 0, 0) 100%);
}
</style>
