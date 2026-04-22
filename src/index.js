require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/api/users", userRoutes);

// Existing Route
app.get("/", (req, res) => {
  res.send("🚀 API Launchpad is running...");
});

// GET /api/status
app.get("/api/status", (req, res) => {
  res.json({
    status: "success",
    message: "API is live and working"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});