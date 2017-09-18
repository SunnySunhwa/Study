

# display: flex;
- http://flexboxfroggy.com/
- ie 11이상 부터 구현 가능 (원활하지 않음)
- flex아이템은 자식요소가 부모요소의  width값을 넘어도 float처럼 레이아웃이 틀어지지 않음
- 부모 요소에 주어야함
- 저절로 비율값으로 축소되서 나타남
- 열을 변경하고 싶다면, flex-wrap을 사용

### A, flex-direction
- row / cloumn이냐에 따라 가로 or 세로가 메인축이 됨
- 메인축의 반대가 교차축이 됨


### A, justify-content
- '메인축'을 기준으로 움직임
- flex-direction이 reverse라면 기준축 역시 함께 반전됨
- 따라서  justify-content 값 역시 함께 반전


### A, align-items
- '교차축'을 기준으로 움직임


### order
- 기본값: 0
- 마크업 순서를 바꾸고 싶을때

### align-content:
- flex-wrap속성을 썼을때만 사용가능
- 다중정렬 간격을 조정함


# display: grid
- http://cssgridgarden.com/
- grid 칸이 아니라, 라인을 기준으로 움직임.
- 음수값을 줄 수 있음
- span으로 연속성 가능
- [속기법]grid-area: row-start / column-start / row-end / column-end;


# display: float
- 부모가 자식요소의 높이를 감지하지 못하게되는 문제가 발생
- ie에서 호환되기 때문에 레이아웃을 잡는 고전적 방법


## 자식요소의 높이 감지못하는 float 문제 해결방안
1. 부모에게 overflow: hidden
  - 넘어가는 것을 안보이게 하려는 감지를 위해 한번 더 검사하기 때문에, 확인

2. 마크업 상, 뒤에 나오는 요소에 clear: both
  - 블록요소에만 가능함
  - float값의  height만큼 마진값을 강제로 갖게됨
  - 마진병합현상이 일어나기때문에 float값을 가진 요소가 height: 100px이라면 50px의 마진을 위해 150px을 주어야함

  - *마진은 일반적 flow상황에서는 마진병합이 일어나지만,
  float에서는 각자의 값을 가진다.*

3. 부모에게 선택자::after를 주는법
  - 실제 마크업이 아닌, 가상 마크업을 추가하는 법 (드래그X)
  - 속성값 content:"";를 가져야만 의미가 생김
  - 인라인 요소기때문에, 전체열을 원한다면  display:block설정
  - clear:both를 주어 float를 가진 요소의 height만큼 강제 마진 추가로 띄울수있음
  - *after는 같은 자식요소로 취급되기 때문에,  후에 flex,  space-between 으로 display 방법을 바꿔도 원하는 마지막 요소가 오른쪽 벽에 붙지 않는다. 꼭! 삭제해줄 것*


## Position 속성값 특징
  1. static
    - 기본 값

  2. relative
    - 자기가 있었던 자리를 기준으로 움직임
    - 허공에 살짝 뜨지만, 흐름을 깨지 않음
    - 자기가 있었던 자리가 비어 있음

  3. fixed
    - 레이어가 생기듯 허공에 뜸
    - 뷰 포트(화면)를 기준으로 움직임
    - 자기가 있었던 자리를 잃어버림

  4. absolute
    - 레이어가 생기듯 허공에 뜸
    - 자기가 있었던 자리를 잃어버림
    - 상위요소를 기준으로 움직임
    - 그러나 상위요소가 static일 경우 무시, 그 위 상위요소로 올라감
    - 즉, 기준점으로 원하는 상위 요소에 position:relative를 줌  
      (다른 속성값은 전체 레이어에 영향을 미칠 수 있기 때문에)
    - 크기값(width) 역시 기준값을 상속받는다.
    - 인라인 요소였어도 absolute하는순간 블록화 됨
