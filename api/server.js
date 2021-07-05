const express = require('express'); // import the express package
const helmet = require("helmet");
const cors = require('cors');

const server = express(); // creates the server

require('dotenv').config()

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/', (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send('Earthshine Acres Farm');
});

const userRoutes = require('./userPages/userRouter');
const checkoutRoutes = require('./checkoutPages/checkoutRouter');
const adminRoutes = require('./adminPages/adminRouter');
const mainRoutes = require('./mainPages/mainRouter');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/users', userRoutes);
server.use('/checkout', checkoutRoutes);
server.use('/admin', adminRoutes);
server.use('/main', mainRoutes);

server.use((err, req, res, next) => {
  console.log(err)
  // console.log(req.body)
res.status(500).json({
  message: `Something went wrong, ${err} `
})
})
module.exports = server;
