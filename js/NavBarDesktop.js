

const NavBarDesktop = document.querySelector('.NavBarDesktop');
const NavBarDesktopAbout = document.querySelector('.NavBarDesktop-About');
const NavBarDesktopOffer = document.querySelector('.NavBarDesktop-Offer');
const NavBarDesktopContact = document.querySelector('.NavBarDesktop-Contact');
const Language = document.querySelector('.NavBarDesktop-Language');

NavBarDesktopAbout.addEventListener('click', AboutLinkDesktop);

NavBarDesktopOffer.addEventListener('click', OfferLinkDesktop);

NavBarDesktopContact.addEventListener('click', ContactLinkDesktop);

function AboutLinkDesktop(){
    removeClassesNavBarLinksDesktop();
    NavBarDesktop.classList.add('NavBarDesktop_AboutClick');
    Language.classList.add('NavBarDesktop-Language_AboutClick');
}
function OfferLinkDesktop(){
    removeClassesNavBarLinksDesktop();
    NavBarDesktop.classList.add('NavBarDesktop_OfferClick');
    Language.classList.add('NavBarDesktop-Language_OfferClick');
}
function ContactLinkDesktop(){
    removeClassesNavBarLinksDesktop();
    NavBarDesktop.classList.add('NavBarDesktop_ContactClick');
    Language.classList.add('NavBarDesktop-Language_ContactClick');
}

function removeClassesNavBarLinksDesktop(){
    NavBarDesktop.classList.remove('NavBarDesktop_AboutClick');
    NavBarDesktop.classList.remove('NavBarDesktop_OfferClick');
    NavBarDesktop.classList.remove('NavBarDesktop_ContactClick');

    Language.classList.remove('NavBarDesktop-Language_AboutClick');
    Language.classList.remove('NavBarDesktop-Language_OfferClick');
    Language.classList.remove('NavBarDesktop-Language_ContactClick');
}
//AboutLinkDesktop()
//OfferLinkDesktop()
//ContactLinkDesktop();