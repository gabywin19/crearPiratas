const { create,index,remove,get} = require("../Controllers/pirate.controller");

module.exports=(app)=>{
   app.post('/api/pirate', create);
   app.get('/api/pirate', index);
   app.get('/api/pirate/:id', get);
   app.delete('/api/pirate/:id', remove);
  
}
