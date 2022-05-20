const fs = require('fs');

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
  setDelay,
  checkDirectory
};
