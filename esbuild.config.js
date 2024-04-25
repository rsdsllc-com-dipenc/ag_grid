const path = require("path");
const rails = require("esbuild-rails");
const envFilePlugin = require("esbuild-envfile-plugin");

require("esbuild")
  .build({
    entryPoints: ["application.js"],
    bundle: true,
    sourcemap: true,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    watch: process.argv.includes("--watch"),
    plugins: [rails(), envFilePlugin],
    loader: {
      ".png": "file",
    },
    publicPath: "/assets",
    assetNames: "[name]-[hash].digested",
  })
  .catch(() => process.exit(1));

// "build": "esbuild app/javascript/*.* --bundle --sourcemap --format=esm --outdir=app/assets/builds --public-path=/assets",
