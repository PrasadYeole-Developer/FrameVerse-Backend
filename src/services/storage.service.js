const ImageKit = require("imagekit");

require("dotenv").config();

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = async (file) => {
  return imageKit.upload({
    file: file.buffer,
    fileName: file.originalname,
    folder: "/socialMediaProjectImages",
  });
};

module.exports = uploadFile;
