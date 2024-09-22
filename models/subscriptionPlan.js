
import mongoose from 'mongoose';

const subscriptionPlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  features: { type: [String], required: true },
  userType: { type: String, enum: ['entrepreneur', 'agent', 'investor'], required: true },
  limitations: { type: String },
  promoCodes: [{ code: String, discount: Number }], 
});

const SubscriptionPlan = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);

export default SubscriptionPlan;
