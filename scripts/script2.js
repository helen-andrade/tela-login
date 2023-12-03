const inicioButton = document.querySelector('.button a[href="#inicio"]');
const sobreButton = document.querySelector('.button a[href="#sobre"]');
const contatoButton = document.querySelector('.button a[href="#contato"]');

const initialSection = document.getElementById('initial');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

inicioButton.addEventListener('click', () => {
  initialSection.scrollIntoView({ behavior: 'smooth' });
});

sobreButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

contatoButton.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
});
