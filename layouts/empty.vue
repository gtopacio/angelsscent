<template>
    <div class="h-100 d-flex flex-column">
      <Nuxt />
      <Footer />
    </div>
</template>
<style>
html, body {
  font-family: 'Inter';
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
}

.light{
    font-family: 'Inter-Light';
}

.regular{
    font-family: 'Inter-Regular';
}

.medium{
    font-family: 'Inter-Medium';
}

#__nuxt, #__layout {
  height: 100%;
}

@font-face {
  font-family: 'Inter-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/Inter-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter-Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('./assets/fonts/Inter-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter-Medium';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('./assets/fonts/Inter-Medium.ttf') format('truetype');
}


</style>