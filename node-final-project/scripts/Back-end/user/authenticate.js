const jwt = require("jsonwebtoken");
const User = require("./userModel");

authenticate = async (request, response, next) => {
  let token = request.header("user-auth");
  console.log(token);
  try {
    let decoded = await jwt.verify(token, "superSecret");
    console.log(decoded);
    let user = await User.findById({
      _id: decoded.id,
      "sessionToken.token": token,
    });
    if (!user) throw "Authentication failed";
    request.user = user;
    request.token = token;
    next();
  } catch (e) {
    e = e.message == "jwt malformed" ? "wrong session token" : e;
    response.status(401).json(e);
  }
};

module.exports = {
  authenticate,
};
