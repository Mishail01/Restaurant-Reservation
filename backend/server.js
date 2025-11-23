import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./backend/config/config.env") });

import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
