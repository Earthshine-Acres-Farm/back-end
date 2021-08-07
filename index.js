const server = require('./api/server');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
