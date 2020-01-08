$(document).ready(function() {
    $(".menu-icon").click(function () {
        $(this).toggleClass("open");
        $(".sidebar nav").toggleClass("nav-mobile--show");
        $(".message-icon").toggleClass("no-visible");
    });


    $('.popup-open').click(function() {
        $('#active-card').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });
    $('.popup-close-ok').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });
    $('.popup-ok').click(function() {
        let modal = $(this).parents('.popup-fade');
        let modalId = modal.attr("id");
        modal.fadeOut();
        let newModal = '';
        switch (modalId) {
            case "active-card":
                newModal = "popup-sms-pin";
                break
            case "popup-sms-pin":
                newModal = "popup-pin";
                break
            case "popup-pin":
                newModal = "popup-congratulations";
                break
        }
        $('#' + newModal).fadeIn();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });

    // enter form

    $(".login .header .sign").click(function() {
        $(".login form .reg-info").fadeOut(function() {
            $(".login form .input-info").slideDown()
        });
    });

    $(".login .header .reg").click(function() {
        $(".login form .input-info").fadeOut(function() {
            $(".login form .reg-info").slideDown()
        });
    });

    $(".forget").click(function () {
        $(".input-forget").css("display", "flex")
    })
});
