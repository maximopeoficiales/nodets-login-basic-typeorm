import { hash } from "bcrypt";


export const hashPassword = async (myPlaintextPassword: string) => {
    return await hash(myPlaintextPassword, 10);
}

//   public static async checkUser(username: string, password: string) {
//     const currentUser = await UserModel.findOne({ where: { username } });
//     const match = await compare(password, currentUser!.password);
//     if (match) {
//         //login
//     }
// }