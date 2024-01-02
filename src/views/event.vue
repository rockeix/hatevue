<template>
<div class="app-container">
  
    <div id="mainslider">
      <splide :options="options">
        <splide-slide>
          <img class="slider-image" src="../assets/banner01.png" alt="main1" />
        </splide-slide>
      </splide>
    </div>

    <div class="con">
      <div id='container'>

        <div id='title'>
          <h2>퀴즈를 맞추면 적립금을 드립니다.</h2>
        </div>
        <br />
        <div id='quiz'></div>
        <div class='button' id='next'><a href='#'>다음</a></div>
        <div class='button' id='prev'><a href='#'>이전</a></div>
        <div class='button' id='start'> <a href='#'>메인 화면</a></div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    methods: {

    }
}
</script>
<style scoped>
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


html, body {
  width: 100%;
  height: 100vh;
  margin: 0;
}

body {
  font-family: 'SejonghospitalBold';
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


.app-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--app-container);
    transition: 0.2s;
    max-width: 1800px;
  }


.slider-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  img {
    width: auto;
    height: 200px;
    /* object-fit: contain; 이미지 비율 */
}


/*이벤트 내용 부분*/

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
  
h1 {
    text-align: center;
}

h2 {
    text-align: center;
}

#quiz {
    text-indent: 10px;
    display:none;
    margin-left: 90px;
}

.button {
    border:5px;
    border-color: #000;
    border-radius:5px;
    width: 50px;
    height: 30px;
    padding-left:5px;
    padding-right: 5px;
    position: relative;
    float:right;
    background-color: #d1d1d1;
    color: black;
    /* text-align: center; */
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0 2px 0 2px;
}

.button.active {
    background-color: #9c0410;
    color: #525252;
}

#container button {
    position: relative;
    float:right;
}

.button a {
    text-decoration: none;
    color: black;
}

#container {
    width:50%;
    margin:auto;
    padding: 0 25px 40px 10px;
    background-color: #FFF;
    border:4px solid #9c0410;
    border-radius:20px;
    color: #000;
    font-weight: bold;
    box-shadow: 2px 2px 2px #888;
}

#title{
    margin-top: 50px;
}

#container ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

#prev {
    /* display:none; */
    display: flex;
    align-items:center;
    justify-content: center;
}

#start {
    /* display:none; */
    display: flex;
    align-items:center;
    justify-content: center;
    width: 90px;
}
</style>