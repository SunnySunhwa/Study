// .main-menu > li에 마우스를 올렸을때 해당요소 하위에 있는 자식요소인 .sub-menu에
// 클래스를  toggle시킨다 ( sub-menu-active)
$(document).ready(function() {
  var menu = $('.main-menu > li');
  var span = $('.main-menu span');
  var sub_last_item = $('.sub-menu li:last-child a');
  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('sub-menu-active');
  });
  //.main-menu span에 키보드 포커스가 진입했을 때, 형제 메뉴를 찾아서
  //토글이 아니라, 계속 켜져있어야하기 때문에 addClass!
  span.focusin(function() {
    $(this).siblings('.sub-menu').addClass('sub-menu-active');
  });
  //add class만 해서 계속 켜져있음. 마지막 li아이템에 a에 갔을때는 클래스를 없애라!
  sub_last_item.focusout(function() {
    $(this).parents('.sub-menu').removeClass('sub-menu-active');
  });
  var tab = $('.board h2');
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-active').siblings().removeClass('board-active');
  });
});