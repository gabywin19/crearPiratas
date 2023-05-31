const pirate= require('../Models/pirate.models');

module.exports.create= async(req,res)=>{
    try {
      const piratas = await pirate.find();
      let captainExist = false;
      let verify = (req.body.crewPosition === 'Captain');

      piratas.map((pirata) => {
        if (pirata.crewPosition === 'Captain') {
          captainExist = true;
        }
      });

      if (captainExist && verify) {
        res.status(400).json({ 
          message: 'Ya existe un Capitan',
          piratas,
        });
        return true;
      }
      
      const test = await pirate.create(req.body);

      res.json({ 
        message: 'Pirata Creado!!',
        test,
        body: req.body,
      });
    } catch (error) {
      res.status(500).json({
        body: req.body,
        message:'Error al crear el Producto',
        error,
    });
  }
};

module.exports.index= async(req,res)=>{
  try {
     const verPirate= await pirate.find().sort({pirateName: -1});
     res.json( verPirate)
  } catch (error) {
      res.status(500).json({
        message:'No hemos podido ver a los Piratas',
        error,
      });
  }
};

module.exports.get= async(req,res)=>{
  try {
   const onePirate= await pirate.findOne( { _id: req.params.id } );
   res.json(  onePirate )
  } catch (error) {
    res.status(500).json({
      id: req.params.id,
      message:'No hemos podido encontrar el Pirata',
      error,
  });
}
};


module.exports.remove= async(req,res)=>{
  try {
    const pirateDelete = await pirate.deleteOne( { _id: req.params.id } );
    res.json({
      message: "Pirata Eliminado"
    })
  } catch (error) {
    res.status(500).json({
      id: req.params.id,
      message:'No hemos podido Eliminar el Pirata',
      error,
  });
}
};


