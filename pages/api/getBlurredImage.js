// pages/api/getBlurredImage.js
import path from "path";
import { getPlaiceholder } from "plaiceholder";

export default async (req, res) => {
  const { src } = req.query;

  if (!src) {
    return res.status(400).json({ error: "Image src is required." });
  }

  try {
    // Construct the absolute path to the image using path.join
    const absolutePath = path.join(process.cwd(), "public", src);

    console.log("Absolute Image Path:", absolutePath); // Log the path for debugging

    const { base64 } = await getPlaiceholder(absolutePath);
    res.status(200).json({ base64 });
  } catch (error) {
    console.error("Error in getPlaiceholder:", error);
    res.status(500).json({ error: "Error processing image." });
  }
};
