const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const heading = document.querySelector('.heading');
function event(e) {
  console.log(e.target.id);
  body.style.backgroundColor = e.target.id;
  heading.style.color = 'white';
}
buttons.forEach((button) => {
  button.addEventListener('click', event);
});
