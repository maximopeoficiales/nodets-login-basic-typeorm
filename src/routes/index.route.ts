import { Router } from "express";
import { indexProducts, getLogin, postUser, postLogin } from "../controllers/user.controller";
const router: Router = Router();

router.get("/", indexProducts);
router.get("/login", getLogin);
router.post("/login", postLogin);
router.post("/create-user", postUser);

export default router;
