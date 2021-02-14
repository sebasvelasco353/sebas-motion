<template>
<nuxt-link :to="`projects/${element.slug}`" exact>
  <div class="projPreview__container" :class="isLarge">
      <img class="bg" :src="element.image" :alt="element.title" />
      <p>{{ element.title }}</p>
  </div>
</nuxt-link>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true,
    },
    large: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data({ large }) {
    return {
      isLarge: large === 1 ? 'large' : null,
    };
  },
};
</script>

<style scoped>
a {
  width: 40%;
  height: 100%;
  margin: 10rem 8rem;
}
a:nth-child(2n) {
  margin-right: 0;
}
img {
 margin: 0 auto;
}
.projPreview__container {
  display: flex;
  width: 100%;
  height: 30.5rem;
  flex: 1;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.large {
  height: 60.7rem;
}
.bg {
  width:100%;
  height: 100%;
  position: absolute ;
  filter: brightness(60%);
}
p {
  font-family: 'Lato';
  font-weight: 500;
  position: absolute;
  font-size: 2rem;
  color: #FFFFFF;
}

</style>
