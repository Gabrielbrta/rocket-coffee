// função para trocar o icone ou qualque imagem no toggle dos elementos.
function changeImage(element, targetIcon,className, src, pastSrc) {
  if (element.classList.contains(className))
  targetIcon.src = src
  else
  targetIcon.src = pastSrc
}

// Theme switch toggle function
function initSwitchTheme() {
  const header = document.querySelector('.header')
  const mobileRocketLogo = document.querySelector('.logo-mobile');
  const toggleElements = document.querySelectorAll('[data-switch="white"]');
  // Verifica se existe os atributos data para que não trave o script da página caso não tenha.
  if(toggleElements) {
    const btnSwitch = document.querySelector('.theme');

// Previne o padrão para quando for usado o touch não aconteca o bug de abrir e fechar 
    function toggle(event) {
      event.preventDefault();
      toggleElements.forEach((element) => element.classList.toggle('active'));
      changeImage(header ,mobileRocketLogo,'active','./img/logo-mobile-white.svg', './img/logo-mobile.svg');
    }

// Adiciona o evento de click e touchStart
    const events = ['click' , 'touchstart'];
    events.forEach((events) => btnSwitch.addEventListener(events, toggle));
  }
}
initSwitchTheme();

// Menu toggle function
function initToggleMenu () {
  const btnMenu = document.querySelector('.navigation-mobile');
  if (btnMenu) {
    const UlNavigation = document.querySelector('nav > ul');
    const UlIcone = document.querySelector('nav > img');

// open e close do menu trocando a imagem do Icone.
    function toggleMenu(event) {
      event.preventDefault();
      UlNavigation.classList.toggle('mobile');
      changeImage(UlNavigation ,UlIcone,'mobile','./img/menu-buguer-close.svg', './img/menu-buguer-open.svg');
    }

// Adiciona o evento de click e touchStart
    const events = ['click' , 'touchstart'];
    events.forEach((eventos) => btnMenu.addEventListener(eventos, toggleMenu));
  }
}
initToggleMenu();
