const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  watch: process.env.NODE_ENV === "development",
  stats: {warnings:false},
  mode: "development",
  devServer: {
    port: 3000,
    publicPath: "/",
    historyApiFallback: true,
    host: "localhost",
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    inline: true,
    index: "index.html",
  },
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 8000,
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      entry: path.resolve("./public/", "index.html"),
      template: path.resolve("./public/", "index.html"),
      hash: true,
    }),
  ],
};
