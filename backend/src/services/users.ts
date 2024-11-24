import { User }from "../utils/db";

const getUsers = async () => {
    return await User.findAll({});
};

const addUser = async (user: User) => {
    return await User.create(user);
}

export default { getUsers, addUser };