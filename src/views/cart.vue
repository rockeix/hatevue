<template>
    <div class="app-container">
    
      <div class="con">
      
        <section class="cart">
          <h1>장바구니</h1>
            <table class="cartlist">
                <form>
                    <thead>
                        <tr>
                            <td style="border: none;"><input type="checkbox"></td>
                            <td style="border: none;" colspan="2">상품정보</td>
                            <td>수량</td>
                            <td>상품금액</td>
                            <td>배송비</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr class="cartlist_detail">
                        <td><input type="checkbox"></td>
                        <td><img src="../assets/1-0.jpg" alt="상품사진"></td>
                        <td>정관장
                            <p>홍삼정 10개입</p>
                            <span class=" price">116,000원</span>
                        </td>
                        <td class="cartlist_option">
                          <p><button class="quantity">-</button>
                            <input class="quantity_num" type="number" min="1" value="1"/>
                            <button class="quantity">+</button></p>
                            
                        </td>
                        <td><span class="price">116,000원</span><br>
                            <button class="cartlist_orderbtn">주문하기</button>
                        </td>
                        <td>무료</td>
                    </tr><tr class="cartlist_detail">
                      <td><input type="checkbox"></td>
                      <td><img src="../assets/1-0.jpg" alt="상품사진"></td>
                      <td>정관장
                          <p>홍삼정 10개입</p>
                          <span class=" price">116,000원</span>
                      </td>
                      <td class="cartlist_option">
                        <p><button class="quantity">-</button>
                          <input class="quantity_num" type="number" min="1" value="1"/>
                          <button class="quantity">+</button></p>
                          
                      </td>
                      <td><span class="price">116,000원</span><br>
                          <button class="cartlist_orderbtn">주문하기</button>
                      </td>
                      <td>무료</td>
                  </tr>
                        <tr class="cartlist_detail">
                            <td><input type="checkbox"></td>
                            <td><img src="../assets/1-0.jpg" alt="상품사진"></td>
                            <td>정관장
                                <p>홍삼정 10개입</p>
                                <span class=" price">116,000원</span>
                            </td>
                            <td class="cartlist_option">
                              <p><button class="quantity">-</button>
                                <input class="quantity_num" type="number" min="1" value="1"/>
                                <button class="quantity">+</button></p>
                                
                            </td>
                            <td><span class="price">116,000원</span><br>
                                <button class="cartlist_orderbtn">주문하기</button>
                            </td>
                            <td>무료</td>
                        </tr>
                        <tr class="cartlist_detail">
                            <td style="width: 2%;"><input type="checkbox"></td>
                            <td style="width: 13%;">
                                <img src="../assets/1-0.jpg" alt="상품사진">
                            </td>
                            <td>동아제약
                                <p>슈퍼 종합 비타민 100개입</p>
                                <span class=" price">88,900원</span>
                            </td>
                            <td class="cartlist_option">
                              <p><button class="quantity">-</button>
                            <input class="quantity_num" type="number" min="1" value="1"/>
                            <button class="quantity">+</button></p>
                                <!-- <p><input type="number" class="form-control">
                                            <span class="input-group-text">개</span>
                                </p> -->
                                
                            </td>
                            <td style="width: 15%;"><span class="price">88,900원</span><br>
                                <button class="cartlist_orderbtn">주문하기</button>
                            </td>
                            <td style="width: 15%;">무료</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4"><input type="checkbox"> <button class="cartlist_optionbtn">선택상품 삭제</button>
                            </td>
                            <td colspan="2" style="text-align: center;"> 총 상품 금액 &nbsp; = &nbsp; 204,900원</td>
                        </tr>
                    </tfoot>
                </form>
            </table>
            <!-- <div class="cart_mainbtns">
                <button class="cart_bigorderbtn left">쇼핑 계속하기</button>
                <button class="cart_bigorderbtn right">주문하기</button>
            </div> -->

            <div class="cart_mainbtns" style="margin-top: 5%;">
              <button style=" border: 2px solid black;">쇼핑 계속하기</button>
              <button>주문하기</button>
          </div>
        </section>
        
      </div>
    </div>
</template>
<script>

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

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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

  /*장바구니*/

  img {
    display: block;
    width: 80%;
    height: 80%;
    margin: auto;
  }
  .cart {
    width: 80%;
    margin: auto;
    padding: 30px;
  }
  
  .cart ul {
    background-color: whitesmoke;
    padding: 30px;
    margin-bottom: 50px;
    border: whitesmoke solid 1px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 300;
  }
  
  .cart ul :first-child {
    color: limegreen;
  }

  .cartlist{
    margin: 50px auto;
  }
  
  table {
    border-top: 2px solid black;
    border-collapse: collapse;
    width: 100%;
    font-size: 20px;
  }
  
  thead {
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid black;
  }

  thead td{
    border-left: 2px solid whitesmoke;
  }
  
  tbody {
    font-size: 15px;
  }
  
  td {
    padding: 20px 0px;
    border-bottom: 1px solid lightgrey;
  }

  .cartlist_detail :nth-child(3) {
    vertical-align: top;
  }
  
  .cartlist_detail :nth-child(3) a {
    font-size: 15px;
  }
  
  .cartlist_detail :nth-child(3) p {
    margin-top: 6px;
    font-weight: bold;
  }
  
  .cartlist_smartstore {
    font-size: 15px;
    color: gray;
  }

  /*수량*/
  
  .cartlist_option {
    text-align: center;
    padding-top: 25px;
    padding-bottom: 0px;
  }
  
  .cartlist_option p {
    margin-bottom: 25px;
    position: relative;
  }

  .quantity {
    width: 20px;
    height: 25px;
    font-size: 20px;
    text-align: center;
    border: none;
    background-color: #fff;
    /* margin-top: 10px; */
}

  .quantity_num {
    width: 35px;
    height: 25px;
    font-size: 20px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 4px;
}
  
  .cartlist_optionbtn {
    background-color: white;
    font-size: 15px;
    border: 2px solid #9c0410;
    border-radius: 10px;
    padding: 7px;
    margin-left: 20px;
  }
  
  .cartlist_detail :nth-child(4),
  .cartlist_detail :nth-child(5),
  .cartlist_detail :nth-child(6) {
    border-left: 2px solid whitesmoke;
  }
  
  .cartlist_detail :nth-child(5),
  .cartlist_detail :nth-child(6) {
    text-align: center;
  }
  
  .cartlist_detail :nth-child(5) button {
    background-color: white;
    border: 2px solid #9c0410;
    color: black;
    border-radius: 10px;
    padding: 4px 8px;
    font-size: 12px;
    margin-top: 5px;
  }

  .price {
    font-weight: bold;
  }
  
  .cart_mainbtns {
    width: 420px;
    height: 200px;
    padding-top: 40px;
    display: block;
    margin: auto;
  }
  
  .cart_bigorderbtn {
    width: 200px;
    height: 50px;
    font-size: 16px;
    margin: auto;
    border-radius: 15px;
  }
  
  .cart_bigorderbtn.left {
    background-color: white;
    border: 2px lightgray solid;
  }
  
  .cart_bigorderbtn.right {
    background-color: #9c0410;
    color: white;
    border: none;
  }

  .form-control {
    width: 50px;
  }

/*주문버튼 */
.cart_mainbtns {
  text-align: center;
  margin-bottom: 50px;
}

.cart_mainbtns button {
  width: 180px;
  height: 40px;
  background-color: #fff;
  border: 2px solid #C52922;
  border-radius: 15px;
  margin-right: 10px;
  font-size: large;
}
</style>