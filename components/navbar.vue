<template>
  <!-- TODO: only trigger animation on menu click small screens, no animation on startup its the correct way of doing stuff  -->
  <header class="nav__container">
    <div class="nav__inner">
      <div class="z-20 flex flex-row justify-between">
        <nuxt-link class="w-24 m-0" :to="localePath('/')">
          <img class="align-middle" src="@/assets/logo.svg" alt="Sebas.Motion Logo">
        </nuxt-link>
        <button class="md:hidden" v-on:click="menuClick()">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="15" rx="8"></rect>
            <rect y="30" width="100" height="15" rx="8"></rect>
            <rect y="60" width="100" height="15" rx="8"></rect>
          </svg>
        </button>
      </div>
      <nav
        class="absolute left-0 z-10 flex flex-col justify-center w-full h-screen text-center align-middle bg-black -top-full md:relative md:w-auto md:flex-row md:top-0 py-44 md:h-auto md:py-0"
        :class="navClasses"
      >
        <nuxt-link v-on:click="console.log('cosa')" :to="localePath('work')" class="my-5 md:m-0 md:mx-5 hover:underline">{{ $t('work.menu') }}</nuxt-link>
        <nuxt-link :to="localePath('about')" class="my-5 md:m-0 hover:underline">{{ $t('about.menu') }}</nuxt-link>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale)">{{ locale }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuState: window.screen.width > 600,
    };
  },
  watch:{
    $route (to, from){
        this.menuState = false;
    }
  }, 
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i !== this.$i18n.locale)
    },
    navClasses() {
      return {
        'animate-menuIn': this.menuState,
        'animate-menuOut': !this.menuState,
      };
    },
  },
  methods: {
    setLocale(locale) {
      console.log(locale);
    },
    menuClick() {
      this.menuState = !this.menuState;
    },
  },
};
</script>

<style scoped>
header{
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.666667) 48.44%, rgba(0, 0, 0, 0) 100%);
  @apply flex;
  @apply top-0;
  @apply z-50;
  @apply w-full;
  @apply p-6;
  @apply md:px-8;
  @apply md:pt-10;
  @apply md:pb-20;
  @apply fixed;
}
.nav__inner {
  max-width:  1440px;
  @apply flex;
  @apply mx-auto;
  @apply flex-col;
  @apply w-screen;
  @apply md:flex-row;
  @apply justify-between;
}
nav {
  animation-fill-mode: forwards;
  @apply md:bg-opacity-0;
}
rect {
  fill: #01FFFF;
}
a {
  @apply mx-4 my-0 uppercase;
}
</style>
