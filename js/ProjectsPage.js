const ProjectDesktopMainDiv = document.querySelector('.ProjectsDesktop');
const ProjectsDesktopTitle = document.querySelector('.ProjectsDesktop-Title');
const ProjectsDesktopInner = document.querySelector('.ProjectsDesktop-Inner');

const ProjectsDesktopProject1 = document.querySelector('.ProjectsDesktop-Project1');
const ProjectsDesktopProject2 = document.querySelector('.ProjectsDesktop-Project2');
const ProjectsDesktopProject3 = document.querySelector('.ProjectsDesktop-Project3');
const ProjectsDesktopProject4 = document.querySelector('.ProjectsDesktop-Project4');
const ProjectsDesktopProject5 = document.querySelector('.ProjectsDesktop-Project5');
const ProjectsDesktopProject6 = document.querySelector('.ProjectsDesktop-Project6');
const ProjectsDesktopProject7 = document.querySelector('.ProjectsDesktop-Project7');
const ProjectsDesktopProject8 = document.querySelector('.ProjectsDesktop-Project8');
const ProjectsDesktopProject9 = document.querySelector('.ProjectsDesktop-Project9');
const ProjectsDesktopProject10 = document.querySelector('.ProjectsDesktop-Project10');
const ProjectsDesktopExit = document.querySelector('.ProjectsDesktop-Exit');

ProjectDesktopMainDiv.addEventListener('click', seeProjects);

function seeProjects(){
    ProjectDesktopMainDiv.removeEventListener('click', seeProjects);
    ProjectDesktopMainDiv.classList.toggle('ProjectsDesktop_clicked');
    ProjectsDesktopTitle.style.cssText = 'display: none';
    setTimeout(()=>{
        ProjectsDesktopInner.style.cssText = 'display: block';
    },500);
    setTimeout(()=>{
        ProjectsDesktopProject10.style.cssText = 'display: grid';
    }, 850);
    setTimeout(()=>{
        ProjectsDesktopProject3.style.cssText = 'display: grid';
    }, 1250);
    setTimeout(()=>{
        ProjectsDesktopProject9.style.cssText = 'display: grid';
    }, 1650);
    setTimeout(()=>{
        ProjectsDesktopProject2.style.cssText = 'display: grid';
    }, 2050);
    setTimeout(()=>{
        ProjectsDesktopProject7.style.cssText = 'display: grid';
    }, 2450);
    setTimeout(()=>{
        ProjectsDesktopProject8.style.cssText = 'display: grid';
    }, 2850);

    ProjectsDesktopExit.addEventListener('click', unseeProjects);
}
function unseeProjects(){
    ProjectsDesktopTitle.style.cssText = 'display: block';
    ProjectDesktopMainDiv.classList.toggle('ProjectsDesktop_clicked');
    ProjectsDesktopInner.style.cssText = 'display: none';

    
    ProjectsDesktopProject2.style.cssText = 'display: none';
    ProjectsDesktopProject3.style.cssText = 'display: none';
    ProjectsDesktopProject7.style.cssText = 'display: none';
    ProjectsDesktopProject8.style.cssText = 'display: none';
    ProjectsDesktopProject9.style.cssText = 'display: none';
    ProjectsDesktopProject10.style.cssText = 'display: none';

    setTimeout(()=>{
        ProjectDesktopMainDiv.addEventListener('click', seeProjects);
    },1000);
   
    
}