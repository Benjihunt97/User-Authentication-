const check = document.getElementById('check');
const checkBox = document.getElementById('check-area');
const checkIcon = document.getElementById('check-icon');

check.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkIcon.classList.add('icon-color');
    checkBox.classList.add('check-border');
  } else {
      checkIcon.classList.remove('icon-color');
      checkBox.classList.remove('check-border');
  }
});
