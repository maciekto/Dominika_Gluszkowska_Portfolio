const MobileWrapper = document.querySelector('.Wrapper-Inner');
const MobileWidget = document.querySelector('.ProjectsMobile');
const ShowProjects = document.querySelector('.Projects');
const ExitProjects = document.querySelector('.ProjectsMobile-Exit');
ShowProjects.addEventListener('click', SHOW);

function SHOW(){
    ShowProjects.removeEventListener('click', SHOW);
    MobileWrapper.style.cssText = 'display: none';
    MobileWidget.style.cssText = 'display: flex';
    ExitProjects.addEventListener('click', Exit);
}
function Exit(){
    MobileWrapper.style.cssText = 'display: flex';
    MobileWidget.style.cssText = 'display: none';
    ShowProjects.addEventListener('click', SHOW);
}