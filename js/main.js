document.addEventListener("DOMContentLoaded", () => {
    const logosContainer = document.querySelector('.client-logos');
    const logos = document.querySelectorAll('.client-logos img');
    const containerWidth = document.querySelector('.clients').offsetWidth;

    // Calculate total width of the logos + margin to determine scroll distance
    let totalWidth = 0;
    logos.forEach(logo => {
        totalWidth += logo.offsetWidth + 300; // logo width + margin (space between logos)
    });

    // Clone the logos for the seamless loop effect
    logosContainer.innerHTML += logosContainer.innerHTML; // Clone the logos inside the container

    // Set up a function to keep the logos moving smoothly
    let currentPos = 0;  // Current position of the logos

    function moveLogos() {
        currentPos -= 1;  // Move the logos left by 1px

        // If the first logo has moved off the screen, reposition it at the end
        if (currentPos <= -totalWidth / 2) {
            currentPos += totalWidth / 2;  // Reset position to create an infinite loop
        }

        // Apply the new position with smooth scrolling
        logosContainer.style.transform = `translateX(${currentPos}px)`;

        // Keep calling the moveLogos function to create the continuous scroll effect
        requestAnimationFrame(moveLogos); // Smooth animation frame
    }

    // Start the animation
    moveLogos();
});



document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    let videoPlayed = false;

    // Play the video
    preloader.play();

    // Listen for when the video ends
    preloader.addEventListener('ended', function() {
        if (!videoPlayed) {
            videoPlayed = true; // Mark that the video has played at least once
            preloader.style.display = 'none'; // Hide the video
            mainContent.style.display = 'block'; // Show the main content
        } else {
            // If the video has played, we can keep looping until the page is loaded
            preloader.currentTime = 0; // Reset to the beginning
            preloader.play(); // Play again
        }
    });

    // Optional: Handle errors
    preloader.onerror = function() {
        console.error("Error loading the preloader video.");
        // Hide the video and show the main content on error
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    };
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('nav-sticky');
    } else {
        navbar.classList.remove('nav-sticky');
    }
});

(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
   $(document).ready(function () {
    var $videoSrc;

    $('.btn-play').click(function () {
        // Set the video source when the play button is clicked
        $videoSrc = 'path/to/your/video.mp4'; // Update with your video file path
    });

    $('#videoModal').on('shown.bs.modal', function (e) {
        // Set the video source and autoplay when the modal is shown
        $("#video source").attr('src', $videoSrc);
        $("#video")[0].load(); // Load the new video
        $("#video")[0].play(); // Play the video
    });

    $('#videoModal').on('hide.bs.modal', function (e) {
        // Pause and reset the video when the modal is hidden
        $("#video")[0].pause();
        $("#video")[0].currentTime = 0; // Reset to the start
    });
});



    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

