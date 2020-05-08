/* フェイスブック */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
  var timer = false;
  $(window).resize(function() {
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        boxWidth=$('#pagePlugin').width();
        currentWidth=$('#pagePlugin .fb-page').attr('data-width');
        if(boxWidth != currentWidth){
          $('#pagePlugin .fb-page').attr('data-width', boxWidth);
          FB.XFBML.parse(document.getElementById('pagePlugin'));
        }
      }, 200);
  });