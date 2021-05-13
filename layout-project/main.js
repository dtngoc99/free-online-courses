$(document).ready(function(){

    $(".layout .content .head-info .head-search input").focus(function () {
        $('.layout .content .head-info .head-search .search-icon').css("display", "none");
    });
    $(".layout .content .head-info .head-search input").focusout(function () {
        $('.layout .content .head-info .head-search .search-icon').css("display", "block");
    });
})