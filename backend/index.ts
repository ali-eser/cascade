import app from "./app";
import { connectToDatabase } from "./src/utils/db"
import { PORT } from "./src/utils/config";

const start = async () => {
  await connectToDatabase();
  app.listen(PORT);
}

start()
  .then(() => console.log("Server started on port ", PORT))
  .catch(err => console.log("Server failed to start. Error: ", err));
