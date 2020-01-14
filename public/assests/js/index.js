
$(document).ready(function () {
  console.log("hello")
  $.ajax("/People", {
    type: "GET"
  }).then(function (data) {
    var borrower = data.People;
    var len = borrower.length;
    console.log(len);

    var User_elem = $("#choosePerson");
    for (var i = 0; i < len; i++) {

      User_elem.append(
        '<option value="' +
        borrower[i].people_id +
        '">' +
        borrower[i].name +
        "</option>"
      )
    }
  });


  $.ajax("/items", {
    type: "GET"
  }).then(function (data) {
    var item = data.Items;
    var len = item.length;
    console.log(len);

    var item_elem = $("#chooseItem");
    for (var i = 0; i < len; i++) {

      item_elem.append(
        '<option value="' +
        item[i].item_id +
        '">' +
        item[i].item_name +
        "</option>"
      );
    }

  });




  $("#add_user_btn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("click");
    // [name=plan] will find an element with a "name" attribute equal to the string "plan"
    var newUser = {
      name: $("#add_user [id=username1]")
        .val()
        .trim(),
      Phone_Number: $("#add_user [id=phonenum1]")
        .val()
        .trim(),
      Email: $("#add_user [id=email]")
        .val()
        .trim()
      // image_url: $("#add_user [id=exampleFormControlFile1]")
      //   .val()
      //   .trim()
    };
    //       // Send the POST request.
    $.ajax("/People", {
      type: "POST",
      data: JSON.stringify(newUser),
      dataType: "json",
      contentType: "application/json"
    }).then(function () {

      location.reload();
    });
  });




  $("#submitTransaction").on("click", function (event) {

    event.preventDefault();
    
    // var d = new Date();
    var d = new Date();
    d.toLocaleString();


    var newTransaction = {
      Borrower_id: $("#choosePerson :selected").val(),
      Borrower_Name: $("#choosePerson :selected").text(),
      LoanedItem_id: $("#chooseItem :selected").val(),
      LoanedItem_Name: $("#chooseItem :selected").text(),
      time_created: (d)
    };
console.log(d);
    //       // Send the POST request.
    $.ajax("/Transaction", {
      type: "POST",
      data: JSON.stringify(newTransaction),
      dataType: "json",
      contentType: "application/json"
    }).then(function () {
      console.log("created new Transaction");
     
      location.reload();
    });
  });


});


