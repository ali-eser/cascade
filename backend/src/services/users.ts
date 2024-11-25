import bcrypt from "bcrypt";
import {User} from "../utils/db";

const getUser = async (id? :number) => {
    if (id) {
        try {
            return await User.findByPk(id)
        } catch (e) {
            console.error(e);
        }
    }
    return await User.findAll({});
};

const addUser = async (username: string, email: string, name: string, password: string) => {
    const saltRounds = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, saltRounds);

    return await User.create({
        username,
        email,
        name,
        passwordHash
    });
};

/*const removeUser = async (id :number) => {

};*/

export default { getUser, addUser };