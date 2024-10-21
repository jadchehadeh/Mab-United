document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');

    preloader.addEventListener('ended', function() {
        // Redirect to another page after the preloader ends
        window.location.href = 'main-page.html'; // Change to your target page
    });

    // Optional: Handle errors
    preloader.onerror = function() {
        console.error("Error loading the preloader video.");
        // Redirect immediately if there's an error
        window.location.href = 'main-page.html'; // Change to your target page
    };
});
