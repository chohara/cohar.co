/**
 * Minimal JavaScript for Music Page Waveform Animation
 * Detects audio play/pause and animates waveform visualizer
 * Updates track status to show which track is currently playing
 */

(function() {
    'use strict';

    // Get all audio players and track containers
    const audioPlayers = document.querySelectorAll('.audio-player');
    const trackContainers = document.querySelectorAll('.track-container');

    // Initialize event listeners for each audio player
    audioPlayers.forEach((audio, index) => {
        const playerContainer = audio.closest('.player-container');
        const trackContainer = audio.closest('.track-container');
        const trackStatus = trackContainer.querySelector('.track-status');

        // When audio starts playing
        audio.addEventListener('play', function() {
            // Add playing class to activate waveform animation
            playerContainer.classList.add('playing');

            // Update track status
            trackStatus.textContent = 'PLAYING';
            trackStatus.style.color = '#8b4000';
            trackStatus.style.borderColor = '#8b4000';

            // Pause all other tracks
            audioPlayers.forEach((otherAudio, otherIndex) => {
                if (otherIndex !== index && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });

        // When audio is paused
        audio.addEventListener('pause', function() {
            // Remove playing class to stop waveform animation
            playerContainer.classList.remove('playing');

            // Update track status
            trackStatus.textContent = 'STANDBY';
            trackStatus.style.color = '#666666';
            trackStatus.style.borderColor = '#1a1a1a';
        });

        // When audio ends
        audio.addEventListener('ended', function() {
            // Remove playing class to stop waveform animation
            playerContainer.classList.remove('playing');

            // Update track status
            trackStatus.textContent = 'STANDBY';
            trackStatus.style.color = '#666666';
            trackStatus.style.borderColor = '#1a1a1a';
        });
    });

    // Optional: Keyboard shortcuts for better UX
    document.addEventListener('keydown', function(e) {
        // Space bar to play/pause currently playing track (if any)
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();

            // Find if any track is currently playing
            let currentlyPlaying = null;
            audioPlayers.forEach(audio => {
                if (!audio.paused) {
                    currentlyPlaying = audio;
                }
            });

            if (currentlyPlaying) {
                currentlyPlaying.pause();
            } else {
                // If nothing is playing, play the first track
                audioPlayers[0].play();
            }
        }
    });

})();
