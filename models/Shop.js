const mongoose = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');
const ShopSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    products:[{type: mongoode.Schema.Types.ObjectId, ref: "Product"}]
    
  });


module.exports = mongoose.model('Shop', ShopSchema);