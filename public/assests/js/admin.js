$(document).ready(function() {
    $.ajax("/items", {
      type: "GET"
    }).then(function(data) {
      var item = data.Items;
    var len = item.length;
    console.log(len);
  
      var item_elem = $("#displayItems");
      for (var i = 0; i < len; i++) {
         
        item_elem.append(
          "<tr>" + "<td>" +
            item[i].item_id +
            "</td>" + "<td>" +
            item[i].item_name +
            "</td>" + "<td>" +
            item[i].Category +
            "</td>" + "<td>" +
            item[i].Value +
            "</td>" + "<td>" +
            "<button data-itemid='" +
            item[i].item_id +
            "'class='delItem'>Delete Item</button>" +
            "</td>" + "</tr>" + "</table>"
        );
      }
  
    });
  
    $(document).on("click", ".delItem", function(event) {
      // Get the ID from the button.
      // This is shorthand for $(this).attr("data-planid")
      var id = $(this).data("itemid");
      console.log("delete this is " + this);
      console.log("delete id is " + id);

    
  
      // Send the DELETE request.
      $.ajax("/items/" + id, {
        type: "DELETE"
      }).then(function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $("#add_item").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // [name=plan] will find an element with a "name" attribute equal to the string "plan"
      var newItem = {
        item_name: $("#add_item [id=itemname1]")
          .val()
          .trim(),
        Category: $("#add_item [id=itemcategory1]")
          .val()
          .trim(),
          Value: $("#add_item [id=value1]")
          .val()
          .trim(),
          // image_url: $("#add_item [id=itemPhoto1]")
          // .val()
          // .trim()
      };
      
//       // Send the POST request.
      $.ajax("/items", {
        type: "POST",
        data: JSON.stringify(newItem),
        dataType: "json",
        contentType: "application/json"
      }).then(function() {
        console.log("created new plan");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $("#update_item").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var id = $("#itemID2")
        .val()
        .trim();
  
      var updatedItem = {
        item_name: $("#update_item [id=itemname2]")
        .val()
        .trim(),
      Category: $("#update_item [id=itemcategory2]")
        .val()
        .trim(),
        Value: $("#update_item [id=value2]")
        .val()
        .trim(),
        // image_url: $("#update_item [id=itemPhoto2]")
        // .val()
        // .trim()
    };

//       // Send the PUT request.
      $.ajax("/items/" + id, {
        type: "PUT",
        data: JSON.stringify(updatedItem),
        dataType: "json",
        contentType: "application/json"
      }).then(function() {
        console.log("updated id " + id);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });


  $.ajax("/Transaction", {
    type: "GET"
  }).then(function(data) {
    var transactions = data.Transaction;
  var len = transactions.length;
  console.log(transactions);

    var transactions_elem = $("#displayTransaction");
    for (var i = 0; i < len; i++) {
       
      transactions_elem.append(
        "<tr>" + "<td>" +
        transactions[i].transaction_id +
          "</td>" + "<td>" +
          transactions[i].Borrower_Name +
          "</td>" + "<td>" +
          transactions[i].LoanedItem_Name +
          "</td>" + "<td>" +
          transactions[i].time_created +
          "</td>" + "<td>" +
          "<button data-transactionid='" +
          transactions[i].transaction_id +
          "'class='delTransaction'>Item Returned</button>" +
          "</td>" + "</tr>" + "</table>"
      );
    }

  });

  $(document).on("click", ".delTransaction", function(event) {
    // Get the ID from the button.
    // This is shorthand for $(this).attr("data-planid")
    var id = $(this).data("transactionid");
    console.log("delete this is " + this);
    console.log("delete id is " + id);

  

    // Send the DELETE request.
    $.ajax("/Transaction/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted id ", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });



  $.ajax("/People", {
    type: "GET"
  }).then(function(data) {
    var person = data.People;
  var len = person.length;
  console.log(person);

    var person_elem = $("#displayPeople");
    for (var i = 0; i < len; i++) {
       
      person_elem.append(
        "<tr>" + "<td>" + 
          person[i].people_id +
          "</td>" + "<td>" +
          person[i].name +
          "</td>" + "<td>" +
          person[i].Phone_Number +
          "</td>" + "<td>" +
          person[i].Email +
          "</td>" + "<td>" +
          "<button data-peopleid='" +
          person[i].people_id + 
          "'class='delPerson'>Delete Person</button>" + 
          "</td>" + "</tr>" + "</table>"
      );
    }
  });

  $(document).on("click", ".delPerson", function(event) {
    // Get the ID from the button.
    // This is shorthand for $(this).attr("data-planid")
    var id = $(this).data("peopleid");
    console.log("delete this is " + this);
    console.log("delete id is " + id);
    location.reload();


    $.ajax("/People/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted id ", id);
      // Reload the page to get the updated list
      location.reload();
    });
  

  });


function addItemshow() {

    $("#add_item").toggle();
    console.log("show");
};


function updateItemshow() {

    $("#update_item").toggle();
    console.log("show");
};









// cloudinary.uploader.upload("sample.jpg", {"crop":"limit","tags":"samples","width":3000,"height":2000}, function(result) { console.log(result) });
