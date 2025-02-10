const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin');


module.exports = {
    mode: "production", // Set to production mode
    entry: "./source/scripts/index.js",
    output: {
        filename: "main.[contenthash].js", // Add content hash for cache busting
        path: path.resolve(__dirname, "output"),
        clean: true, // Clean the output directory
    },
    devtool: "source-map", // Use source map for debugging in production (or hidden-source-map)
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into separate files
                    "css-loader", // Load CSS
                    "postcss-loader", // For PostCSS (autoprefixer, etc.) if needed
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'images/[name].[contenthash][ext]', // Output path for images with content hash
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, // For fonts
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[contenthash][ext]', // Output path for fonts with content hash
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // Clean the output directory
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css", // Add content hash to CSS filename
        }),
        new HtmlWebpackPlugin({
            template: "./source/template.html",
            minify: { // Minify HTML
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            },
        }),
        new CompressionWebpackPlugin({ // Gzip compression
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 8192,
            minRatio: 0.8,
        }),
        new CompressionWebpackPlugin({ // Brotli compression (if you want to use it)
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
            threshold: 8192,
            minRatio: 0.8,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // Remove console.log in production
                    },
                },
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: { // Code splitting
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
};