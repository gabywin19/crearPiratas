const express= require("express");
const app= express();
const port=6060;
require('./Server/Config/mongoose.config');
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const routes = require('./Server/Routes/pirate.routes');
routes(app);

app.listen(port, ()=>console.log('Server ON'));