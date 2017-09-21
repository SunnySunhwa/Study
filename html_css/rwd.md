# 반응형

## img 처리
- 부모, img를 따로 줌
- 부모사이즈가 늘어나고 줄어남에 따라 img를 맞춤
- img{width: 100%, height: auto;}
- height: auto; 필수 선언


1. img의 속성 srcset, sizes 활용하기
  - 같은 이미지 몇개를 준비해서 ratio에 따라 다른 이미지를 호출 (2x, 4x..)
2. picture태그 활용
  - 뷰포트에 따라 다른 이미지 보여주기
  - 지원하지 않는다면, img태그를 보여줘라를 덧붙여 접근성 주기) -ie11 지원X
  - picturefill??? 검색해서 script붙여주면 호환되도록 지원해줌

## background 처리
-   background: orange url("images/logo.png") no-repeat 0 0/contain;
- 포지션 뒤에 /하고 100% 100% 또는 키워드로 cover, contain 올수있음
- cover:   세로 기준으로 꽉 차게
- contain:  가로 기준으로 꽉 차게 (세로는 Auto값)
- 보통 반응형에 많이쓰이나, 배경은 처리하기가 어려워 가상의 이미지(src, alt)값을 주지 않고, ir기법으로 처리하듯 처리함


## grid
- http://www.vfinspections.com/ggs/goldengridsystem.com/
- https://960.gs/ (사이트별 사용 컬럼수 확인 가능)
- 가상의 그리드가 있다고 생각하고 제작
- 가로칸: vertical rhythm.
- 세로줄: column.
- column은 보통 2, 4, 8, 12, 16, 24를 많이 사용
