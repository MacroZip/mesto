const popup = document.querySelector('.popup');

const popupForm = document.querySelector('.popup__form');

const closeProfileBtn = document.querySelector('.button_type_close');

const openProfileEdit = document.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const formInputName = document.querySelector('.popup_type_name');
const formInputAbout = document.querySelector('.popup_type_about');


function openPopup() {
  popup.classList.add('popup_opened')
};

function closePopup() {
  popup.classList.remove('popup_opened')
};

function addValue() {
  formInputName.value = profileName.textContent;
  formInputAbout.value = profileAbout.textContent;
};

function addValueProfile(event) {

  profileName.textContent = formInputName.value;
  profileAbout.textContent = formInputAbout.value;
  event.preventDefault();
  closePopup();
};


openProfileEdit.addEventListener('click', openPopup);
openProfileEdit.addEventListener('click', addValue);
popupForm.addEventListener('submit', addValueProfile);
closeProfileBtn.addEventListener('click', closePopup);
