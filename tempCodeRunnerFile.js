const express = require("express");
const path = require("path");
const articleRouter = require("./routes/articles");

const app = express();

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Use the articles router
app.use("/articles", articleRouter);

// Example array of articles
const articles = [
  {
    title: "Test Article 1",
    createdAt: new Date(),
    description: "Description for Test Article 1",
  },
  {
    title: "Test Article 2",
    createdAt: new Date(),
    description: "Description for Test Article 2",
  },
];

// Define a route that renders a view with articles data
app.get("/", (req, res) => {
  res.render("articles/index", { articles });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
