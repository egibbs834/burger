$(document).ready(function () {
    $(".devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        //   send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            console.log("changed devour to", newDevour)
            // reload page to get updated list
            location.reload();
        });
    });


    $(".create-form").on("submit", function(event) {
        // preventing default on a submit event
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        };

        //   send POST request
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("added new burger");
            location.reload();
            }
        );
    });
});