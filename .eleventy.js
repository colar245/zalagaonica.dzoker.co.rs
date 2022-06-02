module.exports = function (config) {

  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/sitemap.xml");
  config.addPassthroughCopy("src/robots.txt");
  config.addPassthroughCopy("src/browserconfig.xml");
  config.addPassthroughCopy("src/favicon.ico");
  config.addPassthroughCopy("src/safari-pinned-tab.svg");
  config.addPassthroughCopy("src/site.webmanifest");
  config.addPassthroughCopy("src/*.png");
  return {
    dir: {
      input: "src",
      output: "dist",
    }
  };

};