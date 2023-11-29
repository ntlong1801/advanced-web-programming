const userModel = require("../models/user.m");

const bcrypt = require("bcrypt");

const userController = {
  // [GET] /profile?id={id_user}
  getProfile: async (req, res) => {
    try {
      const infoUser = await userModel.getUserByID(req.query.id);

      const { password, ...others } = infoUser;

      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // [POST] /updateProfile
  updateProfile: async (req, res) => {
    try {
      const infoUser = {
        id: req.body.id,
        name: req.body.fullName,
      };

      const updatedInfoUser = await userModel.updateProfile(infoUser);

      const { password, ...others } = updatedInfoUser;

      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // [POST] /changePassword
  changePassword: async (req, res) => {
    try {
      // check old password
      const user = await userModel.getUserByID(req.body.id);
      const validPassword = await bcrypt.compare(req.body.oldPassword, user.password);
      if (!validPassword) {
        return res.status(400).json("Incorrect Old Password!");
      } else {
        // hash password
        const salt = await bcrypt.genSalt(11);
        const hashedNewPass = await bcrypt.hash(req.body.newPassword, salt);

        // create user with new password
        const infoUser = {
          id: req.body.id,
          password: hashedNewPass,
        };

        await userModel.changePassword(infoUser);
        return res.status(200).json("Change Password Successfully!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
