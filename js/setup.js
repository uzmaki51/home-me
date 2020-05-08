/* 画像ロールオーバー（ない場合は透明化） */
$(function(){
var currentFile = location.href.split('/').pop();
var ua = navigator.userAgent;

$('a img').each(function(){
	var imgSrc = $(this).attr('src');
	if(imgSrc.match(/(.*)_off(\..*)/)){
		var repSrc = RegExp.$1+'_on'+RegExp.$2;
		$('<img />').attr('src',repSrc);
		$(this).hover(function(){
			$(this).attr('src',repSrc);
			$(this).css({opacity: '1',filter: 'alpha(opacity=100)'});
		},function(){
			$(this).attr('src',imgSrc);
		});
		}else if(!$(this).hasClass('not')){
			$(this).hover(function(){
			$(this).css({
				opacity: '0.7',
				filter: 'alpha(opacity=60)'
			});
		},function(){
			$(this).css({
				opacity: '1',
				filter: 'alpha(opacity=100)'
		});
		}
		);
	}
	});
});

/* TELボタン */
$(function() {
var ua = navigator.userAgent;
if (ua.indexOf('iPhone') < 0 && ua.indexOf('Android') < 0) { $('a[href^="tel:"]').css({
"cursor": "default",
"text-decoration": "none",
"opacity": "1"}).click(function (event) { event.preventDefault(); });}
});

/* ナビゲーション */
$(function() {
var $header = $('header');
$('header .navToggle').click(function(){
	$header.toggleClass('open');
});
});

$(document).ready(function(){
$(".cmn-side").hide();
$(window).on("scroll", function() {
if ($(this).scrollTop() > 100) {
$('.cmn-side').fadeIn();
} else {
$('.cmn-side').fadeOut();
}
});
});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

/* ウインドウリサイズ */
$(document).ready(function() {
	funcResize();
$(window).resize(function() {
	funcResize();
});
  
function funcResize() {
var wid = $(window).width();

//画像の切替
if( wid < 767 ){
	$('.switch').each(function(){
		$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
	});
}else{
	$('.switch').each(function(){
		$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
	});
}
//sp_menu(画像の置換)
if( wid <= 767 ){
	$('header nav').each(function(){
		$(this).addClass('sp-nav').removeClass('pc-nav');
	});
}else {
	$('header nav').each(function(){
		$(this).addClass('pc-nav').removeClass('sp-nav');
	});
}
};
  
});

