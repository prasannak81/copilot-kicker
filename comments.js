// Create web server
const express = require('express');
const app = express();
app.use(express.static('public'));

// Create Comment
app.post('/comments', (req, res) => {
  res.send('Your comment was added successfully');
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});