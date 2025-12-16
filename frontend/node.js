const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '.jpg');
  }
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
