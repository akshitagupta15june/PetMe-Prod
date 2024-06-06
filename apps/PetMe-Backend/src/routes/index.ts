import { Router } from 'express';
import VolunteerRoutes from './VolunteerUserRoutes';

const router = Router();

router.use('/volunteer', VolunteerRoutes);

export default router;
