var express = require("express");

var router = express.Router();

// Import the model (item.js) to use its database functions.
var item = require("../models/loaned");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/loaned", function(req, res) {
  item.all(function(data) {
    res.json({ items: data });
  });
});

router.post("/loaned", function(req, res) {
  item.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/loaned/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  item.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.json({ id: req.params.id});
    }
  });
});

router.delete("/loaned/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  item.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
