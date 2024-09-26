import express from "express";

const app = express();
const port = 3000;

let logger = (req, res, next) => {
  console.log("Requesst method: ", req.method);
  console.log("Requesst path: ", req.path);
  next();
};

function logger1(req, res, next) {
  console.log("Requesst method: ", req.method);
  console.log("Requesst path: ", req.path);
  console.log("Request URl: ", req.url);

  next();
}
app.use(logger1);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
