const User = require("../models/User");
const Otp = require("../models/Otp");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");

module.exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "User with email aready exists !",
      });
    }
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let optResponse = await Otp.create({
      email,
      otp,
    });

    return res.status(200).json({
      success: true,
      message: "OTP send successfully !",
      // remove this because we dont have to show otp in console
      data: optResponse,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to send OTP",
    });
  }
};

module.exports.signUp = async (req, res) => {
  try {
    let { firstName, lastName, email, password, confirmPassword, otp } =
      req.body;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Please fill in the required fields",
      });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password does not match",
      });
    }

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "User with same email already exist",
      });
    }

    const recentOtp = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);
      console.log(recentOtp , "recent otp")
    if (otp !== recentOtp) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      profilePicture: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    return res.status(200).json({
      success: true,
      message: "User signed up successfully",
      user : createUser
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unable to sign up , please try gain",
    });
  }
};
