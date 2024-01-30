import jwt from "jsonwebtoken";

const verifyLoggedIn = (req, res, next) => {
  const { IToken } = req.cookies;
  console.log(IToken);
  if (!IToken) {
    res.status(401).json({ errorMessage: "No token provided, log in first" });
  }
  jwt.verify(IToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ errorMessage: "Failed to verify token" });
    }
    console.log(decoded);
    req.userId = decoded;
    next();
  });
};

export default verifyLoggedIn;
