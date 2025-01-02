const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Validate user input
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  //Further validation can be added here, such as data type validation.
  console.log(user);
  res.status(201).send();
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});