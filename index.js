const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Elastic Beanstalk!!');
});
app.get('/hello', (req, res) => {
  res.send('Hello, Bro');
});
app.get('/env',(req,res)=>{
  let env_text = process.env.SAMPLE_ENV;
  console.log("env text extracted :",env_text);
  res.send(env_text || "Not defined")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
