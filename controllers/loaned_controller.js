var express = require("express");
var path = require("path");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var loan = require("../models/loaned");
var item = require("../models/item");
var transactions = require("../models/transaction");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/addUser", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/add.html"));
});

router.get("/admin", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/admin.html"));
});

router.get("/customerInfo", function(req, res) {
  res.sendFile(path.join(__dirname, "..public/customerinfo.html"));
});



// Create all our routes and set up logic within those routes where required.
router.get("/People", function(req, res) {
  loan.all(function(data) {
    res.json({ People: data });
  });
});

// For Items Table
router.get("/Items", function(req, res) {
  item.all(function(data) {
    res.json({ Items: data });
  });
});

// For Transaction Table
router.get("/Transaction", function(req, res) {
  transactions.all(function(data) {
    res.json({ Transaction: data });
  });
});

// People Table
router.post("/People", function(req, res) {
  loan.create({
    PersonName: req.body.name,
    PersonPhoneNumber: req.body.Phone_Number,
    PersonEmail: req.body.Email,
    PersonPhoto: req.body.Photo_url

  },function(result) {
    // Send back the ID of the new quote
    res.json({ people_id: result.insertId });
  });
});

// Items Table
router.post("/Items", function(req, res) {
  item.create([ "item_name", "Category", "Value", "image_url" ], [
  req.body.item_name, req.body.Category, req.body.Value, req.body.image_url],
  
   function(result) {
    // Send back the ID of the new quote
    res.json({ item_id: result.insertId });
  });
});

// Transaction Table
router.post("/Transaction", function(req, res) {
  transactions.create({
   TrBorrower_Name: req.body.Borrower_Name,
   TrBorrowerId: req.body.Borrower_id,
   TrLoanedItemId: req.body.LoanedItem_id,
   TrLoadedItemName: req.body.LoadedItem_Name,
   TrTimeCreated: req.body.time_created
  
  },function(result) {
    // Send back the ID of the new quote
    res.json({ transaction_id: result.insertId });
  });
});


// People Table
router.put("/People/:id", function(req, res) {
  var condition = "people_id = " + req.params.id;

  console.log("condition", condition);

  loan.update({
    PersonName: req.body.name,
    PersonPhoneNumber: req.body.Phone_Number,
    PersonEmail: req.body.Email,
    PersonPhoto: req.body.Photo_url
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.json({people_id: req.params.people_id});
    }
  });
});

// Items Table
router.put("/Items/:id", function(req, res) {
  var condition = "item_id = " + req.params.id;

  console.log("condition", condition);

  item.update({
   Item_Name: req.body.item_name,
   Category: req.body.Category,
   Value: req.body.Value,
   Image_URL: req.body.image_url
  }, condition, function(result) {
    if (result.changedRows == 0) {
      console.log("update " + "if")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      console.log("update " + "else")
      res.json({ id: req.params.id});
    }
  });
});

// Transaction Table
router.put("/Transaction/:id", function(req, res) {
  var condition = "transaction_id = " + req.params.id;

  console.log("condition", condition);

  transactions.update({
    TrBorrower_Name: req.body.Borrower_Name,
    TrBorrowerId: req.body.Borrower_id,
    TrLoanedItemId: req.body.LoanedItem_id,
    TrLoadedItemName: req.body.LoadedItem_Name,
    TrTimeCreated: req.body.time_created
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.json({ transaction_id: req.params.transaction_id});
    }
  });
});

// People Table
router.delete("/People/:id", function(req, res) {
  var condition = "people_id = " + req.params.id;

  loan.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Item Table
router.delete("/Items/:id", function(req, res) {
  var condition = "item_id = " + req.params.id;

  item.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Transaction Table
router.delete("/Transaction/:id", function(req, res) {
  var condition = "transaction_id = " + req.params.id;

  transactions.delete(condition, function(result) {
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