import express from "express";
import cors from "cors";

import loginRoute from "../routes/registration-login-management/login";

module.exports = function(app) {
  // CORS middleware definition
  app.use(
    cors({
      origin: "*",
      credentials: true
    })
  );

  // Declare express.json()
  app.use(express.json());

  // Routes definition
  app.use("/parity/hgo/api", loginRoute);

  app.use(function(req, res) {
    res.statusCode = 404;
    res.render("404");
  });
};
