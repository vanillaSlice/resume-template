'use strict';

window.addEventListener('load', function() {

  var pageBtns = [].slice.call(document.querySelectorAll('input[name="page"]'));
  var pages = [].slice.call(document.querySelectorAll('.page'));

  // show page depending on which button has been clicked
  pageBtns.forEach(function(btn) {
    btn.addEventListener('change', function(e) {
      pages.forEach(function(page) {
        page.classList.toggle('hidden', page.id !== e.target.value);
      });
    });
  });

});