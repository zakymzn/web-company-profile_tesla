// Menambahkan efek blur pada header ketika web discroll
window.onscroll = function () {
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
$(window).click(function (e) {
    if (e.target != document.getElementById('hamburger') && e.target != document.querySelector('nav')) {
        $('#hamburger').removeClass('hamburger-active');
        $('nav').addClass('hidden');
    }
    if (e.target == document.getElementById('blur-container')) {
        $('#pop-up').addClass('hidden');
        $('#blur-container').addClass('hidden');
    }
});

// Mengubah gambar saat tombol produk diklik
$('#button-model-3').click(function (e) { 
    e.preventDefault();
    $('#model-3').removeClass('hidden');
    $('#model-y').addClass('hidden');
    $('#model-s').addClass('hidden');
    $('#model-x').addClass('hidden');
});

$('#button-model-y').click(function (e) { 
    e.preventDefault();
    $('#model-3').addClass('hidden');
    $('#model-y').removeClass('hidden');
    $('#model-s').addClass('hidden');
    $('#model-x').addClass('hidden');
});

$('#button-model-s').click(function (e) { 
    e.preventDefault();
    $('#model-3').addClass('hidden');
    $('#model-y').addClass('hidden');
    $('#model-s').removeClass('hidden');
    $('#model-x').addClass('hidden');
});

$('#button-model-x').click(function (e) { 
    e.preventDefault();
    $('#model-3').addClass('hidden');
    $('#model-y').addClass('hidden');
    $('#model-s').addClass('hidden');
    $('#model-x').removeClass('hidden');
});

// Menampilkan pop up saat tombol detail fitur diklik
$('#detail-fitur').click(function (e) {
    $('#pop-up').removeClass('hidden');
    $('#blur-container').removeClass('hidden');
});