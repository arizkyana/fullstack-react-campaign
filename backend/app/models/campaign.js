const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const CampaignSchema = new Schema({
  slug: {
    type: Schema.Types.String,
    unique: true,
  },
  judul: Schema.Types.String,
  deskripsi: Schema.Types.String,
  targetDonasi: Schema.Types.Number,
  tanggalAkhir: Schema.Types.String,
  lokasi: Schema.Types.String,
  pic: Schema.Types.String,
  createdAt: Schema.Types.Date,
  updatedAt: Schema.Types.Date,
  createdBy: Schema.Types.ObjectId,
});

CampaignSchema.pre("save", function (next) {
  const campaign = this;
  const slug = campaign.judul.toLowerCase().replaceAll(/\s/g, "-");
  campaign.slug = slug;
  next();
});

// Create class model
const ModelSchema = mongoose.model("campaign", CampaignSchema);

// Export the model
module.exports = ModelSchema;
