/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://bhartiyanikoohomes8.com",
  // Static export: `next build` has already copied public/ into out/ by the time this
  // runs, so write sitemap.xml (and robots.txt) straight into the deployed folder.
  outDir: "out",
  // app/apple-icon.png builds as a route; it is an icon, not a page
  exclude: ["/thank-you", "/apple-icon.png"],
  generateRobotsTxt: false,
  generateIndexSitemap: false,


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};