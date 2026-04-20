import express from "express";
import { config } from "dotenv";

config();

const app = express();
//stats middleware
app.use((req, res, next) => {
  console.info(
    `received a request of method: ${req.method} of url: ${req.url}`,
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

function createCounterMiddleware() {
  let count = 0;

  return function (req, res, next) {
    count++;
    req.hitCount = count;
    next();
  };
}
const countMiddleware = createCounterMiddleware();
const healthMiddleware = createCounterMiddleware();
app.get("/count", countMiddleware, (req, res) => {
  try {
    res.status(200).json({ count: req.hitCount });
  } catch (error) {
    console.error("Error while trying the count route", error);
  }
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "server ok", hits: req.hitCount });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server running successfully...");
});
