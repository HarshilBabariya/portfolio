"use strict";

const feedbacks = [
  {
    name: "Kashi sekhda",
    avatar: "./assets/images/avatar-1.png",
    text: "Harshil was hired to implement figma design to corporate identity web app. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of the client.",
  },
  {
    name: "Nirav Patel",
    avatar: "./assets/images/avatar-5.png",
    text: "Harshil's expertise in front-end development was instrumental in bringing our web application to life. He has done the great job before the expected time. He suggests some of the best practices to keep in project that helps in future also.",
  },
  {
    name: "George Jijo",
    avatar: "./assets/images/avatar-4.png",
    text: "Harshil has good experience in reactJs. He was hired to create the data recovery application for reduce time to insert the data to existing tables via eventhub and api also. He has such a nice hands on design so that the user can easily undestand what to do.",
  },
];

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDate = document.querySelector("[data-modal-date]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

function getRandomDate() {
  const startDate = new Date("01-03-2022");
  const endDate = new Date("01-03-2023");
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  return (
    randomDate.toISOString().slice(8, 10) +
    " " +
    months[randomDate.getUTCMonth()] +
    ", " +
    randomDate.getFullYear()
  );
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form1 = document.querySelector("[data-form-1]");
const formInputs1 = document.querySelectorAll("[data-form-input-1]");
const formBtn1 = document.querySelector("[data-form-btn-1]");

const form2 = document.querySelector("[data-form-2]");
const formInputs2 = document.querySelectorAll("[data-form-input-2]");
const formBtn2 = document.querySelector("[data-form-btn-2]");

// add event to all form input field of feedback form
for (let i = 0; i < formInputs1.length; i++) {
  formInputs1[i].addEventListener("input", function () {
    // check form validation
    if (form1.checkValidity()) {
      formBtn1.removeAttribute("disabled");
    } else {
      formBtn1.setAttribute("disabled", "");
    }
  });

  formBtn1.addEventListener("click", function () {
    event.preventDefault();
    const name = document.getElementsByName("name")[0].value;
    const feedback = document.getElementsByName("feedback")[0].value;
  });
}

// add event to all form input field of contact form
for (let i = 0; i < formInputs2.length; i++) {
  formInputs2[i].addEventListener("input", function () {
    // check form validation
    if (form2.checkValidity()) {
      formBtn2.removeAttribute("disabled");
    } else {
      formBtn2.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
const feedbackList = document.getElementById("feedback-list");

feedbacks.forEach((testimonial) => {
  const listItem = document.createElement("li");
  listItem.classList.add("testimonials-item");

  const contentCard = document.createElement("div");
  contentCard.classList.add("content-card");
  contentCard.setAttribute("data-testimonials-item", "");

  contentCard.addEventListener("click", () => {
    testimonialsModalFunc();
    modalImg.src = testimonial.avatar;
    modalImg.alt = testimonial.name;
    modalTitle.textContent = testimonial.name;
    modalDate.textContent = getRandomDate();
    modalText.innerHTML = `<p>${testimonial.text}</p>`;
  });

  const avatarBox = document.createElement("figure");
  avatarBox.classList.add("testimonials-avatar-box");

  const avatarImg = document.createElement("img");
  avatarImg.src = testimonial.avatar;
  avatarImg.alt = testimonial.name;
  avatarImg.width = 60;
  avatarImg.setAttribute("data-testimonials-avatar", "");

  const testimonialTitle = document.createElement("h4");
  testimonialTitle.classList.add("h4", "testimonials-item-title");
  testimonialTitle.setAttribute("data-testimonials-title", "");
  testimonialTitle.textContent = testimonial.name;

  const testimonialText = document.createElement("div");
  testimonialText.classList.add("testimonials-text");
  testimonialText.setAttribute("data-testimonials-text", "");
  testimonialText.innerHTML = `<p>${testimonial.text}</p>`;

  avatarBox.appendChild(avatarImg);
  contentCard.appendChild(avatarBox);
  contentCard.appendChild(testimonialTitle);
  contentCard.appendChild(testimonialText);
  listItem.appendChild(contentCard);
  feedbackList.appendChild(listItem);
});
