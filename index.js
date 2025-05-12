const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Elastic Beanstalk! :1');
});
app.get('/hello', (req, res) => {
  res.send('Hello, Bro');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
