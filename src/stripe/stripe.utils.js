import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(
//   "pk_test_51MRAcoKPZz5CfqqG0XWirOcdo4s7Bylcnsr1h6F44B7F0PWoM5FtkMpOcUvHG6Qj033zUKxy5BrVUgy0DBDV1rAk00LZMS6OQW"
// );

// export const stripePromise = loadStripe(
//   process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
// );

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
