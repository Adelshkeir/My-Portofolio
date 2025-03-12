const navSlide = () => {
  var burger = document.querySelector(".hamburger");
  var navbar = document.querySelector(".fullNavbar");
  var homeNavlink = document.querySelector(".homeNavlink");
  var aboutNavlink = document.querySelector(".aboutNavlink");
  var worksNavLink = document.querySelector(".worksNavlink");
  var contactNavLink = document.querySelector(".contactNavlink");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  homeNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  aboutNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  worksNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  contactNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });
};

const knowMore = () => {
  var buttonKnowMore = document.querySelector(".knowMoreAbout");
  var fullKnowMore = document.querySelector(".hiddenKnowMoreSection");
  var backAarrowMore = document.querySelector(
    ".hiddenKnowMoreSectionArrowBack"
  );

  buttonKnowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });

  backAarrowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });
};

const changeLanguage = (language) => {
  let aboutTitle = document.querySelector(".aboutTitle");
  let worksTitle = document.querySelector(".worksTitle");
  let contactTitle = document.querySelector(".contactTitle");
  let descriptionHero = document.querySelector(".descriptionHero");
  let homeNavlink = document.querySelector(".homeNavlink");
  let aboutNavlink = document.querySelector(".aboutNavlink");
  let worksNavlink = document.querySelector(".worksNavlink");
  let contactNavlink = document.querySelector(".contactNavlink");
  let scrollDown = document.querySelector(".scrollDownVertical");
  let subtitleAbout = document.querySelector(".subtitleAbout");
  let aboutDescription = document.getElementById("#aboutDescriptionLanguage");
  let knowMoreAbout = document.querySelector(".knowMoreAbout");
  let aboutKnowMoreDescription = document.querySelector(".aboutKnowMoreDescription");
  let subtitleWorks = document.querySelector(".subtitleWorks");

  if (language === "french") {
    descriptionHero.innerHTML = "passioné par le web/frontend";
    homeNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>ACCUEIL</a>";
    aboutNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>A PROPOS</a>";
    worksNavlink.innerHTML = "<a href='" + "#worksSection" + "'>TRAVAIL</a>";
    contactNavlink.innerHTML = "<a href='" + "#contactSection" + "'>CONTACT</a>";
    scrollDown.innerHTML = "descendre";
    aboutTitle.innerHTML = "A propos de moi";
    worksTitle.innerHTML = "Travail";
    subtitleAbout.innerHTML = "ce que j'aime / fais";
    knowMoreAbout.innerHTML = "En savoir plus >";
    contactTitle.innerHTML = "Contactez moi";
    aboutKnowMoreDescription.innerHTML = "I am passionate about web development, a field I discovered independently. I enjoy the creativity it offers and the collaborative nature of building digital solutions. I thrive on self-learning, exploring new technologies, and working on projects that challenge me to grow. Organizing my own schedule and working in teams are aspects I particularly value, as they allow me to develop both technical and problem-solving skills.";
    subtitleWorks.innerHTML = "mon portfolio / </br>mes sites";
  } else {
    descriptionHero.innerHTML = "passionate about web/frontend";
    homeNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>HOME</a>";
    aboutNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>ABOUT</a>";
    worksNavlink.innerHTML = "<a href='" + "#worksSection" + "'>WORKS</a>";
    contactNavlink.innerHTML =
      "<a href='" + "#contactSection" + "'>CONTACT</a>";
    scrollDown.innerHTML = "scrolldown";
    aboutTitle.innerHTML = "About me";
    subtitleAbout.innerHTML = "what I like /" + "</br>" + "do";
    knowMoreAbout.innerHTML = "Know more >";
    contactTitle.innerHTML = "Contact me";
    aboutKnowMoreDescription.innerHTML = "I am passionate about web development, a field I discovered independently. I enjoy the creativity it offers and the collaborative nature of building digital solutions. I thrive on self-learning, exploring new technologies, and working on projects that challenge me to grow. Organizing my own schedule and working in teams are aspects I particularly value, as they allow me to develop both technical and problem-solving skills."
    worksTitle.innerHTML = "Works";
    subtitleWorks.innerHTML = "my portfolio / </br> my sites";
  }
};
changeLanguage();
knowMore();
navSlide();

//initialising map
function initMap() {
  navigator.geolocation.getCurrentPosition(position => {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var userLocation = { lat, lng };

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: userLocation,
    });


    var marker = new google.maps.Marker({
      position: userLocation,
      map: map,
    });
  }, error => {
    console.error("Error getting user location:", error);
  });
}
