const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/authJWT");

const { getAllUser } = require("../controllers/user.controller");
const { register, login } = require("../controllers/auth.controller");

router.get("/", getAllUser);
router.post("/register", register);
router.post("/login", login, verifyToken);
router.get("/admin", verifyToken, function (req, res) {
  if (!user) {
    res.status(403).send({
      message: "Invalid JWT token",
    });
  }
  if (req.user == "admin") {
    res.status(200).send({
      message: "Congratulations! but there is no hidden content",
    });
  } else {
    res.status(403).send({
      message: "Unauthorised access",
    });
  }
});

module.exports = router;
