const userLogoutRoute = (req, res) => {
  res.clearCookie("token");
  res.status(201).json({
    message: "You have been logged out.",
    token: req.cookies.token,
    success: true,
  });
};

module.exports = { userLogoutRoute };
