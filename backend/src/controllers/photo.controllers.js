import Follows from "../models/follows.models";
import Person from "../models/person.models";
import Pick from "../models/picks.models";
import fs from "fs";
import { Op } from "sequelize";


export const getGeneralPost = async (req, res) => {
  console.log("GET ALL PHOTO");
  try {
    let authorization = req.headers.authorization;
    console.log(authorization)
    const pick = await Person.findAll({
      where: { id: { [Op.ne]: authorization } },
      limit: 20,
      attributes: ["username", "profileImg"],
      include: [
        {
          model: Pick,
          attributes: ["path", "createdAt", "PersonId", "id"],
        }
      ],
    });
    res.json(pick).status(200);
  } catch (error) {
    res.json({ "msg": "No hay fotos en la app" })
  }
};

export const getPersonPost = async (req, res) => {
  console.log("GET ALL PERSON PHOTO");
  try {
    let { person } = req.params
    const pick = await Person.findAll({
      where: { username: person },
      limit: 20,
      attributes: ["username", "profileImg"],
      include: [
        {
          model: Pick,
          attributes: ["path", "createdAt", "PersonId", "id"],
        }
      ],
    });
    if (pick.length > 0) { return res.json(pick).status(200) } else { return res.json(pick).status(404) }
  } catch (error) {
    res.json({ "msg": "No hay fotos en la app" }).status(404)
  }
};

export const getFollowsPost = async (req, res) => {
  console.log("GET ALL FOLOWS PHOTO");
  let Id = req.headers.authorization;
  const pick = await Person.findAll({
    where: { Id },
    include: [
      {
        model: Person,
        as: "follower",
      },
    ],
  });
  console.log(pick);
  res.json(pick).status(200);
};

export const getPhoto = (req, res) => {
  let { id } = req.params;
  const imageData = fs.readFileSync(`uploads/${id}`);
  res.setHeader("Content-Type", "image/jpeg");
  res.send(imageData);
};

export const getPost = async (req, res) => {
  let { id } = req.params;
  console.log("ID DE POST: " + id)
  if (!id)
    return res.json({ msg: "Error en identificador de foto" }).status(500);
  console.log(`Foto ID: ${id}`);
  const pick = await Person.findAll({
    attributes: ["username", "profileImg"],
    include: [
      {
        model: Pick,
        where: { id },
        attributes: ["path", "createdAt", "id"],
      },
    ],
  });

  if (pick.length === 0) return res.json({ msg: "empty" });
  console.log(pick)
  res.json(pick).status(200);
};

export const removePhoto = async (req, res) => {
  let { id } = req.params;
  if (!id)
    return res.json({ msg: "Error en identificador de foto" }).status(500);
  const pick = await Pick.update({ state: false }, { where: { id } });
  await pick.save();
  res.json({ msg: "Eliminado correctamente" }).status(200);
};
