const fs = require('fs');

// Slice array to chunks (including array with promises)
const sliceToChunks = (array, size = 10) => {
  const results = [];
  for (let i = 0; i < array.length; i+= size) {
    results.push(array.slice(i, i+size));
  }
  return results;
};

// Set delay (to prevent rate limits)
const setDelay = (second = 1) => {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
};

// Check if directory exists otherwise do mkdir -p
const checkDirectory = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
};

module.exports = {
  sliceToChunks,
  setDelay,
  checkDirectory
};
