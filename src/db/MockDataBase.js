class MockDataBase {
  constructor() {
    this.hgoMembers = [
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
  }

  getHGOMembers() {
    return this.hgoMembers;
  }
}

module.exports = MockDataBase;
