$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

const concertsDiv = document.querySelector("#events tbody");

  fetch("https://concerts-mwi2.onrender.com/concerts/cantvs").then(res =>{
    if (!res.ok) {
        throw new Error("Network Problem 😢" + res.statusText);
    }
    return res.json();
}).then(concerts => {
    console.log(concerts)
    concerts.sort((a, b) => new Date(a.date) - new Date(b.date));
    concerts.forEach((concert) => {
      const date = new Date(concert.date); 
      const formattedDate = new Intl.DateTimeFormat("de-DE", {
        weekday: "long", 
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(date);
      const html = `
        <tr>
          <th scope="row">${formattedDate}</th>
          <td><a class="text-white" href="${concert.link}" target="_blank">${description}</a></td>
        </tr>
      `;
      concertsDiv.innerHTML += html;
    })

}).catch(error => {
    console.error("Fetch Operation Not Working 🦇", error);
});

  function hamburger_cross() {
    if (isClosed) {
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

  // Moved this inside the $(document).ready() to ensure proper initialization.
  let links = document.getElementsByClassName("side_link");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      hamburger_cross ();
      toggleWrapper ();
    } );
  } ;

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  function toggleWrapper() {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("toggled"); // Toggle the 'toggled' class on the #wrapper element
  }

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
  $('#home_sidebar').text(language.home_sidebar);
  $('#news_sidebar').text(language.news_sidebar);
  $('#about_sidebar').text(language.about_sidebar);
  $('#events_sidebar').text(language.events_sidebar);
  $('#gallery_sidebar').text(language.gallery_sidebar);
  $('#contact_sidebar').text(language.contact_sidebar);
  $('#social_sidebar').text(language.social_sidebar);
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
  $('#concerts_heading').text(language.concerts_heading);
  $('#concerts_date').text(language.concerts_date);
  $('#concerts_place').text(language.concerts_place);
  $('#contact_heading').text(language.contact_heading);

  // $('#card1_question').text(language.card1_question);
  // $('#bio').text(language.bio);
  // $('#concerts_date').text(language.concerts_date);
  // $('#concerts_place').text(language.concerts_place);

  // $('#header_subTitle')[0].innerHTML = language.header_subTitle;
  // if (!_token) {showLoginMessage();}
  // // $('#languageBtn')[0].innerHTML = language.languageBtn;
  // $('#loginUsername')[0].innerHTML = language.loginUsername;
  // $('#current-user').text(localStorage.getItem('userID'));

  // let links = document.getElementsByClassName("side_link");
  // for (let i = 0; i < links.length; i++) {
  //   links[i].addEventListener("click", hamburger_cross);
  // } 

}

