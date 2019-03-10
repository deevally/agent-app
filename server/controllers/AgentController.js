import jwt from 'jsonwebtoken';
import bycrypt from 'bcrypt';
import responses from '../utils/responses';
import config from '../config/index';
import User from '../models/User';
import validateUserInput from '../validation/validation';
const { JWT_SECRET } = config;

/**
 * @description defines the action for the Agent endpoints
 * @class AgentController
 */
class AgentController {
  /**
   * @description creates the agent
   * @static
   * @param {object} res -response
   * @returns {object}  - null
   * @member of AgentController
   */
  static async createAgent(req, res) {

      const { error} = validateUserInput(req.body);

      if(error){
          return res.status(400).json({ message: error.details[0].message});
      }
    try {
      const {
        phoneNumber,
        username,
        password,
        fullname,
        email,
        address
      } = req.body;

      const agentUsername = await User.findOne({
        username
      });

        if (agentUsername) {
            return res
                .status(400)
                .json(responses.error(400, 'Sorry, username already exists'));
        }


      const agentObject = {
        phoneNumber,
        username,
        password: bycrypt.hashSync(password, 10),
        fullname,
        email,
        address,
        role: 'agent'
      };

       

      const createdAgent = await User.create(agentObject);
      if (createdAgent) {
        return res
          .status(201)
          .json(responses.success(200, 'Agent created successfully', createdAgent));
      }
     

     
      return res
        .status(500)
        .json(responses.error(500, 'Internal Server Error'));
    } catch (error) {
      return error;
    }
  }

  /**
   * @description Gets all the agent
   * @static
   * @param {object} res -response
   * @returns {object}  - null
   * @member of AgentController
   */

  static async allAgent(req, res) {
      try{
          const agents = User.find({
              role: 'agent'
          });

          if (!agents.length && !agents) {
              res.status(400).json(responses.error(400, 'This agent is not available'));
          }

          if (agents) {
              return res
                  .status(201)
                  .json(responses.success(201, 'Agent retrieved successfully'));
          }

          return res.status(500).json(responses.error(500, 'Internal Server Error'));
      }catch(error){
          return error;
      }
   
  }

/**
* @description Updates  the agent
* @static
* @param {object} res -response
* @returns {object}  - null
* @member of AgentController
*/

static async updateAgent(req, res){
    try{
        const {
            phoneNumber,
            username,
            password,
            fullname,
            email,
            address
        } = req.body;

        const updatedAgent = await User.findOneAndUpdate({
            username
        }, {
                $set: {
                    phoneNumber,
                    password,
                    fullname,
                    email,
                    address
                }
            }, {
                new: true
            });
        if (!updatedAgent) {
            return res.status(400).json(responses.error(400, 'Cannot update agent'))
        }

        if (updatedAgent) {
            return res.status(200).json(responses.success(200, 'Agent updated successfully', updatedAgent))
        }
        return res.status(500).json(
            responses.error(500, 'Failed to update, server error'));
    }catch(error){
        return error;
    }
    


}
/**
* @description deletes  the agent
* @static
* @param {object} res -response
* @returns {object}  - null
* @member of AgentController
*/

static async deleteAgent(req, res){
    try{
        const { username } = req.body;

        const delAgent = await User.findOneAndDelete(username);

        if (!delAgent) {
            return res.status(400).json(responses.error(400, 'This agent doesnt exist'))
        }

        if (delAgent) {
            return res.status(200).json(responses.success(200, "Agent deleted successfully"));
        }
    }catch(error){
        return error;
    }

}

}

export default AgentController;
