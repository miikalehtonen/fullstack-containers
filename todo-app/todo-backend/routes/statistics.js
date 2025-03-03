const express = require("express");
const router = express.Router();
const { getAsync } = require("../redis/index");

router.get("/", async (req, res) => {
  const added_todos = await getAsync("added_todos") || 0;
  res.json({ added_todos: parseInt(added_todos) });
});

module.exports = router;