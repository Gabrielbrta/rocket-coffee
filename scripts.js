const toggleElements = document.querySelectorAll('[data-switch="white"]');
const btnSwitch = document.querySelector('.theme');
function toggle(event) {
  event.preventDefault();
  toggleElements.forEach((element) => element.classList.toggle('active'));
}

const events = ['click' , 'touchstart'];

events.forEach((events) => btnSwitch.addEventListener(events, toggle));
