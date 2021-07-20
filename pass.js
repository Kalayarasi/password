//random password generator comments!!!

var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?{}()[]+:?><:_";
function getPassword() {
  var password = "";
  var passwordlength = document.getElementById('pass-length').value;
  for (var i = 0; i < passwordlength; i++) {
    var randomN = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomN);
  }
  document.getElementById('password').value = password;
}
//email validation comments!!!
const form = document.getElementById('form');
const error = document.getElementById('error');
const email = document.getElementById('email');
const thanks = document.getElementById('thanks');

email.oninvalid = invalid;
form.onsubmit = submit;
function invalid(error) {
  error.removeAttribute('hidden');
}
function submit(event) {
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  // For this example, don't actually submit the form
  event.preventDefault();
}