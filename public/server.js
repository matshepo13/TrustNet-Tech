const captureButton = document.getElementById('captureButton');
const fingerprintImage = document.getElementById('fingerprintImage');

captureButton.addEventListener('click', async () => {
    try {
        const response = await fetch('/capture-fingerprint');
        const fingerprintData = await response.json();
        fingerprintImage.innerHTML = `<img src="${fingerprintData.image}" alt="Fingerprint">`;
    } catch (error) {
        console.error(error);
        alert('Error capturing fingerprint.');
    }
});
