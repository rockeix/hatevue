<template>
     <div class="app-container">
<div class="container" id="container">
   <div class="form-container sign-up-container">
      <form action="#">
         <h1>회원가입</h1>
         <div class="social-container">
            <a href="#" class="kakao"><img src="../assets/btn_kakao.png"></a>
            <a href="#" class="naver"><img src="../assets/btn_naver.png" id="naverIdLogin"></a>
         </div>
         <span>또는 이메일을 통해 가입</span>
         <input type="name" placeholder="이름" />
            <input type="id" placeholder="아이디"/>
            <input type="password" placeholder="비밀번호" />
         <input type="email" placeholder="이메일" />
            <input type="birth" placeholder="생년월일(예:990913)"/>
            <input type="phone" placeholder="휴대폰번호"/>
            <input type="zipcode" placeholder="우편번호"/>
            <input type="adr1" placeholder="주소"/>
            <input type="adr2" placeholder="상세주소"/>
         <button>회원가입</button>
      </form>
   </div>
   <div class="form-container sign-in-container">
      <form action="#">
         <h1>로그인</h1>
         <div class="social-container">
            <a href="#" class="kakao"><img src="../assets/btn_kakao.png" @click="kakaoLogin"></a>
            <a href="#" class="naver"><img src="../assets/btn_naver.png" @click="naverlogin"></a>
         </div>
         <span>또는 계정을 사용합니다</span>
         <input type="id" @keyup.enter="login()" placeholder="아이디" v-model="user_id" />
         <input type="password" @keyup.enter="login()" placeholder="비밀번호" v-model="user_pw" />
         <router-link to="/find">ID PW 찾기</router-link>
         <button type="button" @click="login">로그인</button>
      </form>
   </div>
   <div class="overlay-container">
      <div class="overlay">
         <div class="overlay-panel overlay-left">
            <h1>돌아온 걸 환영해요!</h1>
            <p>계속 연결하려면 개인 정보로 로그인하십시오.</p>
            <button class="ghost" id="signIn" @click="removeActive">로그인</button>
         </div>
         <div class="overlay-panel overlay-right">
            <h1>안녕하세요!</h1>
            <p>저희와 함께 건강한 생활을 시작해요.</p>
            <button class="ghost" id="signUp"  @click="addActive">회원가입</button>
         </div>
      </div>
   </div>
</div>
</div>

</template>
<script>
// import axios from 'axios';

  export default {

// data() {
//         return {
//             user_id: '',
//             naver_id: '',
//             user_pw: '',
//             naverLogin: [],
//         };
//     },
//     computed: {
//         user() {
//             return this.$store.state.user; // user 정보가 바뀔 때마다 자동으로 user() 갱신
//         },
//     },
//     mounted() {
//         console.log(this.naverLogin.user);
//         this.naverLogin = new window.naver.LoginWithNaverId({
//             clientId: "qwyajCzxKvMqShbX_X8A",
//             callbackUrl: "http://localhost:8080/",
//             isPopup: false,
//             loginButton: {
//                 color: "green", type: 1, height: 45,
//             },
//         });
//         this.$store.commit("naverLogin", this.naverLogin);

//         this.naverLogin.init();

//         this.naverLogin.getLoginStatus((status) => {
//             if (status) {
//                 console.log(status);
//                 console.log(this.naverLogin.user.nickname);

//                 const email = this.naverLogin.user.email;
//                 const id = this.naverLogin.user.id;
//                 const nick = this.naverLogin.user.nickname;

//                 this.naver_id = id;
//                 console.log(email)
//                 console.log(nick)

//             } else {
//                 console.log("callback처리 실패");
//             }
//         });

//     },
    methods: {
        // onSubmitForm() {
        //     if (!this.validationCheck()) {
        //         return;
        //     }
        //     axios({
        //         url: "http://localhost:3000/auth/join_process",
        //         method: "POST",
        //         data: {
        //             user_id: this.user_id,
        //             user_nick: this.user_nick,
        //             user_email: this.user_email,
        //             user_pw: this.user_pw,
        //             user_mobile: this.user_mobile,
        //             user_zipcode: this.user_zipcode,
        //             user_adr1: this.user_adr1,
        //             user_adr2: this.user_adr2,
        //         },
        //     })
        //         .then(res => {
        //             if (res.data.message == 'already_exist_id') {
        //                 this.$swal("이미 존재하는 아이디입니다.")
        //             }
        //             else if (res.data.message == 'DB_error') {
        //                 this.$swal("DB 에러 발생")
        //             }
        //             else {
        //                 this.$swal({
        //                     position: 'top',
        //                     icon: 'success',
        //                     title: '회원가입이 완료되었습니다!',
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 })
        //                 this.$router.push({ path: '/login' }); // 로그인 화면으로 이동
        //             }
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        // },
        addActive() {
      const container = document.getElementById('container');
      container.classList.add("right-panel-active");
    },
    removeActive() {
      const container = document.getElementById('container');
      container.classList.remove("right-panel-active");
    }
