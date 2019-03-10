import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import responses from '../utils/responses';
import config from '../config/index';
import User from '../models/User';
import tracelogger from '../logger/tracelogger';


const {
  JWT_SECRET
} = config;
/**
 * @description Defines the actions to for the users endpoints
 * @class OwnerController
 */
class OwnerController {
  /**
     *@description Creates the owner
     *@static
     *@param  {Object} res - response
     *@returns {object} - null
     *@memberof OwnerController
     */
  static async createOwner() {
    try {
      const username = config.OWNER;
      const phoneNumber = config.OWNERNUMBER;
      const password = bcrypt.hashSync(config.OWNERPASSWORD, 10);
      const userObject = {
        username,
        password,
        phoneNumber,
        role: 'owner',
      };
      const mongoUser = await User.findOne({ phoneNumber });
      if (mongoUser === null) {
        await User.create(userObject);
      }
    } catch (error) {
      tracelogger(error);
    }
  }

  /**
     *@description Login owner
     *@static
     *@param  {Object} req - response
     *@param  {Object} res - response
     *@returns {object} - null
     *@memberof UserController
     */
  static async loginOwner(req, res) {
    try {
      const {
        username,
        password
      } = req.body;
      const owner = config.OWNER;

      if (!username && !password) {
        return res.status(403).json(
          responses.error(403, 'Sorry, this field cannot be empty')
        );
      }
      const user = await User.findOne({
        username
      });
      if (!user) {
        return res.status(404).json(
          responses.error(404, 'Sorry, this user does not exist')
        );
      }
      if (user.role !== 'owner') {
        return res.status(403).json(
          responses.error(403, 'Sorry, you cannot access this page')
        );
      }
      if (username.trim() !== owner) {
        return res.status(403).json(
          responses.error(403, 'Sorry, incorrect username')
        );
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(403).json(
          responses.error(403, 'sorry, incorrect password')
        );
      }
      if (user) {
        const payload = {
          // eslint-disable-next-line no-underscore-dangle
          id: user._id,
          phoneNumber: user.phoneNumber,
          username: user.username
        };
        const token = jwt.sign(payload, JWT_SECRET);
        return res.status(200).json(
          responses.success(200, 'Welcome!', {
            user,
            token,
          })
        );
      }
      return res.status(500).json(
        responses.error(500, 'Sorry, server error')
      );
    } catch (error) {
      tracelogger(error);
    }
  }

  /**
     *@description create master Agent
     *@static
     *@param  {Object} req - response
     *@param  {Object} res - response
     *@returns {object} - null
     *@memberof OwnerController
     */
  static async createMasterAgent(req, res) {
    try {
      const {
        fullname,
        email,
        phoneNumber,
        password,
        devices,
        username,
        address
      } = req.body;
      if (fullname.trim() === ''
        || email.trim() === ''
        || phoneNumber.trim() === ''
        || password.trim() === ''
        || devices === ''
        || username.trim() === ''
        || address.trim() === '') {
        return res.status(400).json(
          responses.error(400, 'Sorry, all fields are required')
        );
      }
      const user = await User.findOne({ phoneNumber });
      if (user && user.phoneNumber === phoneNumber) {
        return res.status(400).json(
          responses.error(400, 'sorry, phone number is taken')
        );
      }
      if (user && user.email === email) {
        return res.status(400).json(
          responses.error(400, 'sorry, email is taken')
        );
      }
      if (user && user.username === username) {
        return res.status(400).json(
          responses.error(400, 'sorry, this username is taken')
        );
      }
      if (!user) {
        const userObject = {
          fullname,
          email,
          phoneNumber,
          password,
          devices,
          username,
          address,
          role: 'masterAgent',
        };
        const createdAgent = await User.create(userObject);
        return res.status(201).json(
          responses.success(201, 'master agent created successfully', createdAgent)
        );
      }
      return res.status(500).json(
        responses.error(500, 'sorry, something went wrong')
      );
    } catch (error) {
      tracelogger(error);
    }
  }
}

export default OwnerController;
