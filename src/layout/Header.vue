<template>
<div class="app-container">
      <div class="app-header">
        <div class="app-header-left">
          <router-link class="app-name" to="/">YACJANGSU</router-link>
          <div class="search-wrapper">
            <input class="search-input" type="text" placeholder="Search">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="lg" style="color: #000000;" />
          </div>
        </div>
        <div class="app-header-right">
          <button class="admin-btn" onclick="location.href='userInfo.html'">
            <font-awesome-icon :icon="['fas', 'gear']" size="2xl" style="color: #000000;" />
        <span class="tooltip">관리자모드</span>
      </button>
          <router-link to="/login">
          <button class="join-btn">
            <font-awesome-icon :icon="['fas', 'user-plus']" size="2xl" style="color: #000000;" />
        <span class="tooltip">로그인/회원가입</span>
          </button>
          </router-link>
          <router-link to="/cart">
          <button class="cart-btn">  
            <font-awesome-icon :icon="['fas', 'cart-shopping']" size="2xl" style="color: #000000;" />
        <span class="tooltip">장바구니</span>          
          </button>
        </router-link>
          <button class="profile_btn" onclick="location.href='../my/mypage.html'">
            <font-awesome-icon :icon="['fas', 'circle-user']" size="2xl" style="color: #000000;" />
        <span class="tooltip">마이페이지</span>
          </button>
          <button class="logout_btn" onClick="location.href='../main/main.html'">
            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" size="2xl" style="color: #000000;" />
        <span class="tooltip">로그아웃</span>
      </button>
        </div>
      </div>
  
      <div class="app-middle">
        <button onclick="location.href='productlist.html'">유산균</button>
        <button>비타민</button>
        <button>오메가</button>
        <button>홍삼</button>
        <button onclick="location.href='event.html'" style="margin-right: 0px;">이벤트</button>
      </div>
    </div>

</template>

<script>
export default {
    name : 'header'
}
</script>

<style>
.app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--app-container);
    transition: 0.2s;
    max-width: 1800px;
  }
  
  .app-container button,
  .app-container input,
  .app-container optgroup,
  .app-container select,
  .app-container textarea {
    font-family: 'SejonghospitalBold';
  }
  
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    position: relative;
  }
  
  .app-header-left,
  .app-header-right {
    display: flex;
    align-items: center;
  }
  
  .app-header-left {
    flex-grow: 1;
  }

  .app-name {
    font-family: 'ChosunCentennial';
    color: #9c0410;
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
  }
  
  .app-header-right button {
    margin-left: 10px;
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

  
  .tooltip {
    position: absolute;
    bottom: -10px;
    padding: 0 12px;
    height: 27px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 13px;
    line-height: 27px;
    white-space: nowrap;
    transition: opacity 0.2s;
    opacity: 0;
    pointer-events: none;
  }

  .admin-btn{
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

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      .tooltip {
        opacity: 1;
      }
    }
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
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      .tooltip {
        opacity: 1;
      }
    }
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
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      .tooltip {
        opacity: 1;
      }
    }
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
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      .tooltip {
        opacity: 1;
      }
    }
  }

  .logout_btn {
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
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      .tooltip {
        opacity: 1;
      }
    }
}
  
  /*카테고리 버튼*/
  
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
    font-size: 15px;
  }
</style>