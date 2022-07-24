import { Router } from "express";
import { indexProducts, getLogin, postUser, postLogin, getProducts, getLogout } from "../controllers/user.controller";
const router: Router = Router();

router.get("/", indexProducts);
router.get("/login", getLogin);
router.get("/products", getProducts);
router.get("/logout", getLogout);
router.post("/login", postLogin);
router.post("/create-user", postUser);

export default router;
