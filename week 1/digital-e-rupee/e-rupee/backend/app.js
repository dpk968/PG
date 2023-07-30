// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/api', routes);
app.use(cors({
  origin:"http://localhost:3000",
}));



mongoose.connect('mongodb+srv://deepak:EUiXHygM72rTSRpb@cluster0.3dxu4en.mongodb.net/pgminiproject?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
