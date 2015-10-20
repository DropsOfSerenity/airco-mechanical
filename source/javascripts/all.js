//= require_tree .

$(function() {
    var burger = $('.ecg-burger');
    var menu = $('.ecg-menu');
    var body = $('body');

    var menuLinks = $('.ecg-menu li.submenu > a')

    $(burger).on('click', function() {
        $(body).toggleClass('open');
    });

    $(menuLinks).on('click', function() {
        $(body).toggleClass('open-sub');
        $(this).parent().toggleClass('open');
    });
});