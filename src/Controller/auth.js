const User = require("../Model/user");
const bcrypt = require("bcrypt");
const moment = require("moment");

const Auth = async (req, res) => {
  const { studentId, password } = req.body;

  const isExist = await User.findOne({ studentId: studentId });

  if (isExist) {
    const validatePassword = await bcrypt.compare(password, isExist.password);

    if (validatePassword) {
      const expiresIn = moment().add(4, "hour").format("YYYY-MM-DD HH:MM:SS");
      res.status(200).json({
        data: {
          studentId,
          studentName: isExist.studentName,
          expiresIn,
          role: isExist.role,
          restrict: isExist.restricted,
        },
      });
    } else {
      res.status(400).json({ success: false });
    }
  }
};

const List = async (req, res) => {
  const data = await User.find();
  res.status(200).json(data);
};

const Permission = async (req, res) => {
  const { restrict, id } = req.body;
  console.log(restrict, id);
  if ((restrict && id) !== undefined) {
    await User.findByIdAndUpdate(id, { restricted: restrict });
    res
      .status(200)
      .json({ message: `Restriction set to ${restrict ? "Yes" : "No"}` });
  }
};

const Register = async (req, res) => {
  const { studentId, password, studentName, role, restricted } = req.body;
  console.log(studentId, password);
  if (studentId !== "" && password !== "") {
    const register = await User.create({
      studentId,
      password,
      studentName,
      role,
      restricted,
    });

    res.status(200).json(register);
  }
};

module.exports = {
  Auth,
  Register,
  List,
  Permission,
};
