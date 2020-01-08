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
          "<li><p>" +
            item[i].item_id +
            "." +
            item[i].item_name +
            "," +
            item[i].Category +
            "," +
            item[i].Value +
            "<button data-itemid='" +
            item[i].item_id +
            "'class='delItem'>Delete Item</button></p></li>"
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
  
    $("#postNewItem").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // [name=plan] will find an element with a "name" attribute equal to the string "plan"
      var newItem = {
        item_name: $("#add_item [id=itemname1]")
          .val()
          .trim(),
        Category: $("#add_item [id=itemcategoy1]")
          .val()
          .trim(),
          Value: $("#add_item [id=value1]")
          .val()
          .trim(),
          image_url: $("#add_item [id=itemPhoto1]")
          .val()
          .trim()
      };
      console.log(newItem);
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
  
    $("#updateItem").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var id = $("#itemid2")
        .val()
        .trim();
  
      var updateItem = {
        item_name: $("#update_item [id=itemname2]")
        .val()
        .trim(),
      Category: $("#update_item [id=itemcategoy2]")
        .val()
        .trim(),
        Value: $("#update_item [id=value2]")
        .val()
        .trim(),
        image_url: $("#update_item [id=itemPhoto2]")
        .val()
        .trim()
    };
      
  
//       // Send the PUT request.
      $.ajax("/items/" + id, {
        type: "PUT",
        data: JSON.stringify(updateItem),
        dataType: "json",
        contentType: "application/json"
      }).then(function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      });
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
