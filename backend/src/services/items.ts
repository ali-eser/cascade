import { Item } from "../utils/db";

const fetchItem = async (id?: number) => {
  try {
    if (id) {
      return await Item.findByPk(id);
    }
    return await Item.findAll({});
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default { fetchItem }