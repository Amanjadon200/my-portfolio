import express, { Router } from 'express';
import authRoute from '../modules/auth/auth.route';
interface routeType {
  path: string;
  route: Router;
}
const router = express.Router();
const defaultRoute: routeType[] = [
  {
    path: '/auth',
    route: authRoute,
  },
];
defaultRoute.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
