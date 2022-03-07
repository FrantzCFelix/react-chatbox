'use strict';
const express = require(`express`);
const cookieParser = require(`cookie-parser`);
//const routes = require(`./routes`);
//const controllers = require(`./controllers`);

//const sequelize = require(`./config/connection`);

const app = express();

const PORT = process.env.PORT || 3001;
const URL = process.env.URL || "http://localhost:3000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(`public`));
//app.use(routes);

const httpServer = require('http').createServer(app);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: URL
  },
});




// close the sequalize connection like so: sequelize.close()
// sequelize.sync({ force: true }).then(async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(`Connection has been established successfully.`);
//   } catch (error) {
//     console.error(`Unable to connect to the database:`, error);
//   }



  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`));
// });
