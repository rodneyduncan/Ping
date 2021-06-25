const email = document.querySelector('#email');

const submitBttn = document.querySelector('#submit-btn');

const errorMessage = document.querySelector('.hide');

let error = () => {
   if(email.value === ''){
    email.style.border = '1px solid hsl(354, 100%, 66%)';
    errorMessage.style.display = 'block';
  }
}