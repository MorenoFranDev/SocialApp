import Follows from "../models/follows.models"

export const newFollow=async (req, res)=>{
    let { authorization } = req.headers
    let { id } = req.body
    
    const result = await Follows.create({
        "Person_Follow": id,
        "Person_Followers":authorization
    })
    result.save()
    // console.log(`Authorization: ${authorization} Id: ${id}`)
    res.json({"msg":"Follow Successfully"}).status(200)
}