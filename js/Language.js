

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
    projects: "Moje wszystkie projekty",
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
        description: "I was interested art since i was a child, my parents instilled this passion in me. I had my first exhibition in middle school. Recently i started to create graphics and train myself for this profession. Creating various projects give me great pleasure and it is my passion. "
    },
    offer: {
        title: "What can i offer?",
        description: "- ilustrations -<br />- posters -<br />- leaflets -<br />- business cards -<br />- preparing projects for printing -<br />- collage art -"
    },
    projects: "Vide all my projects here",
    contactLink: "Contact",
    form: {
        title: "Contact here:",
        emailFrom: "Your email:",
        ms: "Your message",
        btn: "Send"
    }
}

const Languagexd = document.querySelector('.NavBarDesktop-Language');
const LanguageMobile = document.querySelector('.NavBar-Language');

LanguageMobile.addEventListener('click', engChange);
Languagexd.addEventListener('click', engChange);

const NavbarDesktopAboutLang = document.querySelector('.NavBarDesktop-About');
const NavbarDesktopOfferLang = document.querySelector('.NavBarDesktop-Offer');
const NavbarDesktopContactLang = document.querySelector('.NavBarDesktop-Contact');

const NavbarMobileAboutLang = document.querySelector('.NavBar-About');
const NavbarMobileOfferLang = document.querySelector('.NavBar-Offer');
const NavbarMobileProjectsLang = document.querySelector('.NavBar-Projects');
const NavbarMobileContactLang = document.querySelector('.NavBar-Contact');

const ProjectsDesktop = document.querySelector('.ProjectsDesktop-Title');
const ProjectsMobile = document.querySelector('.Projects-Title');
const TitleMobileOneLang = document.querySelector('.Title-One');
const TitleMobileTwoLang = document.querySelector('.Title-Two');
const TitleDesktopLang = document.querySelector('.Title-Three');

const AboutTitleLang = document.querySelector('.About-Title');
const AboutDescriptionLang = document.querySelector('.About-Description');

const OfferTitleLang = document.querySelector('.Offer-Title');
const OfferDescriptionLang = document.querySelector('.Offer-Description');

const ContactLinkLang = document.querySelector('.ContactLink-Title');

const FormTitleLang = document.querySelector('.Contact-Title');
const FormEmailFromLang = document.querySelector('.Form-LabelEmailFrom');
const FormMessageLang = document.querySelector('.Form-LabelTextArea');
const FormBtnLang = document.querySelector('.Form-Btn');

function engChange(){
    Languagexd.classList.toggle('NavBarDesktop-Language_eng')
    Languagexd.classList.toggle('NavBarDesktop-Language_pl');

    LanguageMobile.classList.toggle('NavBar-Language_eng')
    LanguageMobile.classList.toggle('NavBar-Language_pl');
    NavbarDesktopAboutLang.innerHTML = eng.navBar.desktop.about;
    NavbarDesktopOfferLang.innerHTML = eng.navBar.desktop.offer;
    NavbarDesktopContactLang.innerHTML = eng.navBar.desktop.contact;

    NavbarMobileAboutLang.innerHTML = eng.navBar.mobile.about;
    NavbarMobileProjectsLang.innerHTML = eng.navBar.mobile.projects;
    NavbarMobileOfferLang.innerHTML = eng.navBar.mobile.offer;
    NavbarMobileContactLang.innerHTML = eng.navBar.mobile.contact;

    ProjectsDesktop.innerHTML = eng.projects;
    ProjectsMobile.innerHTML = eng.projects;

    TitleDesktopLang.innerHTML = eng.desktopTitle;
    AboutTitleLang.innerHTML = eng.about.title;
    AboutDescriptionLang.innerHTML = eng.about.description;

    OfferTitleLang.innerHTML = eng.offer.title;
    OfferDescriptionLang.innerHTML = eng.offer.description;

    ContactLinkLang.innerHTML = eng.contactLink;

    FormTitleLang.innerHTML = eng.form.title;
    FormEmailFromLang.innerHTML = eng.form.emailFrom;
    FormMessageLang.innerHTML = eng.form.ms;
    FormBtnLang.value = eng.form.btn;

    Languagexd.removeEventListener('click', engChange);
    Languagexd.addEventListener('click', plChange);

    LanguageMobile.removeEventListener('click', engChange);
    LanguageMobile.addEventListener('click', plChange);
}

function plChange(){
    Languagexd.classList.toggle('NavBarDesktop-Language_pl');
    Languagexd.classList.toggle('NavBarDesktop-Language_eng');

    LanguageMobile.classList.toggle('NavBar-Language_pl');
    LanguageMobile.classList.toggle('NavBar-Language_eng');

    NavbarDesktopAboutLang.innerHTML = pl.navBar.desktop.about;
    NavbarDesktopOfferLang.innerHTML = pl.navBar.desktop.offer;
    NavbarDesktopContactLang.innerHTML = pl.navBar.desktop.contact;

    NavbarMobileAboutLang.innerHTML = pl.navBar.mobile.about;
    NavbarMobileProjectsLang.innerHTML = pl.navBar.mobile.projects;
    NavbarMobileOfferLang.innerHTML = pl.navBar.mobile.offer;
    NavbarMobileContactLang.innerHTML = pl.navBar.mobile.contact;

    ProjectsDesktop.innerHTML = pl.projects;
    ProjectsMobile.innerHTML = eng.projects;

    TitleDesktopLang.innerHTML = pl.desktopTitle;
    AboutTitleLang.innerHTML = pl.about.title;
    AboutDescriptionLang.innerHTML = pl.about.description;

    OfferTitleLang.innerHTML = pl.offer.title;
    OfferDescriptionLang.innerHTML = pl.offer.description;

    ContactLinkLang.innerHTML = pl.contactLink;

    FormTitleLang.innerHTML = pl.form.title;
    FormEmailFromLang.innerHTML = pl.form.emailFrom;
    FormMessageLang.innerHTML = pl.form.ms;
    FormBtnLang.value = pl.form.btn;

    Languagexd.removeEventListener('click', plChange);
    Languagexd.addEventListener('click', engChange);

    LanguageMobile.removeEventListener('click', plChange);
    LanguageMobile.addEventListener('click', engChange);
}

