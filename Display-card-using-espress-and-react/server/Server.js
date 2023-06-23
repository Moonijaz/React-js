const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

//getting data as json
app.get('/users', (req, res) => {
    res.json({ users: ['user1', 'user2'] });
  });

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../my-react-app/build')));

// // An example API endpoint
// app.get('/api/hello', (req, res) => {
//   res.send({ message: 'Hello from the server!' });
// });

// // Catchall handler: for any request that doesn't match the above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../my-react-app/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
