var express = require("express");

var router = express.Router();

// import burger.js to use its database functions
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log()
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, 0], function (
        result
    ) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {devoured: req.body.devoured},
        condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

// export routes for server.js to use
module.exports = router;