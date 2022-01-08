const CampaignModel = require("../models/campaign");

function CampaignController() {
  const list = async (req, res) => {
    const { limit, offset } = req.query;
    const campaignList = await CampaignModel.find()
      .limit(parseInt(limit))
      .skip(parseInt(offset))
      .sort({
        createdAt: "desc",
      });
    const total = await CampaignModel.find().count();
    res.status(200).json({
      meta: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset),
      },
      data: campaignList,
    });
  };

  const view = async (req, res) => {
    const { slug } = req.params;
    try {
      const campaign = await CampaignModel.findOne({
        slug,
      });
      if (!campaign)
        return res.status(200).json({
          message: "campaign not found",
        });
      return res.status(200).json({
        message: "success get one campaign",
        data: campaign,
      });
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        message: "failed get campaign",
      });
    }
  };

  const create = async (req, res) => {
    const {
      judul,
      deskripsi,
      targetDonasi,
      tanggalAkhir,
      lokasi,
      pic,
      banner,
    } = req.body;

    try {
      const newCampaign = new CampaignModel({
        judul,
        deskripsi,
        targetDonasi,
        tanggalAkhir,
        lokasi,
        pic,
        banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: req.user._id,
      });
      await newCampaign.save();
      return res.status(200).json({
        message: "success create new campaign",
        data: newCampaign,
      });
    } catch (error) {
      if (error.toString().includes("E11000")) {
        return res.status(404).json({
          message: "the campaign has been created!",
        });
      }
      return res.status(400).json({
        message: "create campaign is failed!",
      });
    }
  };

  const update = async (req, res) => {
    const { slug } = req.params;
    const {
      judul,
      deskripsi,
      targetDonasi,
      tanggalAkhir,
      lokasi,
      pic,
      banner,
    } = req.body;

    try {
      const updated = await CampaignModel.findOneAndUpdate(
        { slug },
        {
          $set: {
            judul,
            deskripsi,
            targetDonasi,
            tanggalAkhir,
            lokasi,
            pic,
            banner,
            updatedAt: new Date(),
          },
        },
        {
          new: true,
        }
      );

      return res.status(200).json({
        message: "success update campaign",
        data: updated,
      });
    } catch (error) {
      console.log("error : ", error);
      return res.status(200).json({
        message: "failed update campaign",
      });
    }
  };

  const remove = async (req, res) => {
    const { slug } = req.params;
    try {
      await CampaignModel.findOneAndRemove({ slug });
      return res.status(200).json({
        message: "success remove campaign",
      });
    } catch (error) {
      return res.status(400).json({
        message: "failed remove campaign",
      });
    }
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
