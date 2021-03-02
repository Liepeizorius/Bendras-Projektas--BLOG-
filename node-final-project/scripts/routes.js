const router = require("express").Router();
const UserController = require("./userController");
const UserMiddleware = require("./authenticate");

// Padeda apdoroti failus, ateinančius į serverį
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage,
});

router.get("/", (request, response) => {
  response.json("Hello world!");
});

router.post("/scripts/signup", UserController.signUp);
router.post("/scripts/login", UserController.login);
router.get(
  "/scripts/logout",
  UserMiddleware.authenticate,
  UserController.logout
);
router.get("/scripts", UserMiddleware.authenticate, UserController.getAllUsers);

module.exports = router;
