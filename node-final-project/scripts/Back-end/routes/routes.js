const router = require("express").Router();
const UserController = require("../user/userController");
const UserMiddleware = require("../authenticate");
const ArticleController = require("../article/articleController");

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

router.post("/scripts/Back-end/signup", UserController.signUp);
router.post("/scripts/Back-end/login", UserController.login);
router.get(
  "/scripts/Back-end/logout",
  UserMiddleware.authenticate,
  UserController.logout
);
router.get(
  "/scripts/Back-end/",
  UserMiddleware.authenticate,
  ArticleController.getAllArticles
);
router.get(
  "/scripts/Back-end/",
  UserMiddleware.authenticate,
  UserController.getAllUsers
);

module.exports = router;
