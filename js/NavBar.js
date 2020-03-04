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

function AboutLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_AboutClick');
}
function ProjectsLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_ProjectClick');
}
function OfferLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_OfferClick');
}
function ContactLink(){
    removeClassesNavBarLinks();
    NavBar.classList.add('NavBar_ContactClick');
}

function removeClassesNavBarLinks(){
    NavBar.classList.remove('NavBar_AboutClick');
    NavBar.classList.remove('NavBar_ProjectClick');
    NavBar.classList.remove('NavBar_OfferClick');
    NavBar.classList.remove('NavBar_ContactClick');
}