<template>
<nuxt-link :to="`projects/${element.slug}`" exact>
  <div class="projPreview__container" :class="isLarge">
    <img class="bg" :src="require(`@/assets/images/${element.image}`)" :alt="element.title" />
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
    index: {
      type: Number,
      required: true,
    },
  },
  data({ index }) {
    console.log(index);
    return {
      isLarge: index % 2 ? 'large' : null,
    };
  },
};
</script>

<style scoped>
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
