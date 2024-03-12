const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/products").get(function(req, res) {
    let db_connect = dbo.getDb("shop");

    const { filter, sortBy } = req.query;
    let query = {};

    if (filter) {
        query = {
            $or: [
                { name: { $regex: filter, $options: "i" } },
                { price: { $regex: filter, $options: "i" } },
                { quantity: { $regex: filter, $options: "i" } },
            ],
        };
    }

    let sortQuery = {};
    if (sortBy) {
        if (sortBy === "name" || sortBy === "price" || sortBy === "quantity") {
            sortQuery[sortBy] = 1; 
        }
    }

    db_connect
        .collection("products")
        .find(query)
        .sort(sortQuery)
        .toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recordRoutes.route("/products/:id").get(function(req, res) {
    let db_connect = dbo.getDb("shop");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("products").findOne(myquery, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

recordRoutes.route("/products").post(function(req, response){
    let db_connect = dbo.getDb("shop");
    let myobj = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        quantity: req.body.quantity,
        unit: req.body.unit
    };
    db_connect.collection("products").insertOne(myobj, function(err, res){
        if (err) throw err;
        response.json(res);
    });
});

recordRoutes.route("/products/:id").put(function(req, response){
    let db_connect = dbo.getDb("shop");
    let myquery = { _id: ObjectId(req.params.id) };
    let newValues = {
        $set: {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            unit: req.body.unit
        },
    };
    db_connect.collection("products").updateOne(myquery, newValues, function(err, res){
        if (err) throw err;
        console.log("document updated successfully");
        response.json(res);
    });
});

recordRoutes.route("/products/:id").delete(function (req, res) {
    let db_connect = dbo.getDb("shop");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("products").deleteOne(myquery, function(err, obj){
        if (err) throw err;
        console.log("document deleted");
        res.json(obj);
    });
});

module.exports = recordRoutes;
