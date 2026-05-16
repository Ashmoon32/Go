let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/fun', (req, res) => {
    res.send('<h1 style="color: red;display: flex; justify-content: center;align-items: center;min-height: 100vh;">It is worked! It is fun!</h1>');
});

app.listen(3000, () => {
  console.log("It's worked! It's fun!");
});