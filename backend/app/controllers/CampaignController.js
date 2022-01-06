const CampaignModel = require("../models/campaign");

function CampaignController() {
  const list = async (req, res) => {
    const campaignList = await CampaignModel.find();
    res.status(200).json({
      data: campaignList,
    });
  };

  const view = async (req, res) => {
    const { id } = req.body;
    const campaign = await CampaignModel.findeOne({ id });
    res.status(200).json({
      data: campaign,
    });
  };

  const create = async (req, res) => {
    const { judul, deskripsi, targetDonasi, tanggalAkhir, lokasi, pic } =
      req.body;
    const newCampaign = new CampaignModel({
      judul,
      deskripsi,
      targetDonasi,
      tanggalAkhir,
      lokasi,
      pic,
    });
    await newCampaign.save();
    res.status(200).json({
      message: "success create new campaign",
      data: newCampaign,
    });
  };

  const update = async (req, res) => {
    const { id } = req.params;
    const { judul, deskripsi, targetDonasi, tanggalAkhir, lokasi, pic } =
      req.body;
    const updateCampaign = await CampaignModel.findOneAndUpdate(
      { id },
      {
        judul,
        deskripsi,
        targetDonasi,
        tanggalAkhir,
        lokasi,
        pic,
      }
    );

    res.status(200).json({
      message: "success update campaign",
    });
  };

  const remove = async (req, res) => {
    const { id } = req.params;
    await CampaignModel.findOneAndRemove({ id });
    res.status(200).json({
      message: "success remove campaign",
    });
  };

  return {
    list,
    view,
    create,
    update,
    remove,
  };
}

module.exports = CampaignController();
