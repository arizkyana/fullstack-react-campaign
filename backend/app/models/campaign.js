const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const CampaignSchema = new Schema({
  judul: Schema.Types.String,
  deskripsi: Schema.Types.String,
  targetDonasi: Schema.Types.Number,
  tanggalAkhir: Schema.Types.String,
  lokasi: Schema.Types.String,
  pic: Schema.Types.String,
});
// Create class model
const ModelSchema = mongoose.model("campaign", CampaignSchema);

// Export the model
module.exports = ModelSchema;
