const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/test', (req, res) => {
  data = {
    'text': "test"
  };

  res.json(data);
  console.log(`Sent ${data}`);
});



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));