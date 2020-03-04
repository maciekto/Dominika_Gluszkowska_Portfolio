
//PROJECTS 
const Projects = document.querySelectorAll('.ProjectMain');

console.log(Projects[2]);

Projects[0].addEventListener('click', preview1);
Projects[1].addEventListener('click', preview2);
Projects[2].addEventListener('click', preview3);
Projects[3].addEventListener('click', preview4);
Projects[4].addEventListener('click', preview5);
Projects[5].addEventListener('click', preview6);
Projects[6].addEventListener('click', preview7);
Projects[7].addEventListener('click', preview8);
Projects[8].addEventListener('click', preview9);
Projects[9].addEventListener('click', preview10);

const Back3 = document.querySelector('.ProjectMain3-Back');

function preview1(){
    removeClasses();
    Projects[0].classList.add('ProjectMain_clicked_left');
}
function preview2(){
    removeClasses();
    Projects[1].classList.add('ProjectMain_clicked_right');
}
function preview3(){
    removeClasses();
    Projects[2].classList.add('ProjectMain_clicked_left');
    Projects[2].addEventListener('click', preview3Back, false);
    
    function preview3Back(){
        Projects[2].classList.add('ProjectMain_back');
        Back3.classList.add('ProjectMain3-Back_visible');
        Projects[2].addEventListener('click', remove3); 
        function remove3(){
            Projects[2].classList.remove('ProjectMain_back');
            Back3.classList.remove('ProjectMain3-Back_visible');
            Projects[2].classList.remove('ProjectMain_clicked_left');
            
        };
    }
    
    
}
function preview4(){
    removeClasses();
    Projects[3].classList.add('ProjectMain_clicked_right');
}
function preview5(){
    removeClasses();
    Projects[4].classList.add('ProjectMain_clicked_left');
}
function preview6(){
    removeClasses();
    Projects[5].classList.add('ProjectMain_clicked_right');
}
function preview7(){
    removeClasses();
    Projects[6].classList.add('ProjectMain_clicked_right');
}
function preview8(){
    removeClasses();
    Projects[7].classList.add('ProjectMain_clicked_left');
}
function preview9(){
    removeClasses();
    Projects[8].classList.add('ProjectMain_clicked_right');
}
function preview10(){
    removeClasses();
    Projects[9].classList.add('ProjectMain_clicked_left');
}

function removeClasses(){
    Projects.forEach(element => {
        element.classList.remove('ProjectMain_clicked_left');
        element.classList.remove('ProjectMain_clicked_right');
        element.classList.remove('ProjectMain_back');
        Back3.classList.remove('ProjectMain3-Back_visible');
    });
}
