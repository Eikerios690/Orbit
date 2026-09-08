import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚀 Orbit API está funcionando!"
  });
});

export default app;