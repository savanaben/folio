(function toggleNav() {
  var $btns = $('.Nav-btn--open, .Nav-btn--close'),
      $btnOpen = $('.Nav-btn--open'),
      $btnClose = $('.Nav-btn--close'),
      $nav = $('nav'),
      $html = $('html'),
      hiddenClass = 'is-hidden',
      overflowClass = 'is-no-overflow';

  $btns.click(function() {
    $nav.toggleClass(hiddenClass);
    $html.toggleClass(overflowClass);

    if ($nav.hasClass(hiddenClass)) {
      $btnOpen.removeAttr('tabindex');
      $btnOpen.focus();
    } else {
      setTimeout(function(){
        $btnOpen.attr('tabindex', -1);
        $btnClose.focus();
      }, 300);
    }
  });
}());

(function toggleArticles() {
  var $tile = $('.Tile'),
      $article = $('article'),
      $scrim = $('.Article-scrim'),
      $closers = $('.Footer-btn--back, header a'),
      $html = $('html'),
      hiddenClass = 'is-hidden',
      overflowClass = 'is-no-overflow';

  $tile.click(function() {
    $scrim.removeClass(hiddenClass);
    setTimeout(function(){
      $html.addClass(overflowClass);
      $article.removeClass(hiddenClass);
      $scrim.addClass(hiddenClass);
    }, 300);
  });

  $closers.click(function() {
    $scrim.removeClass(hiddenClass);
    setTimeout(function(){
      $html.removeClass(overflowClass);
      $article.addClass(hiddenClass);
      $scrim.addClass(hiddenClass);
    }, 300);
  });
})();
