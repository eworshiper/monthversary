(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    const todayDate = () =>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth();
        const monthNames = ["Jan", "Feb", "Mar", "Apr",
                        "May", "Jun", "Jul", "Aug",
                        "Sep", "Oct", "Nov", "Dec"];
        let mon = monthNames[mm];
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;

        const formattedToday = dd + ' ' + mon + ' ' + yyyy;

        document.getElementById('todayDate').innerText = formattedToday;
    };

    //timer
    const timer = () => {
        let firstDay = new Date(2023, 3, 19, 21, 0);
        let timeElapsed = new Date() - firstDay;
        let days = Math.floor(timeElapsed / 1000 / 60 / 60 / 24);
        let hours = Math.floor(timeElapsed / 1000 / 60 / 60 % 24);
        
        if (hours < 10){
            hours = "0" + hours;
        }

        let minutes = Math.floor(timeElapsed / 1000 / 60 % 60);

        if (minutes < 10){
            minutes = "0" + minutes;
        }

        let seconds = Math.floor(timeElapsed / 1000 % 60);

        if (seconds < 10){
            seconds = "0" + seconds;
        }

        document.getElementById("time-days").innerText = days;
        document.getElementById("time-hours").innerText = hours;
        document.getElementById("time-minutes").innerText = minutes;
        document.getElementById("time-seconds").innerText = seconds;
    };
    
    const startTimer = () =>{
        timer()
        window.setInterval("timer()", 1);
    };

    timer();
    startTimer();
    todayDate();    

    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 90
            }, 100, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

