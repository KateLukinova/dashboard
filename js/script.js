$(document).ready(function() {
    $(".menu-icon").click(function () {
        $(this).toggleClass("open");
        $(".sidebar nav").toggleClass("nav-mobile--show");
    })
});
