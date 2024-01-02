<template>
    <div class="con">
        <div class="info">
            <div class="cat2">
                <div style="margin-left: 30px;">
                    <h2 style="color: #fff;">somin 관리자님</h2>
                    <h2 style="color: #fff;">환영합니다.</h2>
                </div>
<!-- 
                <div style="width: 100px;">
                </div> -->
            </div>
        </div>
        <div class="container">
            <nav>
                <div class="sidebar">
                    <div class="icon-bar adminpage-bar">

                        <div>
                            <button onclick="location.href='userInfo.html'"
                                style="background-color: #fff; border-color: #fff; border-style: none;">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <circle cx="9" cy="9" r="2" stroke="#9c0410" stroke-width="1.5"></circle>
                                        <path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086
            13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="#9c0410" stroke-width="1.5"></path>
                                        <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10
            4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22
            15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876
            20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#9c0410" stroke-width="1.5">
                                        </path>
                                        <path d="M19 12H15" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path d="M19 9H14" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path d="M19 15H16" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                    </g>
                                </svg>
                                <p>회원 관리</p>
                            </button>
                        </div>
                        <div>
                            <button onclick="location.href='goodsList.html'"
                                style="background-color: #fff; border-color: #fff; border-style: none;">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V10.0002C3 7.17179 3 5.75757 3.87868 4.87889C4.64706 4.11051 5.82497 4.01406 8 4.00195"
                                            stroke="#9c0410" stroke-width="1.5"></path>
                                        <path d="M10.5 14L17 14" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path d="M7 14H7.5" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path d="M7 10.5H7.5" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path d="M7 17.5H7.5" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path d="M10.5 10.5H17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path d="M10.5 17.5H17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                        </path>
                                        <path
                                            d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
                                            stroke="#9c0410" stroke-width="1.5"></path>
                                    </g>
                                </svg>
                                <p>상품 목록</p>
                            </button>
                        </div>
                        <div>
                            <button onclick="location.href='goodsAdd.html'"
                                style="background-color: #fff; border-color: #fff; border-style: none;">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355
            20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2
            19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="#9c0410"
                                            stroke-width="1.5" stroke-linecap="round"></path>
                                        <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938
            2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652
            3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449
            7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812
            10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191
            11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801
            13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043
            14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1
            15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837
            7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#9c0410" stroke-width="1.5">
                                        </path>
                                    </g>
                                </svg>
                                <p>상품 등록</p>
                            </button>
                        </div>

                        <div>
                            <button onclick="location.href='orderM.html'"
                                style="background-color: #fff; border-color: #fff; border-style: none;">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M3.86376 16.4552C3.00581 13.0234 2.57684 11.3075 3.47767 10.1538C4.3785 9 6.14721 9 9.68462 9H14.3153C17.8527 9 19.6214 9 20.5222 10.1538C21.4231 11.3075 20.9941 13.0234 20.1362 16.4552C19.5905 18.6379 19.3176 19.7292 18.5039 20.3646C17.6901 21 16.5652 21 14.3153 21H9.68462C7.43476 21 6.30983 21 5.49605 20.3646C4.68227 19.7292 4.40943 18.6379 3.86376 16.4552Z"
                                            stroke="#9c0410" stroke-width="1.5"></path>
                                        <path
                                            d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                                            stroke="#9c0410" stroke-width="1.5"></path>
                                        <path
                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                                            stroke="#9c0410" stroke-width="1.5"></path>
                                        <path d="M8 13V17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M16 13V17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M12 13V17" stroke="#9c0410" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                                <p>배송 관리</p>
                            </button>
                        </div>

                        <div>
                            <button onclick="location.href='qnalist.html'"
                                style="background-color: #fff; border-color: #fff; border-style: none;">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M2 12C2 7.28595 2 4.92893 3.46447
        3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22
        16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2
        19.0711 2 16.714 2 12Z" stroke="#9c0410" stroke-width="1.5"></path>
                                        <path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875
        8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke="#9c0410"
                                            stroke-width="1.5" stroke-linecap="round"></path>
                                        <circle cx="12" cy="16" r="1" fill="#9c0410"></circle>
                                    </g>
                                </svg>
                                <p>문의 내역</p>
                            </button>
                        </div>

                    </div>


                </div>
            </nav>
            
                <div class="admininfo">
                    <div class="admin">
                        <table class="goodslist-table">
                            <caption>
                                <div class="list-title">
                                    <h2>상품 목록</h2><br>
                                    <div class="list-title2">
                                        <div class="search_bar">
                                            <input class="form-control" type="text" placeholder="검색">

                                            <button class="search-btn" type="submit"><i class="fa-fa-search"></i><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
                                                    <defs></defs>
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <path d="M21 21l-4.35-4.35"></path>
                                                </svg></button>
                                        </div>

                                    </div>
                                    <div class="list-title2">

                                        <div class="dropdown">
                                            <select name="languages" id="lang" class="pl">
                                                <option value="new">최근 순</option>
                                                <option value="old">오래된 순</option>
                                                <option value="low">낮은 가격</option>
                                                <option value="high">높은 가격</option>
                                                <option value="name">이름 순</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </caption>
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">이미지</th>
                                    <th scope="col">상품명</th>
                                    <th scope="col">카테고리</th>
                                    <th scope="col">가격</th>
                                    <th scope="col">해시태그</th>
                                    <th scope="col">재고</th>
                                    <th scope="col">수정</th>
                                    <th scope="col">삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr></tr>
                                <tr>
                                    <th scope="row">1</th>

                                    <td><img src="../assets/ebichu.jpg" height="50" alt="상품 이미지"></td>
                                    <td>ebichu</td>
                                    <td>hamster</td>
                                    <td>99,999</td>
                                    <td>
                                        cute
                                    </td>
                                    <td>99</td>
                                    <td><a href="#" onclick="location.href='goodsAdd.html'"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021"
                                                        stroke="#9c0410" stroke-width="1.5"></path>
                                                </g>
                                            </svg></a></td>

                                    <td><a href="#" onclick="location.href='    '"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M20.5001 6H3.5" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path
                                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077
                                      19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M9.5 11L10 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path d="M14.5 11L14 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                </g>
                                            </svg></a>
                                    </td>


                                </tr>
                                <tr></tr>
                                <tr>
                                    <th scope="row">2</th>

                                    <td><img src="../assets/ebichu.jpg" height="50" alt="상품 이미지">
                                    </td>
                                    <td>ebichu</td>
                                    <td>hamster</td>
                                    <td>99,999</td>
                                    <td>
                                        cute
                                    </td>
                                    <td>99</td>
                                    <td><a href="#" onclick="location.href='goodsUpdate.html'"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021"
                                                        stroke="#9c0410" stroke-width="1.5"></path>
                                                </g>
                                            </svg></a></td>

                                    <td><a href="#" onclick="location.href='    '"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M20.5001 6H3.5" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path
                                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077
                                    19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M9.5 11L10 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path d="M14.5 11L14 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                </g>
                                            </svg></a>
                                    </td>


                                </tr>
                                <tr></tr>
                                <tr>
                                    <th scope="row">3</th>

                                    <td><img src="../assets/ebichu.jpg" height="50" alt="상품 이미지">
                                    </td>
                                    <td>ebichu</td>
                                    <td>hamster</td>
                                    <td>99,999</td>
                                    <td>
                                        cute
                                    </td>
                                    <td>99</td>
                                    <td><a href="#" onclick="location.href='goodsUpdate.html'"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021"
                                                        stroke="#9c0410" stroke-width="1.5"></path>
                                                </g>
                                            </svg></a></td>

                                    <td><a href="#" onclick="location.href='    '"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M20.5001 6H3.5" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path
                                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077
                                  19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M9.5 11L10 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path d="M14.5 11L14 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                </g>
                                            </svg></a>
                                    </td>


                                </tr>
                                <tr></tr>
                                <tr>
                                    <th scope="row">4</th>

                                    <td><img src="../assets/ebichu.jpg" height="50" alt="상품 이미지">
                                    </td>
                                    <td>ebichu</td>
                                    <td>hamster</td>
                                    <td>99,999</td>
                                    <td>
                                        cute
                                    </td>
                                    <td>99</td>
                                    <td><a href="#" onclick="location.href='goodsAdd.html'"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021"
                                                        stroke="#9c0410" stroke-width="1.5"></path>
                                                </g>
                                            </svg></a></td>

                                    <td><a href="#" onclick="location.href='    '"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M20.5001 6H3.5" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path
                                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077
                                19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M9.5 11L10 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path d="M14.5 11L14 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                </g>
                                            </svg></a>
                                    </td>


                                </tr>
                                <tr></tr>
                                <tr>
                                    <th scope="row">5</th>

                                    <td><img src="../assets/ebichu.jpg" height="50" alt="상품 이미지">
                                    </td>
                                    <td>ebichu</td>
                                    <td>hamster</td>
                                    <td>99,999</td>
                                    <td>
                                        cute
                                    </td>
                                    <td>99</td>
                                    <td><a href="#" onclick="location.href='goodsAdd.html'"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021"
                                                        stroke="#9c0410" stroke-width="1.5"></path>
                                                </g>
                                            </svg></a></td>

                                    <td><a href="#" onclick="location.href='    '"><svg width="24px" height="24px"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M20.5001 6H3.5" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path
                                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077
                                      19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                        stroke="#9c0410" stroke-width="1.5" stroke-linecap="round">
                                                    </path>
                                                    <path d="M9.5 11L10 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                    <path d="M14.5 11L14 16" stroke="#9c0410" stroke-width="1.5"
                                                        stroke-linecap="round"></path>
                                                </g>
                                            </svg></a>
                                    </td>


                                </tr>
                            </tbody>
                        </table>

                        <nav class="page">
                            <ul>
                                <ul>
                                    <a href="#">
                                        <li class="page-item">1</li>
                                    </a>
                                </ul>
                            </ul>
                        </nav>
                    </div>
                </div>
            
        </div>

        
    </div>
