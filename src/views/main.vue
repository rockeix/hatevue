<template>
<div id="mainslider" >
          <splide :options="options">
            <splide-slide>
              <img class="slider-image" src="../assets/banner01.png" alt="main1" />
            </splide-slide>
            <splide-slide>
              <img class="slider-image" src="../assets/banner02.png" alt="main2" />
            </splide-slide>
          </splide>
      </div>


    <div class="con">
      <div class="content cate-list">
        <h2 class="home_title">유산균 BEST</h2>
        <div class="s1" style="height: 230px;">
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
        </div>
      </div>


      <div class="content cate-list">
        <h2 class="home_title">비타민 BEST</h2>
        <div class="s1" style="height: 230px;">
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
          <a><img src="../assets/ebichu.jpg" style=" width: 100%; height: 230px; padding-right: 30px;"></a>
        </div>
      </div>

    </div>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


export default {
    name: 'MainSlider',
    components: {
        Splide,
        SplideSlide,
    },	
    data() {
        return {
            goodsList: [],
            options: {
                type: 'fade',
                rewind: true,
                perPage: 1,
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: false,
                dots: true,
                animatedDots: true,
                transition: 'fade',
                speed: 800,
            },
        };
    }
  }
</script>

<style scoped>
@charset "UTF-8";

@font-face {
  font-family: 'ChosunCentennial';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'seolleimcool-SemiBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/seolleimcool-SemiBold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SejonghospitalBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SejonghospitalBold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


:root {
  --app-container: #f7f8fa;
  /* --app-container: #f3f6fd; */
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --link-color-active: #fff;
  --link-color-active-bg: #1f1c2e;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
  --message-box-border: #e9ebf0;
  --more-list-bg: #fff;
  --more-list-bg-hover: #f6fbff;
  --more-list-shadow: rgba(209, 209, 209, 0.4);
  --button-bg: #1f1c24;
  --search-area-bg: #fff;
  --star: #1ff1c2e;
  --message-btn: #fff;
}

/* 
html, body {
  width: 100%;
  height: 100vh;
  margin: 0;
} */

body {
  font-family: "DM Sans", sans-serif;
  overflow: scroll;
  display: flex;
  justify-content: center;
  background-color: var(--app-container);
}

/*body 스크롤바*/
body::-webkit-scrollbar {
  width: 12px;
  height: 8px;
}

body::-webkit-scrollbar-track {
  background-color: rgb(218, 218, 218);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #9c0410;
}

body::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

button,
a {
  cursor: pointer;
}

p {
  margin-left: 20px;
  line-height: 24px;
  font-size: 12px;
  color: rgb(173, 173, 173);
}

.slider-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.con {

  justify-content: space-between;
  align-items: center;
  flex: 2;
  background-color: var(--projects-section);
  border-radius: 32px;
  padding: 50px;
  margin: 50px;
  display: flex;
  flex-direction: column;
}

.content {
  max-width: 1040px;
  width: 80%;
  margin: auto;
  padding-top: 30px;
  overflow: auto;

}

.content::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.content::-webkit-scrollbar-track {
  background-color: rgb(218, 218, 218);
  border-radius: 10px;
}

.content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #9c0410;
}

.content::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

.s1 {
  display: flex;
  margin-bottom: 150px;
}



.home_title {
  margin: 40px 0px 20px 0px;
  text-align: center;
}

img {
  width: auto;
  height: 200px;
  object-fit: contain;
}

a img {
  margin: auto;
  width: 100%;
  height: 100%;

}

a:hover img {
  transform: scale(1.12);
  transition: all 0.1s linear;
}

a:not(:hover) img {
  transform: scale(1.0);
  transition: all 0.1s linear;
}
</style>