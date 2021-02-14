<template>
<nuxt-link :to="`projects/${element.slug}`" exact>
  <div class="projPreview__container">
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
.projPreview__container {
  display: flex;
  width: 100%;
  height: 305px;
  flex: 1;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
