
## [class^="heading"]{}
  - 속성 선택자, 헤딩이라는 속성을 가진 클래스를 다 선택하는 선택자


### <span tabindex="0">
- span태그가 의미없는 태그(공실)여도, 키보드 포커스를 받을 수 있도록 tabindx를 씀


### display:block;
- 인라인 요소가 블럭이 되는 순간 상위요소의 블럭만큼의 크기를 갖게됨
- line-height값까지 상속받음


### display: inline-block;
- ie6, 7에선 구현X
- 인라인 요소는 엔터(포매터 자동)를 치는 형식이 공백을 의미하게됨.
- 이떄 부모 선택자에 font-size: 0;을 주고 원래 애한테 계획된 폰트 사이즈를 별도로 입력. 공백은 0이 되게 된다.

### box-size: border-box;
 - 패딩, 보더를 포함하여 지정한 width값을 가져라. 기본 width값 계산 알고리즘 변하기
 - 특히 모바일에서 많이 사용됨


### border-radius
- border-radius: 0 0 50px 50px / 0 0 15px 15px;
- 뒤에 4개는 Y축임, 더욱 완만한 곡선으로


### font
- 속기법을 쓸때는 폰트패밀리 명이 꼭 마지막에!
- 앞에 weight, style, capital, 3개는 순서 상관 없음
- 이후에 font/line-height, font-family순으로


### 아이콘 텍스트
- http://fontello.com/
- 다운받아서, 폰트파일 업로드
- css파일에서 @font-face 따오기
- demo.html에서 모양별 이름 확인
- 확인한 이름으로 문자별 할당된 content 값을 적용
- 폰트처럼 똑같이 color, size등의 속성을 가질 수 있음.

### white-space
- white-space: nowrap; 일때는 해당하는 요소가 절대 열바꿈 하지 않도록 함
- 즉, 인라인요소인 부모선택자의 너비를 넓혀가면서까지 열바꿈 허용 안함

### text-shadow
- text-shadow: 1px 1px 0 #999, 2px 2px 0 #000;
- ,를 이용해 다중으로 입힐 수 있음
- 좌표 좌표 블러링 색상 순


### box-shadow
- x좌표 y좌표 블러 스프레드 색상 순

## Animation
1. @keyframes 정의
-  이름값을 설정하고 {}염
- 그 안에 시작점의 상태와 종료지점의 변화상태 속성을 기록
- from{}/to{} 하거나, 0%{}/100%{}로 가능

2. 적용
  1. 적용할 클래스요소에 animation: 이름 시간(duration); (필수)
  2. animation-fill-mode: forwards;를 하면 완료지점 상태를 유지
  3. animation-iteration-count: # ~ infinite;
  4. animation-direction: alternate; (순방향-역방향 순환)
  5. animation-delay: #s; 지연시키기
  6. animation-timing-function: ease-in-out; 시간조절 효과
  - cubic-bezier사이트로 내가 원하는대로 적용 가능
  7. animation-play-state: paused;
  8. 속기법] animation: text-ani 1s forwards infinite alternate ease-in-out 1s;

## **transition**
- hover가 아니라 트리거가 될 클래스에 지정. (animation과 다른점!)
- hover에는 변했을때의 속성 상태값만 선언
- 변할 속성이 여러개 가능 (,로 다중 지정 가능)
- 즉, delay 역시 다중지정이 가능하여 순차적 동작도 가능
- 모든 효과를 한번에 하고싶을때는 속성 값을 property값을 all로 해서 가능
- 그러나 다중 지정을 각각 따로 효과를 주고 싶을때에는 세트 속기법 사용
- eg] transition: height 1s 0s, background 1s 1s;


1. transition-property:  변할 속성이름 적기 (height, width등)
2. transition-duration: 변하는 시간
3. transition-delay:  지연 시간



## background
- 속성] color, image, repeat, position, size, attachment
- position: ## %주면 요소박스의 %와 배경이미지의 %둘다에 적용

