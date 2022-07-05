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

// Menampilkan pop up saat tombol detail fitur diklik
$('#detail-fitur').click(function (e) {
    $('#pop-up').removeClass('hidden');
    $('#blur-container').removeClass('hidden');
});