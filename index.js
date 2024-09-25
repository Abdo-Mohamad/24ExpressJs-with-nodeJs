import express from "express";
const app = express();
const port = 3000;

/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); //  This is a route for the root URL of the server and send  a response to the client

app.get("/about", (req, res) => {
  res.send("This is the about page");
}); //  This is a route for the about URL of the server and send a response to the client

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
}); // This  is a route for the contact URL of the server and send a response to the client
 */

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
}); // This  is a route for the register URL of the server and send a response to the client

app.put("/user/dito", (req, res) => {
  res.sendStatus(200);
}); //   This is a route for the user/dito URL of the server and send a response to the put request

app.patch("/user/dito", (req, res) => {
  res.sendStatus(200);
}); //   This is a route for the user/dito URL of the server and send a response to the patch  request

app.delete("/user/dito", (req, res) => {
  res.sendStatus(200);
});//   This is a route for the root URL of the server and send a response to the client to delet  the user

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
