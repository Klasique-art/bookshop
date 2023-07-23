// aos initialisation
AOS.init({
    offset: 100,
    delay: 100,
    duration: 800,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})
// making the navbar sticky
const navbar = document.querySelector("nav")
window.addEventListener("scroll", ()=>{
    navbar.classList.toggle("sticky", scrollY > 80)
    if (scrollY > 70) {
        const searchBar = document.querySelector(".search-wrapper") 
        searchBar.classList.remove("active")
    }
})
// sign-in btn
const signInBtn = document.querySelector(".sign-in-btn")
const closeSignInBtn = document.querySelector(".sign-in-close-btn")
const signInOverlay = document.querySelector(".sign-in-overlay")

signInBtn.addEventListener("click", activateSignInForm)
closeSignInBtn.addEventListener("click", deActivateSignInForm)

function activateSignInForm() {
    signInOverlay.classList.add("active")
}
function deActivateSignInForm() {
    signInOverlay.classList.remove("active")
}
//search bar
const searchBar = document.querySelector(".search-wrapper") 
const searchBtn = document.querySelector(".mobile-search-btn")

searchBtn.addEventListener("click", activateSearch)

function activateSearch() {
    searchBar.classList.toggle("active")
}