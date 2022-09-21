import express from "express";
import "dotenv/config";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
