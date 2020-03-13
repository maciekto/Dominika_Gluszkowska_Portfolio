

const pl = {
    navBar: {
        desktop: {
            about: "O mnie",
            offer: "Oferty",
            contact: "Kontakt"
        },
        mobile:{
            about: "O mnie",
            projects: "Projekty",
            offer: "Oferty",
            contact: "Kontakt"
        }
    },

    desktopTitle: "Dominika Głuszkowska - Grafik Komputerowy",
    mobileTitle: {
        one: "Dominika Głuszkowska",
        two: "Grafik Komputerowy"
    },
    about: {
        title: "O mnie",
        description: "Plastyką i sztuką interesuje się od dzieciństwa, to rodzice zaszczepili we mnie pasję do tego. Swoją pierwsza wystawe mialam w gimnazjum. Od niedawna zacząłem tworzyć grafiki i samodzielnie kształcić sie do tego zawodu. Tworzenie różnych projektów sprawia mi ogromną przyjemność i jest to moją pasją."
    },
    offer: {
        title: "Co mogę zaoferować",
        description: "- ilustracje -<br />- plakaty -<br />- ulotki -<br />- wizytówki -<br />- przygotowywanie projektu do druku -<br />- collage art -"
    },
    projects: "Moje wszystkie projekty:",
    contactLink: "Kontakt.",
    form: {
        title: "Wyślij wiadomość tutaj:",
        emailFrom: "Twój email:",
        ms: "Twoja wiadomość",
        btn: "Wyślij"
    }
}
const eng = {
    navBar: {
        desktop: {
            about: "About",
            offer: "Offer",
            contact: "Contact"
        },
        mobile:{
            about: "About",
            projects: "Projects",
            offer: "Offer",
            contact: "Contact"
        }
    },

    desktopTitle: "Dominika Głuszkowska - Graphic Designer",
    mobileTitle: {
        one: "Dominika Głuszkowska",
        two: "Graphic Designer"
    },
    about: {
        title: "About me",
        description: "KUPKA"
    },
    offer: {
        title: "What can i offer?",
        description: "- ilustracje -<br />- plakaty -<br />- ulotki -<br />- wizytówki -<br />- przygotowywanie projektu do druku -<br />- collage art -"
    },
    projects: "Vide all my projects here:",
    contactLink: "Contact",
    form: {
        title: "Contact here:",
        emailFrom: "Your email:",
        ms: "Your message",
        btn: "Send"
    }
}

const Languagexd = document.querySelector('.NavBarDesktop-Language');

Language.addEventListener('click', engChange);

const NavbarDesktopAboutLang = document.querySelector('.NavBarDesktop-About');
const NavbarDesktopOfferLang = document.querySelector('.NavBarDesktop-Offer');
const NavbarDesktopContactLang = document.querySelector('.NavBarDesktop-Contact');

const NavbarMobileAboutLang = document.querySelector('.NavBar-About');
const NavbarMobileOfferLang = document.querySelector('.NavBar-Offer');
const NavbarMobileProjectsLang = document.querySelector('.NavBar-Projects');
const NavbarMobileContactLang = document.querySelector('.NavBar-Contact');


const TitleMobileOneLang = document.querySelector('.Title-One');
const TitleMobileTwoLang = document.querySelector('.Title-Two');
const TitleDesktopLang = document.querySelector('.Title-Three');

const AboutTitle = document.querySelector('.About-Title');
const AboutDescription = document.querySelector('.About-Description');


function engChange(){
    Languagexd.classList.toggle('NavBarDesktop-Language_pl');
    NavbarDesktopAboutLang.innerHTML = eng.navBar.desktop.about;
    NavbarDesktopOfferLang.innerHTML = eng.navBar.desktop.offer;
    NavbarDesktopContactLang.innerHTML = eng.navBar.desktop.contact;

    TitleDesktopLang.innerHTML = eng.desktopTitle;
    AboutTitle.innerHTML = eng.about.title;
    AboutDescription.innerHTML = eng.about.description;
}

