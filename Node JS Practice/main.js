


const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5500;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Specify the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`); // Generate a unique filename based on the current timestamp
  },
});

const upload = multer({ storage: storage });

// Serve HTML form for file upload
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload when the client sends a POST request to /upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