</template>

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

h2 {
    margin: 20px 0;
}

ul,
li {
    list-style: none;
}

a {
    text-decoration: none;
}

:root {
    --app-container: #f7f8fa;
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
    --more-list-shadow: rgba(255, 255, 255, 0.4);
    --button-bg: #1f1c24;
    --search-area-bg: #fff;
    --star: #1ff1c2e;
    --message-btn: #fff;
}

/* html {
  width: 100%;
  height: 100vh;
  margin: 0;
} */

body {
    font-family: 'SejonghospitalBold';
    overflow: scroll;
    background-color: var(--app-container);
}

/*스크롤 바*/
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

.con {
    justify-content: space-between;
    align-items: center;
    flex: 2;
    background-color: var(--projects-section);
    border-radius: 32px;
    margin: 50px;
    flex-direction: column;
}

.container {
    margin: auto;
    height: 710px;
}

/* 네비게이션 바 */

nav {
    float: left;
    margin-left: 40px;
    margin-right: 30px;
}

nav p {
    font-family: 'seolleimcool-SemiBold';
}

.sidebar {
    width: 100px;
}

.adminpage-bar {
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* 인터넷 익스플로러 */
    scrollbar-width: none;
    /* 파이어폭스 */
}

.adminpage-bar::-webkit-scrollbar {
    display: none;
    /* 크롬, 사파리, 오페라, 엣지 */
}

