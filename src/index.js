import express from "express";
import server from "./server/server";

const app = express();

const PORT = process.env.PORT || 7700;

server(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
