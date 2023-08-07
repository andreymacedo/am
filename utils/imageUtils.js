// utils/imageUtils.js

import { getBase64 } from "plaiceholder";

export const getBlurredImage = async (src) => {
  const { base64 } = await getBase64(src);
  return base64;
};
