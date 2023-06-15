import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
const path = require("path");
const license = require("rollup-plugin-license");

const terserOptions = {
    compress: {
        passes: 2
    }
};

module.exports = [
    {
        input: "src/index.js",
        output: [
            {
                file: "dist/ga4mp.esm.js",
                format: "esm",
                plugins: [
                    getBabelOutputPlugin({
                        presets: ["@babel/preset-env"],
                        exclude: "node_modules/**"
                    })
                ]
            },
            {
                file: "dist/ga4mp.esm.min.js",
                format: "esm",
                plugins: [terser(terserOptions)]
            }
        ]
    }
];
