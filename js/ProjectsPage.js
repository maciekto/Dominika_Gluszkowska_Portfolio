// create needed variables
const ProjectDesktopMainDiv = document.querySelector('.ProjectsDesktop');
const ProjectsDesktopTitle = document.querySelector('.ProjectsDesktop-Title');
const ProjectsDesktopInner = document.querySelector('.ProjectsDesktop-Inner');


const ProjectsDesktopFade = document.querySelector('.ProjectsDesktop-Fade');
const ProjectsDesktopProject0 = document.querySelector('.ProjectsDesktop-Project0');
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

ProjectDesktopMainDiv.addEventListener('click', seeProjects); // add listener for open box with projects

function seeProjects(){
    ProjectDesktopMainDiv.removeEventListener('click', seeProjects); // remove lister
    ProjectDesktopMainDiv.classList.toggle('ProjectsDesktop_clicked'); // show box with projects
    ProjectsDesktopTitle.style.cssText = 'display: none'; // hide title

    // listeners to see projects
    ProjectsDesktopProject0.addEventListener('click', ProjectShow0);
    ProjectsDesktopProject1.addEventListener('click', ProjectShow1);
    ProjectsDesktopProject2.addEventListener('click', ProjectShow2);
    ProjectsDesktopProject3.addEventListener('click', ProjectShow3);
    ProjectsDesktopProject4.addEventListener('click', ProjectShow4);
    ProjectsDesktopProject5.addEventListener('click', ProjectShow5);
    ProjectsDesktopProject6.addEventListener('click', ProjectShow6);
    ProjectsDesktopProject7.addEventListener('click', ProjectShow7);
    ProjectsDesktopProject8.addEventListener('click', ProjectShow8);
    ProjectsDesktopProject9.addEventListener('click', ProjectShow9);
    ProjectsDesktopProject10.addEventListener('click', ProjectShow10);
    // animations for opening box with projecst
    setTimeout(()=>{
        ProjectsDesktopInner.style.cssText = 'display: block';
    },500);
    setTimeout(()=>{
        ProjectsDesktopProject10.style.cssText = 'display: flex';
    }, 850);
    setTimeout(()=>{
        ProjectsDesktopProject3.style.cssText = 'display: flex';
    }, 1250);
    setTimeout(()=>{
        ProjectsDesktopProject9.style.cssText = 'display: flex';
    }, 1650);
    setTimeout(()=>{
        ProjectsDesktopProject2.style.cssText = 'display: flex';
    }, 2050);
    setTimeout(()=>{
        ProjectsDesktopProject7.style.cssText = 'display: flex';
    }, 2450);
    setTimeout(()=>{
        ProjectsDesktopProject8.style.cssText = 'display: flex';
    }, 2850);
    setTimeout(()=>{
        ProjectsDesktopProject6.style.cssText = 'display: flex';
    }, 3250);
    setTimeout(()=>{
        ProjectsDesktopProject0.style.cssText = 'display: flex';
    }, 1650);
    setTimeout(()=>{
        ProjectsDesktopProject5.style.cssText = 'display: flex';
    }, 4050);
    setTimeout(()=>{
        ProjectsDesktopProject1.style.cssText = 'display: flex';
    }, 4450);
    setTimeout(()=>{
        ProjectsDesktopProject4.style.cssText = 'display: flex';
    }, 4850);
    
    ProjectsDesktopExit.addEventListener('click', unseeProjects); // add listener to exit form box
}
function unseeProjects(){
    ProjectsDesktopTitle.style.cssText = 'display: block';// show title
    ProjectDesktopMainDiv.classList.toggle('ProjectsDesktop_clicked'); // hide box 
    ProjectsDesktopInner.style.cssText = 'display: none'; // hide inner box
    // hide projects
    ProjectsDesktopProject0.style.cssText = 'display: none';
    ProjectsDesktopProject1.style.cssText = 'display: none';
    ProjectsDesktopProject2.style.cssText = 'display: none';
    ProjectsDesktopProject3.style.cssText = 'display: none';
    ProjectsDesktopProject4.style.cssText = 'display: none';
    ProjectsDesktopProject5.style.cssText = 'display: none';
    ProjectsDesktopProject6.style.cssText = 'display: none';
    ProjectsDesktopProject7.style.cssText = 'display: none';
    ProjectsDesktopProject8.style.cssText = 'display: none';
    ProjectsDesktopProject9.style.cssText = 'display: none';
    ProjectsDesktopProject10.style.cssText = 'display: none';
    // hide projects if opened
    ProjectClose0();
    ProjectClose1();
    ProjectClose2();
    ProjectClose3();
    ProjectClose4();
    ProjectClose5();
    ProjectClose6();
    ProjectClose7();
    ProjectClose8();
    ProjectClose9();
    ProjectClose10();
    // add(reset) event listener to min div
    setTimeout(()=>{
        ProjectDesktopMainDiv.addEventListener('click', seeProjects);
    },1000);
}
// PROJECT 0
function ProjectShow0(){ // function for show project
    ProjectsDesktopProject0.removeEventListener('click', ProjectShow0);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject0.classList.toggle('ProjectsDesktop-Project0_clickShow'); // show clicked text
    ProjectsDesktopProject0.addEventListener('click', ProjectBack0); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose0); // add listener to close the project
}
function ProjectBack0(){ // function for turn back project
    ProjectsDesktopProject0.classList.toggle('ProjectsDesktop-Project0_clickShow_turnBack'); // selector for turn back
}
function ProjectClose0(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject0.classList.remove('ProjectsDesktop-Project0_clickShow'); //remove selector for show project
    ProjectsDesktopProject0.removeEventListener('click', ProjectClose0); // remove event for close
    ProjectsDesktopProject0.classList.remove('ProjectsDesktop-Project0_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject0.removeEventListener('click', ProjectBack0); // remove listener for turn back 
    ProjectsDesktopProject0.addEventListener('click', ProjectShow0); // add(reset) listener for show project again
}
// PROJECT 1
function ProjectShow1(){ // function for show project
    ProjectsDesktopProject1.removeEventListener('click', ProjectShow1);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject1.classList.toggle('ProjectsDesktop-Project1_clickShow'); // show clicked text
    ProjectsDesktopProject1.addEventListener('click', ProjectBack1); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose1); // add listener to close the project
}
function ProjectBack1(){ // function for turn back project
    ProjectsDesktopProject1.classList.toggle('ProjectsDesktop-Project1_clickShow_turnBack'); // selector for turn back
}
function ProjectClose1(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject1.classList.remove('ProjectsDesktop-Project1_clickShow'); //remove selector for show project
    ProjectsDesktopProject1.removeEventListener('click', ProjectClose1); // remove event for close
    ProjectsDesktopProject1.classList.remove('ProjectsDesktop-Project1_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject1.removeEventListener('click', ProjectBack1); // remove listener for turn back 
    ProjectsDesktopProject1.addEventListener('click', ProjectShow1); // add(reset) listener for show project again
}
// PROJECT 2
function ProjectShow2(){ // function for show project
    ProjectsDesktopProject2.removeEventListener('click', ProjectShow2);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject2.classList.toggle('ProjectsDesktop-Project2_clickShow'); // show clicked text
    ProjectsDesktopProject2.addEventListener('click', ProjectBack2); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose2); // add listener to close the project
}
function ProjectBack2(){ // function for turn back project
    ProjectsDesktopProject2.classList.toggle('ProjectsDesktop-Project2_clickShow_turnBack'); // selector for turn back
}
function ProjectClose2(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject2.classList.remove('ProjectsDesktop-Project2_clickShow'); //remove selector for show project
    ProjectsDesktopProject2.removeEventListener('click', ProjectClose2); // remove event for close
    ProjectsDesktopProject2.classList.remove('ProjectsDesktop-Project2_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject2.removeEventListener('click', ProjectBack2); // remove listener for turn back 
    ProjectsDesktopProject2.addEventListener('click', ProjectShow2); // add(reset) listener for show project again
}
// PROJECT 3
function ProjectShow3(){ // function for show project
    ProjectsDesktopProject3.removeEventListener('click', ProjectShow3);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject3.classList.toggle('ProjectsDesktop-Project3_clickShow'); // show clicked text
    ProjectsDesktopProject3.addEventListener('click', ProjectBack3); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose3); // add listener to close the project
}
function ProjectBack3(){ // function for turn back project
    ProjectsDesktopProject3.classList.toggle('ProjectsDesktop-Project3_clickShow_turnBack'); // selector for turn back
}
function ProjectClose3(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject3.classList.remove('ProjectsDesktop-Project3_clickShow'); //remove selector for show project
    ProjectsDesktopProject3.removeEventListener('click', ProjectClose3); // remove event for close
    ProjectsDesktopProject3.classList.remove('ProjectsDesktop-Project3_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject3.removeEventListener('click', ProjectBack3); // remove listener for turn back 
    ProjectsDesktopProject3.addEventListener('click', ProjectShow3); // add(reset) listener for show project again
}
// PROJECT 4
function ProjectShow4(){ // function for show project
    ProjectsDesktopProject4.removeEventListener('click', ProjectShow4);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject4.classList.toggle('ProjectsDesktop-Project4_clickShow'); // show clicked text
    ProjectsDesktopProject4.addEventListener('click', ProjectBack4); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose4); // add listener to close the project
}
function ProjectBack4(){ // function for turn back project
    ProjectsDesktopProject4.classList.toggle('ProjectsDesktop-Project4_clickShow_turnBack'); // selector for turn back
}
function ProjectClose4(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject4.classList.remove('ProjectsDesktop-Project4_clickShow'); //remove selector for show project
    ProjectsDesktopProject4.removeEventListener('click', ProjectClose4); // remove event for close
    ProjectsDesktopProject4.classList.remove('ProjectsDesktop-Project4_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject4.removeEventListener('click', ProjectBack4); // remove listener for turn back 
    ProjectsDesktopProject4.addEventListener('click', ProjectShow4); // add(reset) listener for show project again
}
// PROJECT 5
function ProjectShow5(){ // function for show project
    ProjectsDesktopProject5.removeEventListener('click', ProjectShow5);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject5.classList.toggle('ProjectsDesktop-Project5_clickShow'); // show clicked text
    ProjectsDesktopProject5.addEventListener('click', ProjectBack5); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose5); // add listener to close the project
}
function ProjectBack5(){ // function for turn back project
    ProjectsDesktopProject5.classList.toggle('ProjectsDesktop-Project5_clickShow_turnBack'); // selector for turn back
}
function ProjectClose5(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject5.classList.remove('ProjectsDesktop-Project5_clickShow'); //remove selector for show project
    ProjectsDesktopProject5.removeEventListener('click', ProjectClose5); // remove event for close
    ProjectsDesktopProject5.classList.remove('ProjectsDesktop-Project5_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject5.removeEventListener('click', ProjectBack5); // remove listener for turn back 
    ProjectsDesktopProject5.addEventListener('click', ProjectShow5); // add(reset) listener for show project again
}
// PROJECT 6
function ProjectShow6(){ // function for show project
    ProjectsDesktopProject6.removeEventListener('click', ProjectShow6);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject6.classList.toggle('ProjectsDesktop-Project6_clickShow'); // show clicked text
    ProjectsDesktopProject6.addEventListener('click', ProjectBack6); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose6); // add listener to close the project
}
function ProjectBack6(){ // function for turn back project
    ProjectsDesktopProject6.classList.toggle('ProjectsDesktop-Project6_clickShow_turnBack'); // selector for turn back
}
function ProjectClose6(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject6.classList.remove('ProjectsDesktop-Project6_clickShow'); //remove selector for show project
    ProjectsDesktopProject6.removeEventListener('click', ProjectClose6); // remove event for close
    ProjectsDesktopProject6.classList.remove('ProjectsDesktop-Project6_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject6.removeEventListener('click', ProjectBack6); // remove listener for turn back 
    ProjectsDesktopProject6.addEventListener('click', ProjectShow6); // add(reset) listener for show project again
}
// PROJECT 7
function ProjectShow7(){ // function for show project
    ProjectsDesktopProject7.removeEventListener('click', ProjectShow7);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject7.classList.toggle('ProjectsDesktop-Project7_clickShow'); // show clicked text
    ProjectsDesktopProject7.addEventListener('click', ProjectBack7); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose7); // add listener to close the project
}
function ProjectBack7(){ // function for turn back project
    ProjectsDesktopProject7.classList.toggle('ProjectsDesktop-Project7_clickShow_turnBack'); // selector for turn back
}
function ProjectClose7(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject7.classList.remove('ProjectsDesktop-Project7_clickShow'); //remove selector for show project
    ProjectsDesktopProject7.removeEventListener('click', ProjectClose7); // remove event for close
    ProjectsDesktopProject7.classList.remove('ProjectsDesktop-Project7_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject7.removeEventListener('click', ProjectBack7); // remove listener for turn back 
    ProjectsDesktopProject7.addEventListener('click', ProjectShow7); // add(reset) listener for show project again
}
// PROJECT 8
function ProjectShow8(){ // function for show project
    ProjectsDesktopProject8.removeEventListener('click', ProjectShow8);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject8.classList.toggle('ProjectsDesktop-Project8_clickShow'); // show clicked text
    ProjectsDesktopProject8.addEventListener('click', ProjectBack8); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose8); // add listener to close the project
}
function ProjectBack8(){ // function for turn back project
    ProjectsDesktopProject8.classList.toggle('ProjectsDesktop-Project8_clickShow_turnBack'); // selector for turn back
}
function ProjectClose8(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject8.classList.remove('ProjectsDesktop-Project8_clickShow'); //remove selector for show project
    ProjectsDesktopProject8.removeEventListener('click', ProjectClose8); // remove event for close
    ProjectsDesktopProject8.classList.remove('ProjectsDesktop-Project8_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject8.removeEventListener('click', ProjectBack8); // remove listener for turn back 
    ProjectsDesktopProject8.addEventListener('click', ProjectShow8); // add(reset) listener for show project again
}
// PROJECT 9
function ProjectShow9(){ // function for show project
    ProjectsDesktopProject9.removeEventListener('click', ProjectShow9);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject9.classList.toggle('ProjectsDesktop-Project9_clickShow'); // show clicked text
    ProjectsDesktopProject9.addEventListener('click', ProjectBack9); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose9); // add listener to close the project
}
function ProjectBack9(){ // function for turn back project
    ProjectsDesktopProject9.classList.toggle('ProjectsDesktop-Project9_clickShow_turnBack'); // selector for turn back
}
function ProjectClose9(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject9.classList.remove('ProjectsDesktop-Project9_clickShow'); //remove selector for show project
    ProjectsDesktopProject9.removeEventListener('click', ProjectClose9); // remove event for close
    ProjectsDesktopProject9.classList.remove('ProjectsDesktop-Project9_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject9.removeEventListener('click', ProjectBack9); // remove listener for turn back 
    ProjectsDesktopProject9.addEventListener('click', ProjectShow9); // add(reset) listener for show project again
}
// PROJECT 10
function ProjectShow10(){ // function for show project
    ProjectsDesktopProject10.removeEventListener('click', ProjectShow10);// remove main listener
    ProjectsDesktopFade.style.cssText = 'display: block'; // show bg for clicked project
    ProjectsDesktopProject10.classList.toggle('ProjectsDesktop-Project10_clickShow'); // show clicked text
    ProjectsDesktopProject10.addEventListener('click', ProjectBack10); // add listener to turn back thee project
    ProjectsDesktopFade.addEventListener('click', ProjectClose10); // add listener to close the project
}
function ProjectBack10(){ // function for turn back project
    ProjectsDesktopProject10.classList.toggle('ProjectsDesktop-Project10_clickShow_turnBack'); // selector for turn back
}
function ProjectClose10(){ // function for close project
    ProjectsDesktopFade.style.cssText = 'display: none'; // hide bg 
    ProjectsDesktopProject10.classList.remove('ProjectsDesktop-Project10_clickShow'); //remove selector for show project
    ProjectsDesktopProject10.removeEventListener('click', ProjectClose10); // remove event for close
    ProjectsDesktopProject10.classList.remove('ProjectsDesktop-Project10_clickShow_turnBack'); // remove selector if exists for back side of project
    ProjectsDesktopProject10.removeEventListener('click', ProjectBack10); // remove listener for turn back 
    ProjectsDesktopProject10.addEventListener('click', ProjectShow10); // add(reset) listener for show project again
}