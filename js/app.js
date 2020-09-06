'use strict'

const form = document.querySelector('#form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form['email'];
  const error = form.querySelector('small');

  if (!isValidEmail(email.value.trim())) {
    email.classList.add('error');
    error.style.display = 'inline-block';
  } else {
    email.classList.remove('error');
    error.style.display = 'none';
  }
});

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
