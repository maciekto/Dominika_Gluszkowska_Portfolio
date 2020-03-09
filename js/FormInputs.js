const EmailInput = document.querySelector('.Email-Input');
const TextAreaInput = document.querySelector('.TextArea-Input');

const EmailTitle = document.querySelector('.Form-LabelEmailFrom');

const TextAreaTitle = document.querySelector('.Form-LabelTextArea');




EmailInput.addEventListener('click', emailTitleUp);

TextAreaInput.addEventListener('click', textAreaTitleUp);

function emailTitleUp(){
    EmailTitle.classList.add('Form-LabelEmailFrom_focus');
}

function textAreaTitleUp(){
    TextAreaTitle.classList.add('Form-LabelTextArea_focus');
    document.querySelector('.Form-TextArea').style.cssText = "height: 50px";
}