### gradient
- background-image: linear-gradient(to bottom, red 0%, blue 30%, green 100%);
- 백그라운드 이미지에 할당해주어야하며, 그라디언트 타입을 불러옴
- 속기법 background: #색상, 그라디언트(방향, 색상 %)로 하게되면 그라디언트를 지원하지 않는 브라우저에선, 색상이 나타나게됨
- 이미지가 있다면 이미지, 아니면 색상이 나타나기 때문
- 괄호 안에 방향, 색상 시작점%를 순서대로 나열
- http://www.colorzilla.com/gradient-editor/


### 배경 다중 적용
- 하나의 객체에 배경을 다중으로 줄 수 있음
- 색상, 이미지를 함께 쓰는 속기법으로는 다중으로 줄수 없음
- 다중으로 적용할때는 이미지 속성 먼저 선언한 후, 색상 속성을 나중에 선언 (우선순위 문제)
- 다중으로 쓸때는 가장 위에 올려놓고 싶은 배경이미지를 가장 먼저 선언


## form
- https://www.miketaylr.com/pres/html5/forms2.html
1. form - fieldset(그루핑) - legend(타이틀)
2. 각각 type 설정을 통해 형식을 부여 (text, password, tel, etc)
3. label의 for에 input의 id값을 부여해서 연결
4. input에 placeholder속성을 통해 입력란에 미리 글씨 입력가능
5. required: 해당 input 영역이 필수로 채워져야 함을 나타냄



**CSS 꿀팁**
- 데코레이션 하는 대상과, 여백을 지정하는 대상을 구분해놓는 것이 이후에 유지보수하기 좋음
- 동작하는 대상의 클래스(class-active)는 순서상 원상태의 css보다 뒤에 나와야 함
- 유지 보수 시, css의 순서가 바뀌면 동작하지 않기 때문에 동작 클래스에는 !important를 붙이는게 좋음
- html5부터는 인라인요소 안에 블럭요소를 둘수있게됨
- 그러나 css에서 부모 인라인을 블럭화해줘야함



### calc(); 함수
- width: calc(100% - 120px)
- 전체에서 120px을 뺀 값을 자동 계산.
- 연산자 양옆에는 공란(space) 필수!


### time
- 접근성으로 기계가 날짜임을 알수있도록
- 필수속성 datetime="yy-mm-ddThh:mm:ss"


### CSS 글자수 제한
- 말줄임표 사용 시, text-overflow:ellipsis;
- text-overflow는 단독사용시 효과X
- white-space:nowrap;
- overflow:hidden;을 세트로 써야함.


## IR (image replacement) 기법
- 텍스트를 감추고, 이미지(배경)만 보여주는 방식

1. padding속성 추가
  - css에 해당 마크업에 width, height, padding(top), overflow, box-sizing로 하는 방법
  - height만큼 패딩 값을 지정하여 안보이게
  - 이 방법은 마크업 태그가 button일 경우, 브라우저마다 height가 달라보이게 됨
  - 이때에는 해당태그 부모요소에 height를 지정해주고, 해당태그에 100%로 상속받게하면 해결


2. 마크업에 빈요소(span) + position 추가
  - 해당하는 마크업안에 빈 요소를 두어, 클래스를 지정(ir-box)
  - 부모에 position relative, ir-box에 absolute로 두어 띄움
  - width:100%, height: 100%하여 부모와 크기 동일하게
  - 키 포커스를 받으려면 tabindex="0" 추가
  - 여러개가 필요한 상태에 배경이미지가 반복으로 사용한다면, 잘라서 사용하도록 -> sprite image형식
      - **타스크러너..? 걸프, 그런트러너??스프라이트 스미스?? 웹팩??**
  - 서버에 배경이미지를 요청하고 응답하는 횟수를 줄여 더욱 빠르게 사용가능  

3. 가상요소 추가



### ol > li
- ol 의 li는 list-style: none; 하는 순간, 순서의 의미를 잃어버림
- 이럴때에는 counter-increment: number; 를  사용해서 보이진 않지만 순서의 의미를 더할수있음
- counter-increment로 꾸미기가 가능해진 요소는 li:before {content: counter(number, decimal);}을 사용해 숫자가 나타나게 할수있음


### blockquote, quote
- 블럭 / 인라인 인용 태그
- 속성: cite="인용 사이트"
- css속성 {quotes: "[[" "]]";}
