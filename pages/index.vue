<template>
  <div class="home">
    <div class="w-full reel">
      <video height="100%" width="100%" class="rounded-2xl" controls autoplay>
        <source src="@/assets/video/Reel_2021.mp4" type="video/mp4">
        {{ $t('no-video') }} 
      </video>
    </div>
    <h1 class="mt-12 text-4xl md:text-6xl md:mt-24">
      {{ $t('index.title') }}
    </h1>
    <p></p>
    <img src="@/assets/images/separator.svg" alt="Separator images" class="mx-auto my-52">
      <div class="flex flex-col my-12 md:my-24 projects md:grid md:grid-cols-2 md:grid-rows-auto md:gap-32" ref="projectPreview">
        <project-preview v-for="(project, index) in projects" :element="project" :key="index" :index="index" />
      </div>
   </div>
</template>

<script>
import projectPreview from '../components/projectPreview.vue';
import gsap from "gsap";

export default {
  components: {
    projectPreview,
  },
  async asyncData({ $content, app }) {
    const projects = await $content('projects', { deep: true })
      .only(['title', 'thumbnail', 'url'])
      .sortBy('fecha', 'desc')
      .limit(4)
      .fetch();

    console.log({ projects });

    return {
      projects,
    };
  },
  mounted() {
    this.$nextTick(function () {
      gsap.to("h1", { duration: 1, x: 0 });
    })
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollAnimation_left();
      this.scrollAnimation_right();
    },
    scrollAnimation_left() {
     return gsap.to("._left", {
        x: 0,
        duration: 1,
        opacity: 1,
      });
    },
    scrollAnimation_right() {
      return gsap.to("._right", {
        x: 0,
        duration: 1,
        opacity: 1,
      });
    }
  },

};
</script>

<style scoped>
h3 {
  padding: 0 20%;
}
h1 {
  transform: translateX(-10000px);
}
.home {
  overflow-x: hidden;
}
</style>
