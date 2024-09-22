// routes/subscriptionRoutes.js
import express from 'express';
import {
  createSubscriptionPlan,
  updateSubscriptionPlan,
  deleteSubscriptionPlan,
  getAllSubscriptionPlans
} from '../controllers/subscriptionController.js';

const router = express.Router();

router.post('/subscriptions', createSubscriptionPlan);         // Create new subscription plan
router.put('/subscriptions/:id', updateSubscriptionPlan);      // Update existing subscription plan
router.delete('/subscriptions/:id', deleteSubscriptionPlan);   // Delete subscription plan
router.get('/subscriptions', getAllSubscriptionPlans);         // Get all subscription plans

export default router;
