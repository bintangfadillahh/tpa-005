const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = {
  register: (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save();

    res.json({
      message: "User registered successfully",
    });
  },

  login: async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
    });
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.json({
        accessToken: null,
        message: "Invalid Password",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.API_SECRET,
      {
        expiresIn: 86400,
      }
    );
    res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      message: "Login success",
      accessToken: token,
    });
  },
};
