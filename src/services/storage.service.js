const ImageKit = require("imagekit");
const uuid = require("uuid");

require("dotenv").config();

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = async (file) => {
  const response = await imageKit.upload({
    file: file.buffer,
    fileName: file.originalname + "_" + uuid.v4(),
    folder: "/socialMediaProjectImages",
  });
  return response;
};

module.exports = uploadFile;
