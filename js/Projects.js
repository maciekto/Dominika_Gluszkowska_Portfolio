// TUTORIAL SCRIPTS 
const TUTORIAL = document.querySelector('.ProjectMainTutorial');
TUTORIAL.addEventListener('click', previewTutorial);

const BackTutorial = document.querySelector('.ProjectMainTutorial-Back');
const TutorialMainDiv = document.querySelector('.Tutorial');
const TutorialMessage = document.querySelector('.Tutorial-Message');
const TutorialArrow = document.querySelector('.Tutorial-Arrow');
const TutorialTitle = document.querySelector('.Tutorial-Title');
TutorialTitle.innerHTML = "Click on card to see project";

function previewTutorial(){
    
    
    TUTORIAL.removeEventListener('click', previewTutorial);
    TutorialMessage.classList.toggle('Tutorial-Message_Move1');
    TutorialArrow.classList.toggle('Tutorial-Arrow_Move1');
    TutorialTitle.innerHTML = "Click second time to see the story";
    
    removeClasses();
    this.classList.toggle('ProjectMain_clicked_left');
    this.addEventListener('click', previewBackTutorial);
}
    function previewBackTutorial(){
        TUTORIAL.removeEventListener('click', previewBackTutorial);
        TutorialTitle.innerHTML = "One more time to exit";
        TutorialArrow.classList.toggle('Tutorial-Arrow_Move1');
        BackTutorial.classList.toggle('ProjectMain-Back_visible');
        TutorialMessage.classList.toggle('Tutorial-Message_Move1');
        TutorialMessage.classList.toggle('Tutorial-Message_Move2');

        this.classList.toggle('ProjectMain_back');
        

        this.addEventListener('click', previewReturnTutorial);  
    }
        function previewReturnTutorial(){
            TutorialMessage.classList.toggle('Tutorial-Message_Move2');
            setTimeout(() => {
                TutorialMessage.classList.toggle('Tutorial-Message_Move3');
                TUTORIAL.classList.toggle('ProjectMainTutorial_opacity_0');
                
            }, 100);
            setTimeout(() => {
                TutorialMainDiv.classList.toggle('ProjectMainTutorial_opacity_0');
            }, 700);
            setTimeout(() => {
                TutorialMainDiv.style.cssText = "display: none";
            }, 800);
            TUTORIAL.removeEventListener('click', previewReturnTutorial);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_left')
            BackTutorial.classList.toggle('ProjectMain-Back_visible'); 
        };

//PROJECTS 

const Projects = document.querySelectorAll('.ProjectMain');



const Back1 = document.querySelector('.ProjectMain1-Back');
const Back2 = document.querySelector('.ProjectMain2-Back');
const Back3 = document.querySelector('.ProjectMain3-Back');
const Back4 = document.querySelector('.ProjectMain4-Back');
const Back5 = document.querySelector('.ProjectMain5-Back');
const Back6 = document.querySelector('.ProjectMain6-Back');
const Back7 = document.querySelector('.ProjectMain7-Back');
const Back8 = document.querySelector('.ProjectMain8-Back');
const Back9 = document.querySelector('.ProjectMain9-Back');
const Back10 = document.querySelector('.ProjectMain10-Back');

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






// PREVIEW 1
function preview1(){

    removeClasses();
    removeMainListener(1, preview1);

    this.classList.toggle('ProjectMain_clicked_left');
    this.addEventListener('click', previewBack1);
}
    function previewBack1(){
        removeSecondListener(1, previewBack1);
        this.classList.toggle('ProjectMain_back');
        Back1.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn1);
    }
        function previewReturn1(){
            removeThirdListener(1, previewReturn1);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_left')
            Back1.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview1);

        }
// PREVIEW 2
function preview2(){

    removeClasses();
    removeMainListener(2, preview2);

    this.classList.toggle('ProjectMain_clicked_right');
    this.addEventListener('click', previewBack2);
}
    function previewBack2(){
        removeSecondListener(2, previewBack2);
        this.classList.toggle('ProjectMain_back');
        Back2.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn2);
    }
        function previewReturn2(){
            removeThirdListener(2, previewReturn2);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_right')
            Back2.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview2);

        }
// PREVIEW 3
// function for card/project preview
function preview3(){
    
    removeClasses();
    removeMainListener(3, preview3);
    this.classList.toggle('ProjectMain_clicked_left');
    this.addEventListener('click', previewBack3);
}
    // function for card/project preview BACK with description
    function previewBack3(){
        removeSecondListener(3, previewBack3);
        this.classList.toggle('ProjectMain_back');
        Back3.classList.toggle('ProjectMain-Back_visible');

        this.addEventListener('click', previewReturn3);  
    }
        // function for card/project preview back to normal position
        function previewReturn3(){
            removeThirdListener(3, previewReturn3);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_left')
            Back3.classList.toggle('ProjectMain-Back_visible');
            
            this.addEventListener('click', preview3); 
        };
// PREVIEW 4
function preview4(){

    removeClasses();
    removeMainListener(4, preview4);

    this.classList.toggle('ProjectMain_clicked_right');
    this.addEventListener('click', previewBack4);
}
    function previewBack4(){
        removeSecondListener(4, previewBack4);
        this.classList.toggle('ProjectMain_back');
        Back4.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn4);
    }
        function previewReturn4(){
            removeThirdListener(4, previewReturn4);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_right')
            Back4.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview4);

        }
