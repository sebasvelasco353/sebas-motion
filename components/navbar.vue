<template>
  <header class="flex flex-col justify-between w-full pt-5 pb-10 md:pb-20 md:flex-row px-11 md:space-x-4 nav__container">
    <div class="flex flex-row justify-between">
      <a class="w-24 m-0" href="/">
        <img class="align-middle" src="@/assets/logo.svg" alt="Sebas.Motion Logo">
      </a>
      <button class="md:hidden" v-on:click="menuClick()">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="15" rx="8"></rect>
          <rect y="30" width="100" height="15" rx="8"></rect>
          <rect y="60" width="100" height="15" rx="8"></rect>
        </svg>
      </button>
    </div>
    <nav
      class="absolute left-0 z-20 flex flex-col flex-wrap content-center w-full text-center align-middle -top-40 md:relative md:w-auto md:flex-row md:top-0"
      :class="navClasses"
    >
      <a class="my-5 md:m-0 hover:underline" href="/sebas-motion/work">Work</a>
      <a class="my-5 md:m-0 hover:underline" href="/sebas-motion/about">About</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuState: window.screen.width > 600,
    };
  },
  computed: {
    navClasses() {
      return {
        'animate-menuIn': this.menuState,
        'animate-menuOut': !this.menuState,
      };
    },
  },
  methods: {
    menuClick() {
      this.menuState = !this.menuState;
    },
  },
};
</script>

<style scoped>
header{
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.666667) 48.44%, rgba(0, 0, 0, 0) 100%);
}
nav {
  animation-fill-mode: forwards;
}
rect {
  fill: #01FFFF;
}
</style>
