const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({ apiKey: `${process.env.GEMINI_API_KEY}` });

const generateCaption = async (file) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in 6-7 words",
  });
  console.log(response.text);
};

generateCaption();
