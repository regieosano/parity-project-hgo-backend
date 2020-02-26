class MockDataBase {
  constructor() {
    this.hgoMembers = [
      {
        accountID: "HGO-1001",
        accountName: "Mighty Hazelnut Group",
        address: "3610 NE Glisan St. Portland, OR 97232",
        type: "Member",
        email: "mightyhazel@yahoo.com",
        phoneNumber: "(855)-437-2160",
        grower_hauler: "Hauler",
        password: "mike43yes"
      },
      {
        accountID: "HGO-1002",
        accountName: "Nut Giver II",
        address: "2322 NW Edgewood PI, Portland, OR 97229",
        type: "Cash",
        email: "nutgiver2@gmail.com",
        phoneNumber: "(900)-123-2338",
        grower_hauler: "Grower",
        password: "nunut23"
      },
      {
        accountID: "HGO-1003",
        accountName: "Farmer Going Nuts",
        address: "4215 NE 82nd Ave, Portland, OR 97220",
        type: "Cash",
        email: "myemail@farmernuts.com",
        phoneNumber: "(700)-111-4566",
        grower_hauler: "Grower",
        password: "farmer123"
      },
      {
        accountID: "HGO-1004",
        accountName: "Let's Go Nuts",
        address: "5005 SE Tibbets St. Portland, OR 97206",
        type: "Member",
        email: "missjenny@hotmail.com",
        phoneNumber: "(890)-311-7865",
        grower_hauler: "Hauler",
        password: "jenny#ok78"
      },
      {
        accountID: "HGO-1005",
        accountName: "Joe's Hot Deals",
        address: "5522 SE Ankeny St, Portland, OR 97215",
        type: "Member",
        phoneNumber: "(900)-211-9078",
        grower_hauler: "Hauler",
        email: "joe@yahoo.com",
        password: "jj456"
      }
    ];
  }

  getHGOMembers() {
    return this.hgoMembers;
  }
}

module.exports = MockDataBase;
