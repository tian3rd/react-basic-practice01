const express = require('express');

const app = express();

const port = process.env.PORT || 4001;

app.get('/', (req, res) => res.send('Hello there!!!'));

app.listen(4001, () =>
  console.log(`Server running at http://localhost:${port}`)
);
