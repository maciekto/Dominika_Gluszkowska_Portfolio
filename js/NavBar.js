window.onscroll = () => {
    let About = window.innerHeight/7;
    let Projects = window.innerHeight/6;
    let Offer = window.innerHeight/2;
    let Contact = window.innerHeight;
    if(window.scrollY < About ){
        AboutLink();
    }else if(window.scrollY > Projects && window.scrollY < Offer ){
        ProjectsLink();
    }else if(window.scrollY > Offer && window.scrollY < Contact){
        OfferLink();
    }else if(window.scrollY > Contact){
        ContactLink();
    }

    
};


const NavBar = document.querySelector('.NavBar');
const NavBarMobileLanguage = document.querySelector('.NavBar-Language');
function AboutLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_AboutClick');
    NavBarMobileLanguage.classList.add('NavBar-Language_AboutClick');
}
function ProjectsLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_ProjectClick');
    NavBarMobileLanguage.classList.add('NavBar-Language_ProjectsClick');
}
function OfferLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_OfferClick');
    NavBarMobileLanguage.classList.add('NavBar-Language_OfferClick');
}
function ContactLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_ContactClick');
    NavBarMobileLanguage.classList.add('NavBar-Language_ContactClick');
}

function removeClassesNavBarLinks(){
    NavBar.classList.remove('NavBar_AboutClick');
    NavBar.classList.remove('NavBar_ProjectClick');
    NavBar.classList.remove('NavBar_OfferClick');
    NavBar.classList.remove('NavBar_ContactClick');

    NavBarMobileLanguage.classList.remove('NavBar-Language_AboutClick');
    NavBarMobileLanguage.classList.remove('NavBar-Language_ProjectsClick');
    NavBarMobileLanguage.classList.remove('NavBar-Language_OfferClick');
    NavBarMobileLanguage.classList.remove('NavBar-Language_ContactClick');
}