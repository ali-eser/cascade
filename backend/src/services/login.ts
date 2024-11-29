import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {User} from "../utils/db";

const login = async (username: string, password: string) => {
    try {
        const user = await User.findOne({ where: { username: username } });

        const isCorrect = user === null
            ? false
            : await bcrypt.compare(password, user.passwordHash)

        if (!(user && isCorrect)) {
            return false;
        }

        const userToLogin = {
            username: user.username,
            id: user.id
        };

        const token = jwt.sign(userToLogin, process.env.SECRET || "default_secret_key");

        return { token, user: username, id: user.id };
    } catch (e) {
        console.error(e);
        return 0;
    }
};

export default { login };