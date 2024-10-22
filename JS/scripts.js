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