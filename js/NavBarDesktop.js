

const NavBarDesktop = document.querySelector('.NavBarDesktop');
const NavBarDesktopAbout = document.querySelector('.NavBarDesktop-About');
const NavBarDesktopOffer = document.querySelector('.NavBarDesktop-Offer');
const NavBarDesktopContact = document.querySelector('.NavBarDesktop-Contact');


NavBarDesktopAbout.addEventListener('click', AboutLinkDesktop);

NavBarDesktopOffer.addEventListener('click', OfferLinkDesktop);

NavBarDesktopContact.addEventListener('click', ContactLinkDesktop);

function AboutLinkDesktop(){
    removeClassesNavBarLinksDesktop();
    NavBarDesktop.classList.add('NavBarDesktop_AboutClick');
}
function OfferLinkDesktop(){
    removeClassesNavBarLinksDesktop();
    NavBarDesktop.classList.add('NavBarDesktop_OfferClick');
}
function ContactLinkDesktop(){
    removeClassesNavBarLinksDesktop();
    NavBarDesktop.classList.add('NavBarDesktop_ContactClick');
}

function removeClassesNavBarLinksDesktop(){
    NavBarDesktop.classList.remove('NavBarDesktop_AboutClick');
    NavBarDesktop.classList.remove('NavBarDesktop_OfferClick');
    NavBarDesktop.classList.remove('NavBarDesktop_ContactClick');
}
//AboutLinkDesktop()
//OfferLinkDesktop()
//ContactLinkDesktop();