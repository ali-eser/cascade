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

const addItem = async (itemToAdd) => {
  try {
    const newItem = await Item.create({ itemToAdd });

    // Respond with the newly created item
    return { message: "Item added successfully!", item: newItem };
  } catch (error) {
    console.error("Error adding item:", error);
    return { message: `Error adding item: ${error}` };
  }
}


export default { fetchItem, addItem }