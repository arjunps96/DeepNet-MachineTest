const mongoose = require("mongoose");
const Product = require("./Products");

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
    },
  ],
});

/**
 * Query Middleware to populate reference value
 */
subCategorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "products",
  });
  next();
});

module.exports = mongoose.model("Subcategory", subCategorySchema);
