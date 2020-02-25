import express from "express";
import _ from "lodash";

import MockDataBase from "../../db/MockDataBase";

const router = express.Router();

const mockDB = new MockDataBase();

const hgoMembers = [
  {
    accountID: "Phillips",
    accountName: "Mike Phillips",
    address: "Portland, Oregon",
    type: "Grower",
    email: "mikephillips@yahoo.com",
    phoneNumber: "",
    hauler_grower: "",
    password: "mike43yes"
  },
  {
    accountID: "De La Cruz",
    accountName: "Juan De La Cruz",
    address: "UST, Manila",
    type: "Grower",
    email: "delacruzjuan@gmail.com",
    phoneNumber: "",
    hauler_grower: "",
    password: "jdlcforever12"
  },
  {
    accountID: "Smith",
    accountName: "Rex Smith",
    address: "Maine, Oregon",
    type: "Grower",
    email: "smithrex@companyxyz.com",
    phoneNumber: "",
    hauler_grower: "",
    password: "rex123"
  },
  {
    accountID: "Lim",
    accountName: "Jenny Lim",
    address: "Kentucky, Oregon",
    type: "Hauler",
    email: "missjenny@parity.com",
    phoneNumber: "",
    hauler_grower: "",
    password: "jenny#ok78"
  },
  {
    accountID: "Perez",
    accountName: "Perez Prado",
    address: "Project 8, Quezon City",
    type: "Hauler",
    phoneNumber: "",
    hauler_grower: "",
    email: "pradz@yahoo.com",
    password: "pp456"
  }
];

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Find if the member exist
    const searchMember = hgoMembers.find(m => {
      return m.email === email && m.password === password;
    });

    if (searchMember) {
      res.status(200).json({
        isSuccessfull: true,
        member: searchMember,
        data: hgoMembers
      });
    } else {
      return res.status(400).json({
        isSuccessfull: false,
        message: "Invalid Credentials!"
      });
    }
  } catch (error) {
    return res.status(500).send({
      error: error
    });
  }
});

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
    hgoMembers.push(newMember);

    res.status(201).json({
      newMember
    });
  } catch (error) {
    res.status(500).send("Something failed - " + error);
  }
});

module.exports = router;
