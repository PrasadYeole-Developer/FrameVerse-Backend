const app = require("./src/app");
const connectToDB = require("./src/db/db");
require("dotenv").config();
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`Server started running on PORT : ${process.env.PORT}`);
});
