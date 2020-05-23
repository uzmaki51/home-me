$(function() {
    if(window.innerWidth <= 1000) {
        var top_menu_height = $('#section-top-menu').height();
        var main_height = window.innerHeight;
        $('#section-top-menu').css('top', (main_height - top_menu_height) + 'px');
    }
})
$(window).scroll(function() {
        var top_menu_height = $('#section-top-menu').height();
		console.log(top_menu_height);
        var main_height = window.innerHeight;
		$('#section-top-menu').css('transition', '0.5s');
        $('#section-top-menu').css('top', (main_height - top_menu_height) + 'px');
})
$( window ).resize(function() {
    var top_menu_height = $('#section-top-menu').height();
		console.log(top_menu_height);
        var main_height = window.innerHeight;
		$('#section-top-menu').css('transition', '0.5s');
        $('#section-top-menu').css('top', (main_height - top_menu_height) + 'px');
});

function showMore() {
    $('.sp-invisible').css('display', 'flex');
}