// PREVIEW 5
function preview5(){

    removeClasses();
    removeMainListener(5, preview5);

    this.classList.toggle('ProjectMain_clicked_left');
    this.addEventListener('click', previewBack5);
}
    function previewBack5(){
        removeSecondListener(5, previewBack5);
        this.classList.toggle('ProjectMain_back');
        Back5.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn5);
    }
        function previewReturn5(){
            removeThirdListener(5, previewReturn5);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_left')
            Back5.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview5);

        }
// PREVIEW 6
function preview6(){

    removeClasses();
    removeMainListener(6, preview6);

    this.classList.toggle('ProjectMain_clicked_right');
    this.addEventListener('click', previewBack6);
}
    function previewBack6(){
        removeSecondListener(6, previewBack6);
        this.classList.toggle('ProjectMain_back');
        Back6.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn6);
    }
        function previewReturn6(){
            removeThirdListener(6, previewReturn6);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_right')
            Back6.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview6);

        }
// PREVIEW 7
function preview7(){

    removeClasses();
    removeMainListener(7, preview7);

    this.classList.toggle('ProjectMain_clicked_left');
    this.addEventListener('click', previewBack7);
}
    function previewBack7(){
        removeSecondListener(7, previewBack7);
        this.classList.toggle('ProjectMain_back');
        Back7.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn7);
    }
        function previewReturn7(){
            removeThirdListener(7, previewReturn7);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_left')
            Back7.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview7);

        }
// PREVIEW 8
function preview8(){

    removeClasses();
    removeMainListener(8, preview8);

    this.classList.toggle('ProjectMain_clicked_left');
    this.addEventListener('click', previewBack8);
}
    function previewBack8(){
        removeSecondListener(8, previewBack8);
        this.classList.toggle('ProjectMain_back');
        Back8.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn8);
    }
        function previewReturn8(){
            removeThirdListener(8, previewReturn8);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_left')
            Back8.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview8);

        }
// PREVIEW 9
function preview9(){

    removeClasses();
    removeMainListener(9, preview9);

    this.classList.toggle('ProjectMain_clicked_right');
    this.addEventListener('click', previewBack9);
}
    function previewBack9(){
        removeSecondListener(9, previewBack9);
        this.classList.toggle('ProjectMain_back');
        Back9.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn9);
    }
        function previewReturn9(){
            removeThirdListener(9, previewReturn9);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_right')
            Back9.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview9);

        }
// PREVIEW 10
function preview10(){

    removeClasses();
    removeMainListener(10, preview10);

    this.classList.toggle('ProjectMain_clicked_left');
    this.addEventListener('click', previewBack10);
}
    function previewBack10(){
        removeSecondListener(10, previewBack10);
        this.classList.toggle('ProjectMain_back');
        Back10.classList.toggle('ProjectMain-Back_visible');
        
        this.addEventListener('click', previewReturn10);
    }
        function previewReturn10(){
            removeThirdListener(10, previewReturn10);
            this.classList.toggle('ProjectMain_back');
            this.classList.toggle('ProjectMain_clicked_left')
            Back10.classList.toggle('ProjectMain-Back_visible');

            this.addEventListener('click', preview10);

        }

function removeClasses(){
    Projects.forEach(element => {
        element.classList.remove('ProjectMain_clicked_left');
        element.classList.remove('ProjectMain_clicked_right');
        
        element.classList.remove('ProjectMain_back');
        Back1.classList.remove('ProjectMain-Back_visible');
        Back2.classList.remove('ProjectMain-Back_visible');
        Back3.classList.remove('ProjectMain-Back_visible');
        Back4.classList.remove('ProjectMain-Back_visible');
        Back5.classList.remove('ProjectMain-Back_visible');
        Back6.classList.remove('ProjectMain-Back_visible');
        Back7.classList.remove('ProjectMain-Back_visible');
        Back8.classList.remove('ProjectMain-Back_visible');
        Back9.classList.remove('ProjectMain-Back_visible');
        Back10.classList.remove('ProjectMain-Back_visible');
        

        removeSecondListener(1, previewBack1);
        removeSecondListener(2, previewBack2);
        removeSecondListener(3, previewBack3);
        removeSecondListener(4, previewBack4);
        removeSecondListener(5, previewBack5);
        removeSecondListener(6, previewBack6);
        removeSecondListener(7, previewBack7);
        removeSecondListener(8, previewBack8);
        removeSecondListener(9, previewBack9);
        removeSecondListener(10, previewBack10);

        removeThirdListener(1, previewReturn1);
        removeThirdListener(2, previewReturn2);
        removeThirdListener(3, previewReturn3);
        removeThirdListener(4, previewReturn4);
        removeThirdListener(5, previewReturn5);
        removeThirdListener(6, previewReturn6);
        removeThirdListener(7, previewReturn7);
        removeThirdListener(8, previewReturn8);
        removeThirdListener(9, previewReturn9);
        removeThirdListener(10, previewReturn10);

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
    });
}


// REMOVE LISTENERS 

    // main 
    function removeMainListener(number, preview){
        Projects[number-1].removeEventListener('click', preview);
    }
    // second
    function removeSecondListener(number, previewBack){
        Projects[number-1].removeEventListener('click', previewBack);
    }
    // third
    function removeThirdListener(number, previewReturn){
        Projects[number-1].removeEventListener('click', previewReturn);
    }