const path = require('path');

async function testImageProcessing() {
  try {
    const { getPlaiceholder } = await import("plaiceholder");
    const testPath = path.join(process.cwd(), 'public', 'img', 'lg-magenta-thumbnail.png');
    const { base64 } = await getPlaiceholder(testPath);
    console.log("Successfully processed image:", base64);
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

testImageProcessing();
