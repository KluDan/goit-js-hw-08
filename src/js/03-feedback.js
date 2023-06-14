import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = {};

onLocalStorageCheck();

formEl.addEventListener('input',throttle(onInputChange, 500));
formEl.addEventListener('submit', onSubmitForm);

function onInputChange(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

function onSubmitForm(e){
    e.preventDefault();
    if(formEl.elements.email.value === '' || formEl.elements.message.value === ''){
        alert('You need to fill in both fields!');
        return
    }
    e.preventDefault();
    console.log("The current data in local storage:", formData);
    formEl.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    formData = {};  
}

function onLocalStorageCheck (e){
    if ( localStorage.getItem(LOCALSTORAGE_KEY)){
      formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      for(const key in formData){
        formEl.elements[key].value = formData[key]
      }
    }
}