.adminpage-bar {
    width: 100px;
    top: 150px;
    margin-top: 20px;
    left: 0;
    overflow-x: hidden;
}

.adminpage-bar .m,
.icon-bar p {
    color: #9c0410;
}

.adminpage-bar a {
    display: block;
    text-align: center;
    height: 60px;
    padding-top: 18px;
    padding-bottom: 18px;
    transition: all 0.3s ease;
    text-decoration: none;
}

.adminpage-bar p {
    margin: auto;
    font-size: 20px;
    padding-top: 4px;
    margin-bottom: 80px;
}

.adminpage-bar .m:hover {
    background-color: #c52922;
}

/*section 내용*/

section {
    float: left;
    margin-top: 50px;
    margin-left: 130px;
}

.info {
    background-color: #9c0410;
    width: 100%;
    height: 200px;
    justify-content: space-between;
    flex: 2;
    border-radius: 32px 32px 0px 0px;
    padding: 40px;
    display: flex;
    flex-direction: column;
}



/* 회원관리 목록 관련 css */

.admininfo {
    margin-top: 30px;
    position: relative;
    top: -60px;
}

.goodslist-table {
    margin: 0 auto;
  margin-top: 80px;
  width: 930px;
  max-width: 1200px;
  height: 600px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  border-spacing: 10px 10px;
  border-collapse: collapse;
}

.goodslist-table thead {
    position: sticky;
    top: 0px;
    border-bottom: 2px solid black;
}


.goodslist-table th {
    text-align: center;
    padding: 25px;
}

.goodslist-table tbody tr {
    height: 30px;
}

.goodslist-table button {
    width: 60px;
    padding: 4px;
    border-radius: 6px;
    color: #ffffff;
    background-color: #9c0410;
    cursor: pointer;
}

.form-control {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-left: 20px;
    color: rgb(137, 137, 137);
    border: 2px solid rgb(221, 221, 221);
    border-radius: 10px;
    margin-right: 10px;
}

.list-title {
    margin: 13px 0px;
    display: flex;
    justify-content: space-between;
    /* color: #9c0410; */
}

.list-title2 {
    vertical-align: middle;
    display: inline-flex;
    margin: auto 0px;
}

.table-title {
    text-align: center;
    background-color: #ffffff;
}

.search_bar {
    display: flex;
    margin: 0px 170px;
}

.search-btn {
    color: #fff;
    background-color: #9c0410;
    border-radius: 5px;
    border: none;
    width: 50px;
    height: 40px;
}


/*드롭박스*/

.dropdown {
    display: inline-block;
}

.dropdown:hover {
    display: block;

}

.pl {
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 13px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
}

.pl:focus {
    border: 2px solid #000;
    box-sizing: border-box;
    border-radius: 10px;
    border-radius: 10px;
}

/*페이지*/

.page {
    margin-left: 620px;
}

.page-item {
    color: #9c0410;
}
</style>