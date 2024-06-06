import { Router } from 'express';
import VolunteerRoutes from './VolunteerUserRoutes';
import UserRoutes from './UserRoutes';
import BlogRoutes from './BlogRoutes';

const router = Router();

router.use('/api/v1/volunteer', VolunteerRoutes);
router.use('/api/v1/user', UserRoutes);
router.use('/api/v1/blog', BlogRoutes);

export default router;
