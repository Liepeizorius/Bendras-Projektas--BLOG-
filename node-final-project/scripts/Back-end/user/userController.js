const User = require("./userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

signUp = async (request, response) => {
  let user = new User(request.body);
  console.log(request.body);
  try {
    let createdUser = await user.save();
    response.json(createdUser);
  } catch (error) {
    response.status(400).json(error);
  }
};

login = async (request, response) => {
  try {
    let user = await User.findOne({
      username: request.body.username,
    });
    if (!user) throw "User doesn't exist";

    let res = await bcrypt.compare(request.body.password, user.password);
    if (!res) throw "incorrect password";

    let token = await jwt
      .sign({ id: user._id.toHexString() }, "superSecret")
      .toString();

    user.sessionToken.push({ token });
    await user.save();
    response.header("user-auth", token).json(user);
  } catch (e) {
    console.log(e);
    response.status(401).json(e);
  }
};

logout = async (request, response) => {
  let token = request.token;
  let user = request.user;
  try {
    await user.update({
      $pull: {
        sessionToken: {
          token,
        },
      },
    });
    response.json("successful logout");
  } catch (e) {
    response.status(400).json(e);
  }
};

getAllUsers = (request, response) => {
  console.log(0);
  User.find({}, (items, error) => {
    if (error) return response.json(error);
    response.json(items);
  });
};

getAllArticles = (request, response) => {
  console.log(0);
  Article.find({}, (items, error) => {
    if (error) return response.json(error);
    response.json(items);
  });
};

module.exports = {
  signUp,
  login,
  logout,
  getAllUsers,
};
