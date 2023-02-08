const template = /*html*/`

<section class="detail-info">
        <figure class="image">
          <img alt="${products[index].image.alt}" class="product-img" src="../../assets/${products[index].image.thumbnail}"/>
        </figure>
        <article class="product-info">
          <div class="product-info-heading">
          <div type="text" class="product-heading__delivery">샛별 배송</div>
          <div class="product-heading__title">
            <h1 class="product-title-name">${products[index].name}</h1>
            <h2 class="product-title-description">${products[index].description}</h2>
          </div>
          <h2 class="product-heading__price"> 
            <span class="product-price">${products[index].price}</span>원
          </h2>
          <span class="product-heading__login">로그인 후, 적립 혜택이 제공됩니다.</span>
        </div>
        

        <div class="product-more">
          <dl class="product-more-set">
            <dt class="more__title">배송</dt>
            <dd class="more__info">
              <div type="text" class="more__info__kindOf">샛별배송</div>
              <div type="text" class="more__info__contents">23시 전 주문 시 내일 아침 7시 전 도착 <br>(대구 부산 울산 샛별배송 운영시간 별도 확인)</div>
            </dd>
          </dl>
          <dl class="product-more-set">
            <dt class="more__title">판매자</dt>
            <dd class="more__info">칼리</dd>
          </dl>
          <dl class="product-more-set">
            <dt class="more__title">포장타입</dt>
            <dd class="more__info">
              <div type="text" class="more__info__kindOf">상온 (종이포장)</div>
              <div type="text" class="more__info__contents">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</div>
            </dd>
          </dl>
        </dl>
        <dl class="product-more-set">
          <dt class="more__title">판매단위</dt>
          <dd class="more__info">1봉</dd>
        </dl>
        <dl class="product-more-set">
          <dt class="more__title">중량/용량</dt>
          <dd class="more__info">123g<sup class="multi">*</sup>4봉</dd>
        </dl>
        <dl class="product-more-set">
          <dt class="more__title">원산지</dt>
          <dd class="more__info">상세페이지 별도표기</dd>
        </dl>
        <dl class="product-more-set">
          <dt class="more__title">알레르기정보</dt>
          <dd class="more__info">-대두, 밀, 쇠고기 함유
          <br>-계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조
          </dd>
        </dl>
      
        <div class="buy">
          <div class="select">
            <dl class="product-more-set">
              <dt class="more__title">상품선택</dt>
              <dd class="more__info">
                <div class="more__info-selectWrapper">
                  <div class="selectWrapper-left">
                    <div class="selectWrapper-left__text">${products[index].name}</div>
                    <div class="amount">
                      <input type="button" class="minusbtn" />
                      <span class="quantity-number">1</span>
                      <input type="button" class="plusbtn" />
                    </div>
                  </div>
                  <div class="select-price">${products[index].price}</div>
                </div>
                <div class="select-total select-totalWrapper">
                  <div class="totalPrice">
                    <span class="합계">총 상품금액: </span>
                    <span class="sum">${products[index].price}</span>
                  </div>
                  <div class="reward">
                    <span class="rewardbtn">적립</span>
                    <span class="won">로그인 후, 적립 혜택 제공</span>
                  </div>
                </div>
                <div class="select-addCart">
                  <div class="addCart__left">
                    
                  </div>
                </div>
              </dd>
            </dl>
          </div>

        </div>

        </div>
      </section>
`