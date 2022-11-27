const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popups = document.querySelectorAll('.popup');
const editProf = document.querySelector('.popup_type_profile');
const editBtn = document.querySelector('.profile__button-edit');
const popupForm = document.querySelector('.popup__form');
const closeProfileBtn = document.querySelector('.button_type_close');
const openProfileEdit = document.querySelector('.profile__button-edit');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formInputName = document.querySelector('.form__input_type_name');
const formInputAbout = document.querySelector('.form__input_type_about');
const elemAddBtn = document.querySelector(".profile__button-add");
const popupAddElement = document.querySelector(".popup_type_addElements");
const popupImgPreview = document.querySelector(".popup_type_imgPreview");
const popupImg = document.querySelector(".popup__image");
const popupImgDescrip = document.querySelector(".popup__previewDescription");
const newElement = document.querySelector(".newElement");
const elementsContainer = document.querySelector(".elements");
const elementName = document.querySelector(".form__input_type_elementName");
const elementLink = document.querySelector(".form__input_type_elementLink");
const elementTemplate = document.querySelector("#elementsTemplate").content;

function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

function addValue() {
  formInputName.value = profileName.textContent;
  formInputAbout.value = profileAbout.textContent;
};

function addValueProfile(event) {
  event.preventDefault();
  profileName.textContent = formInputName.value;
  profileAbout.textContent = formInputAbout.value;
  closePopup(editProf);
};

function removeCard(event) {
  event.target.closest(".elements__item").remove();
}

function toggleLike(event) {
  event.target.classList.toggle("button_type_like-active");
}

function previewImage(elementImg, elementTitle) {
  popupImg.src = elementImg;
  popupImgDescrip.textContent = elementTitle;
  popupImg.alt = elementTitle;

  openPopup(popupImgPreview);
}
function createCard(elmnt) {
  const cardElement = elementTemplate.querySelector(".elements__item").cloneNode(true);
  const elementImg = cardElement.querySelector(".elements__image");
  const elementTitle = cardElement.querySelector(".elements__title");

  elementImg.src = elmnt.link;
  elementImg.alt = elmnt.name;
  elementTitle.textContent = elmnt.name;
  cardElement.querySelector(".button_type_like").addEventListener("click", toggleLike);
  cardElement.querySelector(".button_type_elementClose").addEventListener("click", removeCard);
  elementImg.addEventListener("click", () => previewImage(elmnt.link, elmnt.name));

  return cardElement;
}

function renderCard(elmnt) {
  const newElmnt = createCard(elmnt);
  elementsContainer.prepend(newElmnt);
}

function renderInitialCards() {
  initialCards.forEach(function (elmnt) {
    renderCard(elmnt);
  });
}

renderInitialCards();

function handleAddNewCard(event) {
  event.preventDefault();
  const elmnt = { name: elementName.value, link: elementLink.value };
  renderCard(elmnt);

  newElement.reset();
  closePopup(popupAddElement);
}

elemAddBtn.addEventListener("click", () => {
  openPopup(popupAddElement);
  newElement.reset();
});

popups.forEach((popup) => {
  popup.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("button_type_close") ||
      event.target.classList.contains("popup_opened")
    ) {
      closePopup(popup);

    }
  });
});

popupForm.addEventListener('submit', addValueProfile);
newElement.addEventListener("submit", handleAddNewCard);

openProfileEdit.addEventListener('click', () => {
  addValue();
  openPopup(editProf);
});