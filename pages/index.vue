<template>
  <div class="container">
    <div class="reel">
      <iframe src="https://player.vimeo.com/video/280485594" frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture" marginwidth="0"
        hspace="0" vspace="0" scrolling="no" loading="lazy"
        allowfullscreen title="sebas_motion Reel">
        <p>Sebas_Motion animation Reel</p>
      </iframe>
    </div>
    <h3>
      Sebastián López is a freelance motion designer from Colombia.
    </h3>
   </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 10.6rem 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
}
.reel {
  width: 65vw;
  height: 70vh;
  border-radius: 30px;
  overflow: hidden;
}
.reel iframe,
.reel object,
.reel embed {
  width:100%;
  height:100%;
}
h3 {
  margin: 5.3rem 0;
  font-size: 3.6rem;
  width: 60vw;
}
</style>
