const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let userName = "";

app.post("/greet", (req, res) => {
  userName = req.body.username;
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Hello</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>

    <div class="card">
      <h1>Hello, ${userName}!</h1>
      <a href="/">Go Back</a>
    </div>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});