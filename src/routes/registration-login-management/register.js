import express from "express";
import _ from "lodash";

import db from "../../db/db";

const router = express.Router();

const members = db();

router.post("/register", async (req, res) => {
  try {
    const email = req.body.email;

    // Check if the member exist already
    const isMemberRegisteredAlready = members.find(m => {
      return m.email === email;
    });

    if (isMemberRegisteredAlready) {
      return res.status(400)({
        error: "Member already registered."
      });
    }

    // If not yet, Store the Registration Object
    const newMember = _.pick(req.body, [
      "accountID",
      "accountName",
      "address",
      "type",
      "email",
      "phoneNumber",
      "hauler_grower",
      "password"
    ]);

    // Add to Mock Database
    members.push(newMember);

    res.status(201).json({
      newMember
    });
  } catch (error) {
    res.status(500).send("Something failed - " + error);
  }
});

module.exports = router;
