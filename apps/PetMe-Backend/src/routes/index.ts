import { Router } from 'express';
// import VolunteerRoutes from './VolunteerUserRoutes';
import UserRoutes from './UserRoutes';
import BlogRoutes from './BlogRoutes';
import PetRoutes from './PetRoutes';

const router = Router();

// router.use('/api/v1/volunteer', VolunteerRoutes);
router.use('/api/v1/user', UserRoutes);
router.use('/api/v1/blog', BlogRoutes);
router.use('/api/v1/pet', PetRoutes);

export default router;
