const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://weatherfrontend-nine.vercel.app",
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://weatherfrontend-nine.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options("*", cors());

app.use(express.json());

const PORT = 5000;
const API_KEY = "186fe94d2f534eed88c154100252701";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

app.post("/api/weather", async (req, res) => {
  const { location } = req.body;
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${location}&aqi=yes`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(3000, () => {
  console.log(`Server running`);
});