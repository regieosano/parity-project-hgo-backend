import express from "express";
import _ from "lodash";

import MockDatabase from "../../db/MockDataBase";

const router = express.Router();

const mockDB = new MockDatabase();

const hgoMembers = mockDB.getHGOMembers();

router.post("/register", async (req, res) => {
  try {
    const email = req.body.email;

    // Check if the member exist already
    const isMemberRegisteredAlready = hgoMembers.find(m => {
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

    // Add New Member to Mock Database
    mockDB.setHGOMembers(newMember);

    res.status(201).json({
      newMember
    });
  } catch (error) {
    res.status(500).send("Something failed - " + error);
  }
});

module.exports = router;