//         login() {
//             axios({
//                 url: "http://localhost:3000/auth/login_process",
//                 method: "POST",
//                 data: {
//                     user_id: this.user_id,
//                     user_pw: this.user_pw
//                 },
//             })
//                 .then(res => {
//                     if (res.data.message == 'undefined_id') {
//                         this.$swal("존재하지 않는 아이디입니다.")
//                     }
//                     else if (res.data.message == 'incorrect_pw') {
//                         this.$swal("비밀번호가 틀렸습니다.")
//                     }
//                     else {
//                         this.$store.commit("user", { user_id: this.user_id, user_no: res.data.message })
//                         this.$swal({
//                             position: 'top',
//                             icon: 'success',
//                             title: '로그인 성공!',
//                             showConfirmButton: false,
//                             timer: 1000
//                         })
//                         this.$router.push({ path: '/' });  // 메인 화면으로 이동
//                     }
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 })
//         },

//         goToFind() {
//             this.$router.push({ path: 'find' });
//         },
//         //=====================================================카카오==========================================//0
//         kakaoLogin() {

//             window.Kakao.Auth.login({
//                 scope: "profile_nickname, account_email",
//                 success: this.getKakaoAccount,
//             });
//         },
//         getKakaoAccount() {
//             window.Kakao.API.request({
//                 url: "/v2/user/me",
//                 success: (res) => {
//                     const kakao_account = res.kakao_account;
//                     const email = kakao_account.email; //카카오 이메일
//                     const nickname = kakao_account.profile.nickname;
//                     // this.user_id = email

//                     axios({
//                         url: "http://localhost:3000/auth/kakaoLoginProcess",
//                         method: "POST",
//                         data: {
//                             user_id: email,
//                             user_nick: nickname
//                         },
//                     }).then(res => {
//                         if (res.data.message == '저장완료') {

//                             this.$swal({
//                                 position: 'top',
//                                 icon: 'success',
//                                 title: '회원가입 성공!',
//                                 showConfirmButton: false,
//                                 timer: 1000
//                             })

//                         }
//                         else {
//                             this.$store.commit("user", { user_id: email, user_no: res.data.message })
//                             this.$swal({
//                                 position: 'top',
//                                 icon: 'success',
//                                 title: '로그인 성공!',
//                                 showConfirmButton: false,
//                                 timer: 1000


//                             }).then(() => {
//                                 window.location.href = "http://localhost:8080";
//                             })

//                         }
//                     })
//                         .catch(err => {
//                             console.log(err);
//                         })


//                 },
//                 fail: (error) => {
//                     // this.$router.push("/errorPage");
//                     console.log(error);
//                 },
//             });

//         },


//         //==========================================================네이버==========================================//
//         naverlogin() {
//             console.log("로그인함수 실행됨")
//             axios({
//                 url: "http://localhost:3000/auth/naverlogin",
//                 method: "POST",
//                 data: {
//                     // naverlogin: this.naverLogin.accessToken.accessToken,
//                     naverlogin: this.naverLogin.user,

//                 },
//             })
//                 .then(res => {

//                     if (res.data.message == '저장완료') {

//                         this.$swal({
//                             position: 'top',
//                             icon: 'success',
//                             title: '회원가입 성공!',
//                             showConfirmButton: false,
//                             timer: 1000
//                         });



//                     } else {
//                         this.$store.commit("user", { user_id: this.naver_id, user_no: res.data.message })

//                         this.$swal({
//                             position: 'top',
//                             icon: 'success',
//                             title: '로그인 성공!',
//                             showConfirmButton: false,
//                             timer: 1000,

//                         }).then(() => {
//                             window.location.href = "http://localhost:8080";
//                         })


//                     }
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 })
//         },
//     },
}
  };
</script>
<style scoped>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");
@font-face {
    font-family: 'ONE-Mobile-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Regular.woff') format('woff');
    font-weight: normal;
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
    font-family: "DM Sans", sans-serif;
    overflow: scroll;
    display: flex;
    justify-content: center;
    background-color: var(--app-container);
}

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
.app-name {
    /* color: var(--main-color); */
    color: #9c0410;
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
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
  .app-container button, .app-container input, .app-container optgroup, .app-container select, .app-container textarea {
    font-family: "DM Sans", sans-serif;
  }
  
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    position: relative;
}
.app-header-left, .app-header-right {
    display: flex;
    align-items: center;
}
.app-header-left {
    flex-grow: 1;
}
.app-header-right button {
    margin-left: 10px;
}


.app-middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 300px 24px 300px;
    position: relative;
}

.app-middle button {
    width: 100px;
    height: 35px;
    border: 0;
    border-radius: 5px;
    background-color: #9c0410;
    color: #fff;
    font-family: ONE-Mobile-Regular;
    font-size: 15px;
}

