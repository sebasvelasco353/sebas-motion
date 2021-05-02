<template>
<div class="about-content">
 <transition-group name="title" appear>
   <h1 key="title">{{ $t('about.title') }}</h1>
 </transition-group>
 <transition-group name="content" appear>
   <p key="content">{{ $t('about.intro-text') }}</p>
 </transition-group>
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      show: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
};
</script>

<style scoped>
.about-content {
  overflow-x: hidden;
  min-height: 65vh;
}
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
</style>
