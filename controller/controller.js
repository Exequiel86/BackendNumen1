const { Wine } = require("../models/Wines");
const { validationResult } = require("express-validator");
const axios = require('axios');

const vistaUno = (req, res) => {
  res.render("index", { title: "Express" });
};

const vistaVinos = async (req, res) => {
  const vinos = await Wine.find();
  res.json({ vinos });
};

const vistaUnVino = async (req, res) => {
  try {
    const vinos = await Wine.findById(req.params.id);
    res.json({ vinos });
  } catch (error) {
    res.status(400).json({ msg: "error de id", error });
  }
}
;

const crearVino = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const vino = new Wine(req.body);
      await vino.save();
      res.status(201).json({ vino, msg: "El vino se cargó correctamente" });
    } else {
      res.status(501).json(error);
    }
  } catch (err) {
    res.status(501).json({ msg: "Hubo un error o el producto ya esta en existencia", err,});
  }
};

const editarVino = async (req, res) => {
  try {
      const error = validationResult(req)
      if (error.isEmpty()) {
          const {id} = req.params
          const newWine = req.body
          const oldWine = await Wine.findByIdAndUpdate(id, req.body)
          res.status(202).json({oldWine, msg: "Se ha realizado la edicion correctamente", newWine})
      } else {
          res.status(501).json(error)
      }
  } catch (err) {
      res.status(501).json({msg: "Error al editar la información", err})
  }
}

const borrarVino = async (req, res) => {
  try {
      const vinos = await Wine.findByIdAndDelete(req.params.id)
      res.json({msg:"El producto se ha eliminado correctamente", vinos})
  } catch (error) {
      res.status(400).json({msg:"Ha ocurrido un error a la hora de eliminar el producto."})
  }
}

const consultaAxios = async (req, res) =>{
  try {
  const respuesta = await axios.get('http://api-cocktails.herokuapp.com/',{ timeout: 5000})
    res.json({status: respuesta.status, data: respuesta.data})
  } catch (error) {
    res.json({status: error.response.status, data: error.response.data})
  }
}

module.exports = { vistaUno, vistaVinos, vistaUnVino, crearVino, editarVino, borrarVino, consultaAxios};
