import { compare } from "bcrypt";
import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { User } from "../models/User.model";
import { hashPassword } from "../utils/user.utils";

const userRepository = AppDataSource.getRepository(User)


export const indexProducts = async (req: Request, res: Response) => {
    res.render("users/index")
};
export const getLogin = async (req: Request, res: Response) => {
    res.render("users/login")
};
export const getProducts = async (req: Request, res: Response) => {
    console.log(req.session);
    res.render("users/login");
};
export const getLogout = async (req: Request, res: Response) => {
    req.session.destroy((error) => {
        if (error) {
            throw error;
        }
        res.redirect("/");
    });
};
export const postLogin = async (req: Request, res: Response) => {
    const userFind = await userRepository.findOneBy({
        email: req.body.email,
    })
    if (userFind) {
        // comporacion de la contraseña
        const match = await compare(req.body.password, userFind.password);
        if (match) {
            (req.session as any).authenticated = true;
            (req.session as any).user = userFind;
            //login
            res.redirect("/products");
        } else {
            res.render("users/login", {
                msg: "Credenciales incorrectas"
            })
        }
    } else {
        res.render("users/login", {
            msg: "Usuario no encontrado"
        })
    }
};
export const postUser = async (req: Request, res: Response) => {
    // console.log("el usernamees:", req.body.username);

    const user = new User()
    user.username = req.body.username
    user.email = req.body.email
    user.password = await hashPassword(req.body.password)
    await userRepository.save(user);

    res.redirect("/");
}