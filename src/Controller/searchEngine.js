const Data = require("../Model/data");
const LogSchema = require("../Model/activity");

const Query = async (req, res) => {
  const { q } = req.body;
  const result = await Data.find({ metadata: { $regex: ".*" + q + ".*" } });

  if (result) {
    res.status(200).json({ data: result });
  }
};

const Create = async (req, res) => {
  const { url, header, metadata, visible } = req.body;

  if ((url && header && metadata) !== "") {
    const Insert = await Data.create({
      url,
      header,
      metadata,
      visible,
    });

    res.status(200).json({ message: "success" });
  }
};

const Get = async (req, res) => {
  const result = await Data.find();
  res.status(200).json({ data: result });
};

const Log = async (req, res) => {
  const { user, param } = req.body;
  if ((user && param) !== "") {
    const LogUserActivity = await LogSchema.create({
      user,
      param,
    });

    res.status(200).json(LogUserActivity);
  }
};

const Feed = async (req, res) => {
  const FeedData = await LogSchema.find().sort({ createdAt: -1 });

  if (FeedData !== undefined) {
    res.status(200).json(FeedData);
  }
};

module.exports = {
  Query,
  Create,
  Log,
  Feed,
  Get,
};
