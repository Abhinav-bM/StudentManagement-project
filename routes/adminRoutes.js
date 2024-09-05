let signInPost = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(200)
      .json({ success: true, message: "User logged in successfully" });
  } catch (err) {
    res.status(500).json("Internal server error");
  }
};


