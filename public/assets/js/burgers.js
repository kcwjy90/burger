

$(function() {
  $(".change").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("eating");
    console.log(id, newEat);

    var newateState = {
      ate: newEat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newateState
    }).then(
      function() {
        console.log("changed ate to", newateState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      ate: true
    };

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

// // Make sure we wait to attach our handlers until the DOM is fully loaded.

// $(function () {

//   $(".change-devour").on("click", function (event) {

//     console.log("haha")
//     var id = $(this).data("id");
//     var neweatit = $(this).data("eatit");

//     var newBurgerState = {
//       gone: neweatit
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {

//       type: "PUT",
//       data: newBurgerState

//     }).then(

//       function () {
//         // Reload the page to get the updated list
//         location.reload();

//       }
//     );

//   });



//   $(".create-burger").on("submit", function (event) {

//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newBurger = {

//       name: $("#burge").val().trim(),
//       gone: false
//     };

    


//     // Send the POST request.

//     $.ajax("/api/burgers", {

//       type: "POST",
//       data: newBurger

//     }).then(

//       function () {

//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();

//       }

//     );

//   });
// });