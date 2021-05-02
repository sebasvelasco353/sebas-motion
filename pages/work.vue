<template>
<div class="work">
  <transition name="title" appear>
    <h1>{{ $t('work.title') }}</h1>
  </transition>
  <transition name="content" appear>
    <p>{{ $t('work.intro-text') }}</p>
  </transition>
  <div class="flex flex-col my-12 md:my-24 projects md:grid md:grid-cols-2 md:grid-rows-auto md:gap-32" ref="projectPreview">
    <project-preview v-for="(project, index) in projects" :element="project" :key="project.title" :index="index" />
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
      .fetch();
    return {
      projects,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.scrollAnimation_left();
      this.scrollAnimation_right();
    })
  },
  methods: {
    scrollAnimation_left() {
     return gsap.to("._left", {
        x: 0,
        duration: 1,
        opacity: 1,
        display: 'block'
      });
    },
    scrollAnimation_right() {
      return gsap.to("._right", {
        x: 0,
        duration: 1,
        opacity: 1,
        display: 'block'
      });
    }
  },

};
</script>

<style>
.content-enter-active, .content-leave-active{
  transition: 1.5s;
  transition-delay: 0.5s;
}
.content-enter, .content-leave-to {
  transform: translateX(-1000px);
  opacity: 0;
}
.title-enter-active, .title-leave-active{
  transition: 1.5s;
}
.title-enter, .title-leave-to {
  transform: translateX(-1000px);
  opacity: 0;
}
.work {
  overflow-x: hidden;
}
</style>
