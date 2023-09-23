const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors'); 
const index = require('./models/index');
const apiRoutes =require('./apiRoutes');
const session = require('express-session');


const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('public'));

app.use(cors());
app.use(express.json());


app.use(session({
  secret: 'P#9!Ym2^W8@LsEzQ',
  resave: false,
  saveUninitialized: true,
}));


app.get('/', (req, res) => {
  // Handle the root URL request
  res.send('Hello, World!'); // Replace with your desired response
});

app.use('/api', apiRoutes);

// Sync the database models with the database
sequelize.sync()
.then(() => {
  console.log('Database is connected.');
})
.catch((error) => {
  console.error('Database sync error:', error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
