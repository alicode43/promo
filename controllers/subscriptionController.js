
import SubscriptionPlan from '../models/subscriptionPlan.js';

// Create a new subscription plan
export const createSubscriptionPlan = async (req, res) => {
  try {
    const { name, price, features, userType, limitations, promoCodes } = req.body;
    const newPlan = new SubscriptionPlan({ name, price, features, userType, limitations, promoCodes });
    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create subscription plan', error });
  }
};

// Update an existing subscription plan
export const updateSubscriptionPlan = async (req, res) => {
  try {
    const planId = req.params.id;
    const updatedPlan = await SubscriptionPlan.findByIdAndUpdate(planId, req.body, { new: true });
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update subscription plan', error });
  }
};

// Delete a subscription plan
export const deleteSubscriptionPlan = async (req, res) => {
  try {
    const planId = req.params.id;
    await SubscriptionPlan.findByIdAndDelete(planId);
    res.status(204).json({ message: 'Subscription plan deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete subscription plan', error });
  }
};

// Fetch all subscription plans
export const getAllSubscriptionPlans = async (req, res) => {
  try {
    const plans = await SubscriptionPlan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve subscription plans', error });
  }
};
