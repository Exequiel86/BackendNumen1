const { Wine } = require("../models/Wines");

const validarId = async (req, res, next) => {
  try {
    const vinos = await Wine.findById(req.params.id);
    if (vinos !== null) {
      next();
    } else {
      res.status(400).json({msg: "El id ingresado no se encuentra en la base de datos." });
    }
  } catch (error) {
    res.status(400).json({msg: "El formato de id ingresado es inválido, revíselo y vuelva a intentarlo", error,});
  }
};

module.exports = { validarId };
