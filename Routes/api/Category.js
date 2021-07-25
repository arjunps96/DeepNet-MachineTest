/**
 * Module Imports
 */
const express = require("express");
const Category = require("../../Models/Category");
const Product = require("../../Models/Products");

/**
 * Router Modular
 */
const route = express.Router();

/**
 * Handler to get all category
 */
route.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    if (!category) {
      return res
        .status(404)
        .json({ error: "Sorry,not able to find any category" });
    }

    return res.status(200).json({ data: category });
  } catch (err) {
    if (errr.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid id or path" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});
/**
 * Handler to get Category by ID
 */
route.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "No category found" });
    }
    res.status(200).json({ data: category });
  } catch (err) {
    res.status(500).json({ error: `Something went wrong:${err.response}` });
  }
});

module.exports = route;
