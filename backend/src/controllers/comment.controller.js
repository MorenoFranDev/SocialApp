import Comment from "../models/comment.model"


export const sendComment = async (req, res) => {
    let { text } = req.body
    let { authorization } = req.headers
    let { id } = req.params
    // const comment = await Comment.create({ "text": text, "PickId": id, "PersonId": authorization })
    // let resp = comment.save()
    // console.log(resp)
    console.log(`${text}\n${authorization}${id}`)
}