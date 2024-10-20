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
  // $('#home').text(language.home);
  // $('#news').text(language.news);
  // $('#about').text(language.about);
  // $('#events').text(language.events);
  // $('#gallery').text(language.gallery);
  // $('#contact').text(language.contact);
  $('#card1_question').text(language.card1_question);
  $('#card1_answer').text(language.card1_answer);
  $('#card1_text').text(language.card1_text);
  $('#card2_question').text(language.card2_question);
  $('#card2_answer').text(language.card2_answer);
  $('#card2_text').text(language.card2_text);
  $('#card3_question').text(language.card3_question);
  $('#card3_answer').text(language.card3_answer);
  $('#card3_text').text(language.card3_text);
  $('#card4_question').text(language.card4_question);
  $('#card4_answer').text(language.card4_answer);
  $('#card4_text').text(language.card4_text);
  $('#card5_question').text(language.card5_question);
  $('#card5_answer').text(language.card5_answer);
  $('#card5_text').text(language.card5_text);
  $('.card_link').text(language.card_link);
  $('#bio').text(language.bio);
  $('#concerts_date').text(language.concerts_date);
  $('#concerts_place').text(language.concerts_place);

  // $('#card1_question').text(language.card1_question);
  // $('#bio').text(language.bio);
  // $('#concerts_date').text(language.concerts_date);
  // $('#concerts_place').text(language.concerts_place);

  // $('#header_subTitle')[0].innerHTML = language.header_subTitle;
  // if (!_token) {showLoginMessage();}
  // // $('#languageBtn')[0].innerHTML = language.languageBtn;
  // $('#loginUsername')[0].innerHTML = language.loginUsername;
  // $('#current-user').text(localStorage.getItem('userID'));

}
