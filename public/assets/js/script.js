$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;

      trigger.click(function () {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed == true) {
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });

});

function getLanguage() {
  if (localStorage.getItem('language') === null) {
    setLanguage(defaultLang);
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'languages/' + localStorage.getItem('language') + '.json', false);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const lang = JSON.parse(xhr.responseText);
      language = lang;
      setLanguageText();
    }
  };
  xhr.send();
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  getLanguage();
}

function setLanguageText() {
  $('#bio').text(language.bio);
  $('#concerts_date').text(language.concerts_date);
  $('#concerts_place').text(language.concerts_place);

  // $('#header_subTitle')[0].innerHTML = language.header_subTitle;
  // if (!_token) {showLoginMessage();}
  // // $('#languageBtn')[0].innerHTML = language.languageBtn;
  // $('#loginUsername')[0].innerHTML = language.loginUsername;
  // $('#current-user').text(localStorage.getItem('userID'));

}
