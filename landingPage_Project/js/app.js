/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const list = document.getElementById("navbar__list"); // getting the navigation bar as an unordered list and storing it in list constant
const sections = document.querySelectorAll("section"); // getting all the sections in our document and storing them in the sections constant
const fragment = document.createDocumentFragment(); // creating a new fragment for better performance

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//Building the go to the top button:
//Using the code snippet from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById("myBtn");

// When the user scrolls down 900px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// call the function When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// below is the function that will build our navigation bar
function navBuilder() {
  // loop over all of the sections in our document
  sections.forEach((section) => {
    //get the id and data-nav attributes of each section and store them in constants
    const secId = section.id;
    const secTitle = section.dataset.nav;
    // create a list item element and an anchor element
    const listItem = document.createElement("li");
    const listAnch = document.createElement("a");
    // add an href and text content
    listAnch.href = `#` + secId;
    listAnch.textContent = secTitle;
    listAnch.classList.add("menu__link");

    listAnch.addEventListener("click", (evt) => {
      evt.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
    // add the anchor element to the list item
    listItem.appendChild(listAnch);
    // add the list item to the fragment
    fragment.appendChild(listItem);
  });
  // loop finished
  // add the fragment to the unordered list
  list.appendChild(fragment);
}
// build the nav
window.addEventListener("DOMContentLoaded", navBuilder);
// the function below will highlight the section that is currently in the viewport as well as its corresponding link in the navigation bar
function highlight() {
  // loop over all of the sections in our document
  sections.forEach((section) => {
    // get the top dimensions of the current section in the iteration and store it in the secTop constant
    const secTop = section.getBoundingClientRect().top;
    // get the corresponding link of that section and store it in the secLink constant
    const secLink = document.querySelector(`a[href="#${section.id}"]`);
    // if the top dimensions of the current section are between 0 and 250 or in other words are withing the view port
    if (secTop > 0 && secTop < 250) {
      // add the your-active-class class to that element as well as the active class for its corresponding link in the navigation bar
      section.classList.add("your-active-class");
      secLink.classList.add("active");
    } else {
      // when the element is not in viewport, remove the your-active-class class from that element as well as the active class for its corresponding link in the navigation bar
      section.classList.remove("your-active-class");
      secLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", highlight);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
