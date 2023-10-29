const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const port = 3000

// Middleware
app.use(express.json())

app.use('/api', routes);

// routes testing - FOR TESTING ONLY
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/blog', (req, res) => {
    res.send('Good Morning!')
  })

// SAMPLE ONLY FOR GUIDE -------> DATABASENAME (Change database name)
// mongoose.connect('mongodb+srv://admin:admin@zuitt-course-booking.a1svtt9.mongodb.net/DATABASENAME?retryWrites=true&w=majority')

// Database connection to MongoDB
mongoose.connect('')
  .then(() => {
    console.log('connected to MongoDB')
    // Server running in terminal
    app.listen(port, () => {
        console.log(`Node API app is running on port ${port}`)
      })
}).catch((error) => {
console.log(error)
})

// SAMPLE CRUD - GET POST PUT DELETE 
// List of Installed Dependencies: 

// - npm init -y
// - npm install express
// - npm install nodemon
// - npm install mongoose
// - npm install mongodb@41 ( it depends version available in mongodb.com )