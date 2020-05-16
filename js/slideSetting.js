$(function() {
    if(window.innerWidth <= 1000) {
        var top_menu_height = $('#section-top-menu').height();
        var main_height = window.innerHeight;
        $('#section-top-menu').css('top', (main_height - top_menu_height) + 'px');
    }
})
function showMore() {
    $('.sp-invisible').css('display', 'flex');
}