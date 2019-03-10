import { Router } from 'express';
import OwnerController from '../controllers/OwnerController';

const router = Router();

const { loginOwner, createMasterAgent } = OwnerController;

// Routes

router.post('/loginOwner', loginOwner);
router.post('/createMaster', createMasterAgent);

export default router;
