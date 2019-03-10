/* eslint-disable indent */
import { Router } from 'express';
import AgentController from '../controllers/AgentController';


const router = Router();

const {
  createAgent,
  allAgent,
  updateAgent,
  deleteAgent,
//  deactivateAgent
  } = AgentController;
router.post('/createAgent', createAgent);
router.get('/allAgent', allAgent);
router.put('/updateAgent', updateAgent);
router.delete('/deleteAgent', deleteAgent);
// router.patch('/deactivateAgent', deactivateAgent);
export default router;
