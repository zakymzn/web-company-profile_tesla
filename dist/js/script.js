// Navbar fixed
// $(document).ready(function () {
//     window.onscroll = function () {
//         if (window.pageYOffset > $('header').offset(top)) {
//             $('header').addClass('navbar-fixed');
//         } else {
//             $('header').removeClass('navbar-fixed');
//         }
//     }
// });
window.onscroll = function () {
    // const header = document.querySelector('header').offsetTop;
    if (window.pageYOffset > document.querySelector('header').offsetTop) {
        $('header').addClass('navbar-fixed');
    } else {
        $('header').removeClass('navbar-fixed');
    }
}

// Hamburger script
$('#hamburger').click(function () {
    $(this).toggleClass('hamburger-active');
    $('nav').toggleClass('hidden');
});

// Klik di luar hamburger
// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('nav-menu');

// window.addEventListener('click', function (e) {
//     if (e.target != hamburger && e.target != navMenu) {
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// });

$(window).click(function (e) { 
    if (e.target != document.getElementById('hamburger') && e.target != document.querySelector('nav')) {
        $('#hamburger').removeClass('hamburger-active');
        $('nav').addClass('hidden');
    }
});