.menu-btn {
    color: var(--main-color);
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-wrapper {
    border-radius: 20px;
    background-color: var(--search-area-bg);
    padding-right: 12px;
    margin: 0 auto;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    color: var(--light-font);
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
}

.search-input {
    border: none;
    flex: 1;
    outline: none;
    height: 100%;
    padding: 0 20px;
    font-size: 16px;
    background-color: var(--search-area-bg);
    color: var(--main-color);
}
.search-input:placeholder {
    color: var(--main-color);
    opacity: 0.6;
}

.join-btn {
    color: var(--main-color);
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-btn {
    color: var(--main-color);
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile_btn {
    color: var(--main-color);
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
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
  
  .con-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
  }
  
  .con-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: var(--main-color);
  }
  .con-header p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    opacity: 0.9;
    margin: 0;
    color: var(--main-color);
  }
  .con-header .time {
    font-size: 20px;
  }
footer{
    width: 100%;
}
.form{
    margin: 0;
    padding: 0;
    left: 0;   
    bottom: 0;
    list-style: none;
    text-decoration: none;
    /* border: solid 1px red; */
}
.f_add{
    position: relative;
    height: auto;
    width: 100%;
    left: 0;       
    bottom: 0; 
    padding: 10px;
    background: #f2f2f2;
}
.f_add p{
    margin-left: 20px;
    line-height: 24px;
    font-size: 12px;
    color: rgb(173, 173, 173);
}

      

/* body {
    height: 100%;
   background: #f6f5f7;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-family: 'Montserrat', sans-serif;
   height: 100vh;
   margin: -20px 0 50px;
} */

.overlay-container h1 {
   font-weight: bold;
   margin: 0;
}

.overlay-container h2 {
   text-align: center;
}

.overlay-container p {
   font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px;
}

.container span {
   font-size: 12px;
}

.container a {
   color: #333;
   font-size: 14px;
   text-decoration: none;
   margin: 15px 0;
}

.container button {
   border-radius: 20px;
   border: 1px solid #9c0410;
   background-color: #9c0410;
   color: #FFFFFF;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
}

.container button:active {
   transform: scale(0.95);
}

.container button:focus {
   outline: none;
}

.container button.ghost {
   background-color: transparent;
   border-color: #FFFFFF;
}

.container form {
   background-color: #FFFFFF;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 0 50px;
   height: 100%;
   text-align: center;
}

.container input {
   background-color: #eee;
   border: none;
   padding: 12px 15px;
   margin: 8px 0;
   width: 100%;
}

.container {
   background-color: #fff;
   border-radius: 10px;
     box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
         0 10px 10px rgba(0,0,0,0.22);
   position: relative;
   overflow: hidden;
   width: 1000px;
   margin: 0 auto;
   max-width: 100%;
   min-height: 750px;
   max-width: 1040px;
}

.form-container {
   position: absolute;
   top: 0;
   height: 100%;
   transition: all 0.6s ease-in-out;
   /* overflow: scroll; */
}

.sign-in-container {
   left: 0;
   width: 50%;
   z-index: 2;
}

.container.right-panel-active .sign-in-container {
   transform: translateX(100%);
}

.sign-up-container {
   left: 0;
   width: 50%;
   opacity: 0;
   z-index: 1;
   /* overflow: scroll; */
}

.container.right-panel-active .sign-up-container {
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
   animation: show 0.6s;
}

@keyframes show {
   0%, 49.99% {
      opacity: 0;
      z-index: 1;
   }
   
   50%, 100% {
      opacity: 1;
      z-index: 5;
   }
}

.overlay-container {
   position: absolute;
   top: 0;
   left: 50%;
   width: 50%;
   height: 100%;
   overflow: hidden;
   transition: transform 0.6s ease-in-out;
   z-index: 100;
}

.container.right-panel-active .overlay-container{
   transform: translateX(-100%);
}

.overlay {
   background: #9c0410;
   background: -webkit-linear-gradient(to right, #9c0410, #9c0410);
   background: linear-gradient(to right, #9c0410, #9c0410);
   background-repeat: no-repeat;
   background-size: cover;
   background-position: 0 0;
   color: #FFFFFF;
   position: relative;
   left: -100%;
   height: 100%;
   width: 200%;
     transform: translateX(0);
   transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
     transform: translateX(50%);
}

.overlay-panel {
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 0 40px;
   text-align: center;
   top: 0;
   height: 100%;
   width: 50%;
   transform: translateX(0);
   transition: transform 0.6s ease-in-out;
}

.overlay-left {
   transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
   transform: translateX(0);
}

.overlay-right {
   right: 0;
   transform: translateX(0);
}

.container.right-panel-active .overlay-right {
   transform: translateX(20%);
}

.social-container {
   margin: 20px 0;
}

.social-container a {
   border: 1px solid #DDDDDD;
   border-radius: 50%;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   margin: 0 5px;
   height: 40px;
   width: 40px;
}
/* 
footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
} */

.content {
   max-width: 1040px;
   width: 80%;
   margin: auto;
   padding-top: 30px;
 
 }

</style>