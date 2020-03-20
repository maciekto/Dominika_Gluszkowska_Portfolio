const NavBarDesktopTutorial = document.querySelector('.NavBarDesktop');

const ProjectsDesktopTutorial = document.querySelector('.ProjectsDesktop');
const DesktopMessageTutorial = document.querySelector('.Tutorial-Message');
const DesktopTitleTutorial = document.querySelector('.Tutorial-Desktop');
const DesktopArrowTutorial = document.querySelector('.Tutorial-Arrow');
NavBarDesktopTutorial.addEventListener('click', firstClick);
ProjectsDesktopTutorial.style.cssText = "z-index: 50";
function firstClick(){
    NavBarDesktopTutorial.style.cssText = "z-index: 50";
    DesktopMessageTutorial.classList.add('Message_moveDesktop1');
    DesktopArrowTutorial.classList.add('Arrow_moveDesktop1');
    DesktopTitleTutorial.innerHTML = "| Click here to see all projects | <br /> | Zobacz wszytskie projekty |";
    ProjectsDesktopTutorial.addEventListener('click', ForceExit);
    ProjectsDesktopTutorial.style.cssText = "z-index: 60";
}