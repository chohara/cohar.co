/**
 * OSCILLOSCOPE WAVEFORM VISUALIZER
 * Realistic CRT phosphor display with Web Audio API
 * Only animates when audio is playing
 */

class OscilloscopeVisualizer {
    constructor(canvas, audioElement, statusElement) {
        this.canvas = canvas;
        this.audioElement = audioElement;
        this.statusElement = statusElement;
        this.ctx = canvas.getContext('2d');

        // Set canvas resolution
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        // Web Audio API setup
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.bufferLength = null;
        this.source = null;
        this.isInitialized = false;
        this.isPlaying = false;

        // Oscilloscope rendering parameters
        this.trailBuffer = []; // For phosphor persistence effect
        this.maxTrailLength = 3; // Number of frames to keep for trail

        // Colors - Pure cyan phosphor on black
        this.phosphorColor = '#00FFFF';
        this.glowColor = 'rgba(0, 255, 255, 0.5)';
        this.backgroundColor = '#000000';

        // Bind events
        this.audioElement.addEventListener('play', () => this.onPlay());
        this.audioElement.addEventListener('pause', () => this.onPause());
        this.audioElement.addEventListener('ended', () => this.onPause());

        // Initialize with static line
        this.drawStaticLine();
    }

    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.width = rect.width;
        this.height = rect.height;
    }

    initAudioContext() {
        if (this.isInitialized) return;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();

            // Oscilloscope settings - high resolution for smooth waveform
            this.analyser.fftSize = 2048;
            this.analyser.smoothingTimeConstant = 0.8;

            this.bufferLength = this.analyser.fftSize;
            this.dataArray = new Uint8Array(this.bufferLength);

            // Connect audio element to analyser
            if (!this.source) {
                this.source = this.audioContext.createMediaElementSource(this.audioElement);
                this.source.connect(this.analyser);
                this.analyser.connect(this.audioContext.destination);
            }

            this.isInitialized = true;
        } catch (error) {
            console.error('Web Audio API initialization failed:', error);
        }
    }

    onPlay() {
        this.initAudioContext();
        this.isPlaying = true;

        // Activate neon status
        this.statusElement.classList.add('playing');

        // Start rendering
        this.render();
    }

    onPause() {
        this.isPlaying = false;

        // Deactivate neon status
        this.statusElement.classList.remove('playing');

        // Show static line when not playing
        this.drawStaticLine();
    }

    drawStaticLine() {
        // Draw a flat line when audio is not playing
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.strokeStyle = this.phosphorColor;
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = 0.3;

        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height / 2);
        this.ctx.lineTo(this.width, this.height / 2);
        this.ctx.stroke();

        this.ctx.globalAlpha = 1;
    }

    render() {
        if (!this.isPlaying) return;

        requestAnimationFrame(() => this.render());

        // Get waveform data
        this.analyser.getByteTimeDomainData(this.dataArray);

        // Clear canvas with slight fade for persistence effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw the waveform
        this.drawWaveform();
    }

    drawWaveform() {
        const sliceWidth = this.width / this.bufferLength;
        let x = 0;

        // Draw glow layers for CRT phosphor effect
        this.ctx.save();

        // Outer glow
        this.ctx.strokeStyle = this.glowColor;
        this.ctx.lineWidth = 4;
        this.ctx.globalAlpha = 0.3;
        this.ctx.filter = 'blur(4px)';
        this.drawWaveformPath(sliceWidth);

        // Middle glow
        this.ctx.strokeStyle = this.glowColor;
        this.ctx.lineWidth = 2;
        this.ctx.globalAlpha = 0.6;
        this.ctx.filter = 'blur(2px)';
        this.drawWaveformPath(sliceWidth);

        // Core line (bright phosphor)
        this.ctx.strokeStyle = this.phosphorColor;
        this.ctx.lineWidth = 1.5;
        this.ctx.globalAlpha = 1;
        this.ctx.filter = 'none';
        this.drawWaveformPath(sliceWidth);

        this.ctx.restore();
    }

    drawWaveformPath(sliceWidth) {
        this.ctx.beginPath();

        let x = 0;
        for (let i = 0; i < this.bufferLength; i++) {
            const v = this.dataArray[i] / 128.0; // Normalize to 0-2
            const y = (v * this.height) / 2;

            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        this.ctx.stroke();
    }
}

// Initialize all oscilloscopes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const canvases = document.querySelectorAll('.oscilloscope-canvas');

    canvases.forEach(canvas => {
        const trackId = canvas.getAttribute('data-track');
        const audioElement = document.querySelector(`.audio-player[data-track="${trackId}"]`);
        const statusElement = document.querySelector(`.track-status[data-track="${trackId}"]`);

        if (audioElement && statusElement) {
            new OscilloscopeVisualizer(canvas, audioElement, statusElement);
        }
    });

    console.log('🎛️ Oscilloscope visualizers initialized');
});
