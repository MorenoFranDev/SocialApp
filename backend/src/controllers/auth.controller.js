import Person from "../models/person.models";

export const getLogin = async (req, res) => {
  const { username, password } = req.body;
  const setPerson = await Person.findOne({ where: { username } });
  try {
    if(setPerson===null) return res.status(500).end()
    console.log(setPerson.password===password)
    if(setPerson.password != password) return res.status(500).end()
    res.json({
        msg: "Init session successfully",
        authorization: setPerson.id,
        username: setPerson.username,
        profileImg: setPerson.profileImg,
      })
      .status(200);
  } catch (error) {
    res.status(404)
  }
};

export const registerUser = async (req, res) => {
  console.log("\nREGISTER USER POST\n");
  let { username, password } = req.body;
  if (
    username === "" ||
    username == null ||
    password === "" ||
    password == null
  )
    res.json({ msg: "Error al crear ingresar datos" }).status(500);
  try {
    let newPerson = await Person.create({ username, password });
    await newPerson.save();
    res
      .json({
        msg: "Create successfully",
        authorization: newPerson._previousDataValues.id,
        username: newPerson._previousDataValues.username,
      })
      .status(200);
  } catch (e) {
    console.log(e);
    res.json({ msg: "Error al crear usuario" }).status(500);
  }
};

export const removeUser = async (req, res) => {
  console.log("UPDATE USER");
  try {
    let { id } = req.params;
    const updatePerson = await Person.update(
      { state: false },
      { where: { id } }
    );
    await updatePerson.save();
    res.json({ msg: "Update successfully" });
  } catch {
    res.json({ msg: "Error in data" });
  }
};
