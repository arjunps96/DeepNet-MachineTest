const express = require("express");

const Subcategory = require("../../Models/Subcategory");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const subCategories = await Subcategory.find();
    if (!subCategories) {
      return res.status(404).json({ error: "Sorry,No subcategory found" });
    }
    res.status(200).json({ subCategories });
  } catch (err) {
    if (errr.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid id or path" });
    }
    res.status(500).json({ error: `Something went wrong:${err.response}` });
  }
});
/**
 * Handler to get products from subcategory Id
 */
route.get("/:id", async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id);
    if (!subcategory) {
      return res.status(404).json({ error: "No sub category found" });
    }
    res.status(200).json({ data: subcategory });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = route;
