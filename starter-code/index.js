// navigation
const nav = document.querySelector('.primary-navigation');
// button
const navToggle = document.querySelector('.mobile-nav-toggle');

// when someone click the hamburger button
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    } 

    console.log(navToggle.getAttribute('aria-expanded'))
})


