import { Router } from "express";
import { newFollow } from "../controllers/follows.controller";
const router = Router()

router.post('/new-follow',newFollow)

export default router