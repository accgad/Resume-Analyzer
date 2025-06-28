const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

// Basic route to check server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const multer = require('multer');
const path = require('path');

// Set up storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will go to /server/uploads/
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('resume'), (req, res) => {
    if(!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send("File uploaded successfully.");
});
