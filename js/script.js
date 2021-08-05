// preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('loader')
    preloader.classList.add('load-finish')
})


// menu
const hamburger = document.querySelector(".ham");
// for the button
const sideBar = document.querySelector(".side-bar");
// for the ul list
const links = document.querySelectorAll("nav ul li");
// for the li items

hamburger.addEventListener("click", () => {
    sideBar.classList.toggle("open");
    hamburger.classList.toggle("opened");
    //   adds class open to navlinks
    links.forEach(link => {
        link.classList.toggle("fade");
        //   adds class fade to links
    });
});
// sideBar.addEventListener("click", () => {
//     sideBar.classList.add("open");
//     //   adds class open to navlinks
//     links.forEach(link => {
//         link.classList.toggle("fade");
//         //   adds class fade to links
//     });
// });