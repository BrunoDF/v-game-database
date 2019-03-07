const path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      include: path.resolve(__dirname, '../'),
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        {
          loader: "sass-loader",
          options: {
            data: `
              @import "${path.resolve(__dirname, '../')}/src/styles/general.scss";
              @import "${path.resolve(__dirname, '../')}/src/styles/_variables.scss";
            `
          }
        }
      ]
    }]
  },
};