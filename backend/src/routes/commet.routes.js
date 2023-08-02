import { Router } from 'express'
import { sendComment } from '../controllers/comment.controller'

const router = Router()

router.post("/post/:id/comment",sendComment)

export default router