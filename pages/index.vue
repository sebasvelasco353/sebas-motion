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
   </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.reel {
  width: 800px;
  height: 450px;
  border-radius: 30px;
  overflow: hidden;
}
.reel iframe,
.reel object,
.reel embed {
  width:100%;
  height:100%;
}
</style>
