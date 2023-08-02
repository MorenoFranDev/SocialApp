import Router from "express"
import { getLogin, registerUser, removeUser, updateUser } from "../controllers/auth.controller"
import upload from "../libs/uploadsFiles"
import Person from "../models/person.models"
const router = Router()

router.post('/login', getLogin)

router.post('/register', registerUser)

router.put('/update-profile/:id', upload.single("file"), async (req, res) => {
    try {
        let { id } = req.params
        let { filename } = req.file
        let { username, status } = req.body
        let profileImg = `http://localhost:3001/uploads/${filename}`
        const updatePerson = await Person.update({ username, status, profileImg }, { where: { id } })
        res.json({ "msg": "Update successfully", "username": username, "profile": profileImg, "authorization": id })
    } catch (e) {
        console.log(e)
        res.json({ " msg": "Error in data" })
    }
})

router.delete('/delete/user/:id', removeUser)


export default router