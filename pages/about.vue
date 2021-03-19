<template>
<div class="about-content">
 <transition name="title" appear>
   <h1>About Me</h1>
 </transition>
 <transition name="content" appear>
   <p>Hello, My name is Sebastián López and I'm a Motion Designer from Cali, Colombia. I hope you like my work and have a good time scrolling through my webpage.</p>
 </transition>
</div>
</template>

<script>
export default {
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
