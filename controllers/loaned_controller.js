var express = require("express");

var router = express.Router();

var path = require("path")

// Import the model (cat.js) to use its database functions.
var loan = require("../models/loaned");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/addUser", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/add.html"));
});

router.get("/admin", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/admin.html"));
});




// Create all our routes and set up logic within those routes where required.
router.get("/People", function(req, res) {
  loan.all(function(data) {
    res.json({ People: data });
  });
});

router.post("/Items", function(req, res) {
  loan.create({
   ItemName: req.body.item_name,
   ItemCategory: req.body.Category,
   ItemImage: req.body.image_url
  
  },function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/loaned/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  loan.update({
    PersonPhoneNumber: req.body.Phone_Number,
    PersonEmail: req.body.Email,
    PersonPhoto: req.body.Photo_url
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

  loan.delete(condition, function(result) {
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
