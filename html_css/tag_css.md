
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
- 좌표 좌표 블러링 확장정도 색상 순

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
