const express = require('express'); // import the express package
const helmet = require("helmet");
const cors = require('cors');



const adminRouter = require('./adminPages/adminRouter');
const userRouter = require('./userPages/userRouter');
const checkoutRouter = require('./checkoutPages/checkoutRouter');
const mainRouter = require('./mainPages/mainRouter');

const server = express(); // creates the server

require('dotenv').config()

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"


// const userRoutes = require('./userPages/userRouter');
// const checkoutRoutes = require('./checkoutPages/checkoutRouter');
// const adminRoutes = require('./adminPages/adminRouter');
// const mainRoutes = require('./mainPages/mainRouter');

// const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res,next) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.json({message:'Earthshine Acres Farm'});
});
server.use('/admin', adminRouter
//  (req, res) => { 
//   		res.status(200).json({message:'hello from the GET /admin endpoint'})
//   }
);
server.use('/users', userRouter
// (req, res) => { 
//   res.status(200).json({message:'hello from the GET /users endpoint'})
// }
);
server.use('/checkout', checkoutRouter
// (req, res) => { 
//   res.status(200).json({message:'hello from the GET /checkout endpoint'})
// }
);
server.use('/main', mainRouter
// (req, res) => { 
//   res.status(200).json({message:'hello from the GET /main endpoint'})
// }
);

server.use((err, req, res, next) => {
  console.log(err)
  // console.log(req.body)
res.status(500).json({
  message: `Something went wrong, ${err} `
})
})
module.exports = server;
