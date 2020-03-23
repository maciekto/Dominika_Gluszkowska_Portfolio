const MobileWrapper = document.querySelector('.Wrapper-Inner');
const MobileWidget = document.querySelector('.ProjectsMobile');
const ShowProjects = document.querySelector('.Projects');
const ExitProjects = document.querySelector('.ProjectsMobile-Exit');
ShowProjects.addEventListener('click', SHOW);

function SHOW(){
    ShowProjects.removeEventListener('click', SHOW);
    setTimeout(() => {
        MobileWrapper.style.cssText = 'display: none';
    },1000);
    
    MobileWidget.style.cssText = 'display: flex';
    ExitProjects.addEventListener('click', Exit);
}
function Exit(){
    MobileWrapper.style.cssText = 'display: flex';
    MobileWidget.style.height = '0vh';
    MobileWidget.style.opacity = '0';
    
    
    setTimeout(()=>{
       
        MobileWidget.style.cssText = 'display: none';
        ShowProjects.addEventListener('click', SHOW);
    },800);
    
    
}