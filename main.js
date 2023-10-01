document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('camera');
    const captureButton = document.getElementById('capture');

    let stream; // To store the camera stream

    // Check if the user's browser supports camera access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (cameraStream) {
                stream = cameraStream; // Store the camera stream

                videoElement.srcObject = stream;
            })
            .catch(function (error) {
                console.error('Error accessing the camera: ', error);
            });

        // Capture and save the image
        captureButton.addEventListener('click', () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

            // Convert the canvas data to a data URL
            const dataURL = canvas.toDataURL('image/png');

            // Create a download link for the image
            const a = document.createElement('a');
            a.href = dataURL;
            a.download = 'captured_image.png';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Stop the camera stream and turn off the camera
            stream.getTracks().forEach(track => track.stop());
            videoElement.srcObject = null; // Turn off the camera feed
        });
    } else {
        console.error('Camera access is not supported in this browser.');
    }
});
