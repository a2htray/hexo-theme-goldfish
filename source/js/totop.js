(function($) {
    var upperLimit = 1000;
    var scrollElem = $('#totop>a');
    var scrollSpeed = 1600;
    scrollElem.hide();

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); 
        }else{
            $(scrollElem).stop().fadeTo(300, 0);
        }
    });

    $(scrollElem).click(function(){
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false;
    });
})(jQuery);