const { json } = require("express");
const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find({}, "-__v -password");

    res.json({
      message: "success get data user",
      data: users,
    });
  },

  admin: (req, res) => {
    if (!user) {
      res.json({
        message: "Invalid JWT token",
      });
    }
    if (req.user == "admin") {
      res.json({
        message: "This is admin page",
      });
    } else {
      res.json({
        message: "Unauthorised access",
      });
    }
  },
};
