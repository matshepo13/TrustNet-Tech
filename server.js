const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/capture-fingerprint', (req, res) => {
    // Simulate capturing a fingerprint; replace this with actual logic.
    const fingerprintData = {
        image: '/path/to/fingerprint-image.jpg',
    };

    res.json(fingerprintData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
