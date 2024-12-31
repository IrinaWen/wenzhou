let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let lastSlide = document.querySelector('#lastSlide');

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % (slides.length - 1); // Loop to first slide when last is reached
    slides[currentSlide].style.display = 'block';
}
function prevSlide() {
    slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + (slides.length-1)) % (slides.length - 1);
   slides[currentSlide].style.display = 'block';
}


function ready(){

const button = document.querySelector('button');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const html = document.querySelector('html');

button.addEventListener('click', () => {
  form.classList.add('open');
  html.classList.add('open');
  popup.classList.add('popup_open');
  history.pushState({ form: 1 }, "Форма для заявки", "?form=1");
});

window.addEventListener("popstate", (event) => {
  //alert(
  //  `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  //);
  if (event.state != null) {
    form.classList.add('open');
    html.classList.add('open');
    popup.classList.add('popup_open');  
  } else {
    form.classList.remove('open');
    html.classList.remove('open');
    popup.classList.remove('popup_open');
  }
});

function processForm(e)
{
  if (e.preventDefault) e.preventDefault();
  $.ajax({
		url: 'https://formcarry.com/s/oM_kDcxld8K',
		method: 'post',
		dataType: 'html',
		data: $(this).serialize(),
		success: function(data){
  //alert(
    //`data: ${JSON.stringify(data)}`,
  //);
  alert(
      'Форма успешно отправлена, спасибо!'
      );
		},
    error: function (jqXHR, exception) {
      alert('Ошибка отправки формы ');
    }
	});
  return false;
}

form.addEventListener("submit", processForm);

    // Инициализация при загрузке страницы
    updateOptions();
    calculatePrice();
}


document.addEventListener("DOMContentLoaded", ready);