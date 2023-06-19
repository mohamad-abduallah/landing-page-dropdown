$(document).ready(function () {
    //Dropdown list menu in desktop
    $(".nav-rotate-one").click(function () {
        $(".dropdown-list").toggleClass("show");
        $(".nav-rotate-one").toggleClass("show");
        $(".rotate-one").toggleClass("rotate");

        $(".dropdown-list-tow").removeClass("show");
        $(".nav-rotate-tow").removeClass("show");
        $(".rotate-tow").removeClass("rotate");
    });

    $(".nav-rotate-tow").click(function () {
        $(".dropdown-list-tow").toggleClass("show");
        $(".nav-rotate-tow").toggleClass("show");
        $(".rotate-tow").toggleClass("rotate");

        $(".dropdown-list").removeClass("show");
        $(".nav-rotate-one").removeClass("show");
        $(".rotate-one").removeClass("rotate");
    });

    //Show Menu Bar
    $(".navbar-toggler").click(function () {
        $('.offcanvas-end').toggleClass("show-menu");
        $(".modal-backdrop").toggleClass("show disFlex");
        $(".navbar-toggler").toggleClass("rotate-btn");

        var visibility = $('.offcanvas-end').css('visibility');
        $('.offcanvas-end').css('visibility', visibility === 'visible' ? 'hidden' : 'visible');
    });
});
