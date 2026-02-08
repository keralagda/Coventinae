const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ THIS IS THE IMPORTANT LINE
app.use(express.static("public"));

// Create Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_RfwWIeLy5yNNtH",
  key_secret: "RBaZwBdhmAfPclcsC33Gjwn3"
});

// API to create order
app.post("/createOrder", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100,   // convert to paise
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
