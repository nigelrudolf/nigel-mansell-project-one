const menuButton = document.querySelector('.menu-button');
// const headerNavLinks = document.querySelector('.header-nav-links');

const smallBreakpoint = 875;

// let width = window.innerWidth;

// function displayWindowSize() {
//     if (width > smallBreakpoint) {
//         // headerNavLinks.classList.add('sr-only');
//         // menuButton.classList.add('sr-only');
//         console.log("Window is equal to or greater than 748px");
//     } else if (width < smallBreakpoint) {
//         // headerNavLinks.classList.remove('sr-only');
//         console.log("Window is less than 748px");
//     }
// }

// function main() {
//     window.addEventListener('load', displayWindowSize, false);
//     window.addEventListener('resize', displayWindowSize, false);
// }

// main();



// https://stackoverflow.com/questions/18477016/switching-css-classes-based-on-screen-size
function responsive() {
    $(window).on('resize', function() {
        if($(window).width() < smallBreakpoint) {
            $('.header-nav-links').addClass('sr-only');
            $('.menu-button').removeClass('sr-only');
            $('.social-media-links').addClass('sr-only');
        }else{
            $('.header-nav-links').removeClass('sr-only');
            $('.social-media-links').removeClass('sr-only');
            $('.menu-button').addClass('sr-only');
        }
    }).resize();
}

function displayHeaderNavLinks() { 
    // let button = document.querySelector(".menu-button");
    // let button = document.querySelector(".menu-button").classList;
    let navLinks = document.querySelector('.header-nav-links').classList;
    let socialLinks = document.querySelector('.social-media-links').classList;
    navLinks.toggle('sr-only');
    socialLinks.toggle('sr-only');
} 

function main() {
    responsive();
    menuButton.addEventListener('click', displayHeaderNavLinks);
}

main();



// https://stackoverflow.com/questions/10858523/css-transform-with-element-resizing