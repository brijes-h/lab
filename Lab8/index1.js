var macaddress = require('macaddress');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/submit">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" required><br>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" required><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  macaddress.all().then(function (all) {
    var macAddress = JSON.stringify(all, null, 2);
    // Get the current login time
    var loginTime = new Date().toLocaleString();
    
    res.send(`MAC Address: ${macAddress}<br>Login Time: ${loginTime}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
