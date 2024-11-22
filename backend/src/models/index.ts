import User from './user';
import Item from "./item";

User.hasMany(Item);
Item.belongsTo(User);

User.sync({ alter: true }).then(r => console.log(r));
Item.sync({ alter: true }).then(r => console.log(r));

export { User, Item };