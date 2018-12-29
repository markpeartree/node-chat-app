const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(publicPath));

// app.get("/", (req, res) => {
//   res.sendFile(publicPath + '/index.html');
// })

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
