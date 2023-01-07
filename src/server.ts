import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`starting app on port:${PORT}`);
});
